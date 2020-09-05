//
// 1.提案
// 2.草稿
// 3.测试
// 4.发布
// js es5 es6
//es6 async await
// es6
// es5 100%都支持了

// async await es7 es8 es9 es10

// 事件轮训
//A.在给dom元素添加样式. b线程又在删除这个dom元素
// js 是单线程的。

//10秒才返回
//事件轮询
//微任务 宏任务  ==>> 异步
//宏任务 setTimeout setInterval
//微任务  then catch finally  MutationObserver

//定时器只会执行一次
// setTimeout(function(){
//     console.log(5);
// },1000)

//   setInterval(function(){
//   console.log(6);
// },1000)

// 执行过程 一定把同步代码全部先执行
// 然后在去执行异步的
// let p1 = new Promise((r,s)=>{
//   s();
// })

// let p2 = new Promise((r,s)=>{
//   s();
// })
// 先去 把宏任务添加到宏任务队列但是不执行
// 把微任务全部添加到微任务队列

// 先把微任务队列的所有任务全部执行
// 在去执行宏任务 只会执行一个任务
// 把这个宏任务里面的同步代码执行完

// 没有微任务  找宏任务 在拿一个出来
// 有没有没有微任务 找宏任务 在拿一个出来

// 没有微任务  找宏任务 在拿一个出来
// 先把同步代码执行完成之后 发现微任务 全部添加到微任务队列
// 然后把所有微任务全部执行
// 找宏任务 取出一个

// 先把同步代码跑完 执行全部微任务 取一个宏任务跑

// console.log(1);

// setTimeout(function(){
//   console.log(2.1,"宏任务");

//   setTimeout(()=>{
//     console.log(2.3,"宏任务");

//   })
//   p2.catch(()=>{
//     console.log(2.2,"微任务");
//   })
// })

// p1.catch(()=>{
//   console.log(3.1,"微任务");
// })

// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);

// 1 4 5 6 7 8 3.1 2.1 2.2 2.3

// 先把同步代码跑完 执行全部微任务 取一个宏任务跑

//主线程直接执行
// console.log('1');
// //丢到宏事件队列中
// setTimeout(function() {
//     console.log('2');
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })

// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     //微事件2
//     console.log('8')
// })
// //丢到宏事件队列中
// setTimeout(function() {
//     console.log('9');
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })

// 1 7 8 2 4 5 9 11 12

// resolve 是成功 reject失败
// 是等待
// 不是成功就是失败
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5555);
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(6666);
  }, 1000);
});

// p1.then((value)=>{
//   console.log(value);

//   setTimeout(()=>{
//     return 6;
//   },2000)
// }).then((value)=>{
//   console.log(value);
//   return 7;
// }).then((value)=>{
//   console.log(value);
// }).catch


async function test() {
  let value1;
  let value2;
  try {
    value1 = await p1;

    value2 = await p2;
  } catch(err) {

    console.log(err);
  }

  console.log(1);
  console.log(value1, value2);
}

test();
