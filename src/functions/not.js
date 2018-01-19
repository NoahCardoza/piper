const curry = require('./curry')
const istype = require('./istype')
const equals = require('./equals')
const debug = require('./debug')
const { unfinished, unset } = require('./types')

const isFunction = istype('function')
const isUnset = equals(unset)

module.exports = curry(
  (fnOrVal, val = unset) =>
    isFunction(fnOrVal) && isUnset(val) ? unfinished
    : val && isFunction(fnOrVal)        ? !fnOrVal(val)
    : !fnOrVal,
  {
    partial: true
  }
)
