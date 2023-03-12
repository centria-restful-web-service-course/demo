const jwksClient = require('jwks-rsa');
const jwt = require('jsonwebtoken');

async function getJWKsFromAuthorizationServer() {
  const client = jwksClient({
    jwksUri: 'http://localhost:8080/realms/master/protocol/openid-connect/certs',
  });

  const kid = '-QAJtEmrwDeihnoq2TvYLZjbjzBVsTs0kv1E7XfsugQ';
  const key = await client.getSigningKey(kid);
  console.log(key);
  const signingKey = key.getPublicKey();

  return signingKey;
}

/* eslint-disable consistent-return */
module.exports = async (req, res, next) => {
  if (!req.headers.authorization) return next(Error('Unauthorized'));

  const authHeader = req.headers.authorization;
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];


  // Request to the introspect endpoint and get active status of the access token
  fetch();
  // const publicKey = await getJWKsFromAuthorizationServer();

  // jwt.verify(token, publicKey, (err, payload) => {
  //   if (err) {
  //     console.error('error: ', err);
  //     return next(err);
  //   }
  //   // req.payload = payload;
  //   console.log(payload);
  //   next();
  // });
};
