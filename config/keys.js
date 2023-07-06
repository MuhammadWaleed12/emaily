if (process.env.NODE_ENV === 'development') {
  //we are prodction return prod keys
  module.exports = require('./dev');
} else {
  //we are in development return dev keys
  module.exports = require('./prod');
}
