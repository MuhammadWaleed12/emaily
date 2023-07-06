if (process.env.NODE_ENV === 'production') {
  //we are dev return prod keys
  module.exports = require('./prod');
} else {
  //we are in production return dev keys
  module.exports = require('./dev');
}
