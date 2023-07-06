if (process.env.NODE_ENV === 'prod') {
  //we are prodction return prod keys
  module.exports = require('./prod');
} else {
  //we are in development return dev keys
  module.exports = require('./dev');
}
