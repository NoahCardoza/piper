const curry = require('./curry');
const is = require('./is');

const isFn = is('function')

module.exports = debug(curry(
  (fnOrVal, arr) => arr.reduce(
    (count, el) => count + (isFn(fnOrVal)
    ? !!fnOrVal(el)
    : el == fnOrVal),
    0
  )
)
)
