const P = require('./src');

const mod = P.curry(
  (x, y) => y % x
)

const arr = [0, 1, 0, 3, 0, 5, 6, 7, 8, 9, 10]

const flow = P.pipe(
  P.filter(P.not(mod(5))),
  console.log
)(arr)

// const add = x => y => x + y
// const wait = s => () => new Promise((resolve, reject) => {
//   setTimeout(() => resolve(42), s)
// })
//
// const flow = P.pipe(
//   add(1),
//   P.fork(
//     add(8),
//     wait(2000)
//   )
// )
//
// flow(2).then(e => {
//   console.log(42, e)
// })
// .catch(e => {
//   console.log(e);
// })

// const add = P.curry((x, y) => x + y)
//
//
// const add5all = P.pipe(
//   P.map(add(5))
// )
//
// console.log(
//   P.map(add(5))([1,2,3,4,5])
// );

// const add = P.curry((x, y) => x + y)
// console.log(add(1, 2))
// console.log(add(1)(2))

//
// const mut = P.curry((x, y) => x * y)
//
// const mutBy6 = mut(6)
//
// console.log(
//   mut(6)(7)
// )
