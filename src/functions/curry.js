const { unfinished, unset, _ } = require('./types');
const debug = require('./debug');
const pipe = require('./pipe');
const count = require('./count');

console.log(count);

const formatPartialArgs = ({ length }, args) =>
  Object.assign(
    Object.assign(
      [], { length }
    ).fill(unset),
    args
  )

const handelPartial = (fn, args) => {
  const ret = fn(
    ...formatPartialArgs(fn, args)
  )
  if (ret == unfinished)
    return curry(fn.bind(null, ...args))
  return ret
}

const handel_ = (bound, args) => {
  bound.map()
}

const curry = (fn, { _, partial, bind = [] } = {}) =>
  (...args) => (
      partial ? handelPartial(fn, bind.concat(args))
    : args.length >= fn.length - bind.length
      ?
      // !_ && count(_, bind.concat(args)) > 0
      // ? fn(handel_(bind, args))
      // : 
      fn(...bind, ...args)
    : curry( fn, {
        partial,
        bind: bind.concat(args)
      })
  )



module.exports = curry


// else if (args.includes(_))
