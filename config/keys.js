// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // return production keys
  module.exports = require('./prod.js');
} else {
  // return dev keys
  module.exports = require('./dev.js');
}
