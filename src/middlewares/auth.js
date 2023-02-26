/* eslint-disable consistent-return */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) return next(Error('Unauthorized'));
  const authHeader = req.headers.authorization;
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];

  // Get Public key
  // Verify using getKey callback
  // Example uses https://github.com/auth0/node-jwks-rsa as a way to fetch the keys.
  // var jwksClient = require('jwks-rsa');
  // var client = jwksClient({
  //   jwksUri: 'https://sandrino.auth0.com/.well-known/jwks.json'
  // });
  // function getKey(header, callback){
  //   client.getSigningKey(header.kid, function(err, key) {
  //     var signingKey = key.publicKey || key.rsaPublicKey;
  //     callback(null, signingKey);
  //   });
  // }

  // jwt.verify(token, getKey, options, function(err, decoded) {
  //   console.log(decoded.foo) // bar
  // });

  jwt.verify(token, PUBLIC_KEY, (err, payload) => {
    if (err) {
      return next(Error());
    }
    req.payload = payload;
    next();
  });
  next();
};
