const curry = require('./curry');

module.exports = curry(
  (type, data) => typeof data == type
)
