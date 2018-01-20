// // const Safe = val => (
// //   typeof val == 'function' ? new Fn(val)
// //   : new Other(val)
// // )
// //
// // class Fn {
// //   constructor(val) {
// //     this.val = val
// //   }
// //   eq(x) {
// //     return this.val(x)
// //   }
// // }
// //
// // class Other {
// //   constructor(val) {
// //     this.val = val
// //   }
// //   eq(x) {
// //     return x == this.val
// //   }
// // }
// const preserve = (obj, key) => (...args) => obj[key](...args) //fn(...args)
//
// const all = preserve(Promise, 'all')//.bind(Promise)
//
// console.log(
//   all([1,2,3])
//   // .then(c  onsole.log)
// )

const x = [
  "dqxEFgKe2Go",
  "gI3Zn9-tuq8",
  "3aliik9qxYY",
  "AsOhTFMDGk8",
  "iVzH-fDa6HA",
  "NLmqqimN_6M",
  "ZilFychi4Mk",
  "sxtcmgbDYTE",
  "Odum0r9gxA8",
  "zyfiwK6wvIg",
  "ukitboNzhTw",
  "BvmbCRPif7w",
  "AC-3RJHzEU8",
  "xxXluXpgJ1Q",
  "WB1YJjQuSms"
]

const y = [
  "dqxEFgKe2Go",
  "gI3Zn9-tuq8",
  "3aliik9qxYY",
  "AsOhTFMDGk8",
  "iVzH-fDa6HA",
  "NLmqqimN_6M",
  "ZilFychi4Mk",
  "sxtcmgbDYTE",
  "Odum0r9gxA8",
  "zyfiwK6wvIg",
  "ukitboNzhTw",
  "BvmbCRPif7w",
  "AC-3RJHzEU8",
  "xxXluXpgJ1Q",
  "WB1YJjQuSms",
  "GsF05B8TFWg",
  "8IiVqwpQLYw",
  "EFmjgUgltzc",
  "RqcjBLMaWCg",
  "Z6pYo3AqgkY",
  "5Wiio4KoGe8",
  "w0EF3AxJwLU",
  "wU2F3QOGg8s",
  "xbmrgX8M5dE",
  "HIfriX8NGzY",
  "KuNUepg9oSQ",
  "jLHVM5neZf8",
  "E7kdoS_SsO0"
]

console.log(
  y.reduce(
    (all, el) => (x.includes(el)
      ? all
      : all.concat(el)
    ),
    []
  )
);


// console.log(new Set());
