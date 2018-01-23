module.exports =
  (fn, n) =>
    (...args) =>
      fn(...args.slice(0, n))
