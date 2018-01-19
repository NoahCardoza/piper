const curry = require('./curry');
module.exports = curry((fn, list) => list.filter(fn))
