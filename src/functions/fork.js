const map = require('./map')
const call = require('./call')

module.exports = (...fns) => data => map(call(data))(fns)
