require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 9090;
server.listen(port, () => {
  console.log('Listening on port', port);
});
