const type = require('./type');
const curry = require('./curry');

module.exports = curry(
  (label, obj) => label.toLowerCase() === type(obj);
)
