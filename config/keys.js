if (process.env.NODE_ENV === 'development') {
  //we are dev return prod keys
  module.exports = require('./dev');
} else {
  //we are in production return dev keys
  module.exports = require('./prod');
}
