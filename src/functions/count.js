const curry = require('./curry');
const istype = require('./istype');
const debug = require('./debug');

const isFn = istype('function')

module.exports = debug(curry(
  (fnOrVal, arr) => arr.reduce(
    (count, el) => count + (isFn(fnOrVal)
    ? !!fnOrVal(el)
    : el == fnOrVal),
    0
  )
)
)
