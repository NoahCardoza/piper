module.exports = (head, ...fns) => (...args) =>
  fns.reduce((ret, fn) =>
    ret.then(fn)
    .then(ret => {
      if (typeof ret == 'object' && ret.length)
        return Promise.all(ret)
      return ret
    }),
    Promise.resolve(head(...args))
  )
