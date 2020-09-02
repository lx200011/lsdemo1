//Promise

//地狱回调

// function a(callback,callback1) {
//   setTimeout(function()  {
//     callback(callback1);
//   }, 2000);
// }

// function b(callback) {
//   console.log("我是b回调函数,我在2秒之后被a方法调用");
//   setTimeout(function()  {
//     callback();
//   }, 2000);
// }

// function c() {
//   console.log("我是c回调函数,我在4秒之后被a方法调用");
// }

// a(b,c);

// function a(callback) {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// function b(callback) {
//   console.log("我是b回调函数,我在2秒之后被a方法调用");
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// function c(callback) {
//   console.log("我是c回调函数,我在4秒之后被b方法调用");
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// function d(callback) {
//   console.log("我是d回调函数,我在6秒之后被c方法调用");
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// function e() {
//   console.log("我是e回调函数,我在8秒之后被d方法调用");
// }

// a(function () {

//   b(function(){

//     c(function(){

//       d(function(){

//         e();

//       })

//     });

//   });

// });

// function a(callback) {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// 成功 和 失败
// 等待 成功  失败
// let pro = new Promise(function (resolv, reject) {
//   setTimeout(function () {
//     resolv();
//   }, 2000);
// });
//var name = 5;
// pro.then(function () {
//     console.log("Promise成功了1");

//    // return Promise.reject();

//    // throw Error("貌似出了一点问题")

//    //name = 6;

//   name.age.zr = 5;

//   },function(){
//     console.log("Promise失败了1");
//   })

//   .then(

//   function() {
//     console.log("Promise成功了2");

//   },
//   function(){
//     console.log("Promise失败了2");

//   })

//   .then(function() {
//     console.log("Promise成功了3");

//   })

// .then(() => {
//   console.log("Promise成功了3");

// });

// function go() {
//   let pro = new Promise(function (resolv, reject) {
//     setTimeout(function () {
//       resolv();
//     }, 2000);
//   });

//   pro
//     .then(() => {
//       console.log(1, "获取信息");

//       return Promise.reject();
//     })

//     .then(() => {
//       console.log(2, "获取信息");
//       console.log(2);
//     })

//     .then(() => {
//       console.log(3, "获取信息");
//     })
//     .catch(() => {
//       console.log("失败了");
//       ajax((code) => {
//         // 为什么失败了。 是被人攻击了 ，还是不可预见性错误
//         if(code == 200){
//           go();
//         }
//       });
//     });
// }

// 返回参数 等于一不用加括号,不等于1要加括号
// array.forEach((ele) => {

// });

// array.forEach(function(ele,indexm,xx){

// });

//获取接口1
 let x =  new Promise((r,s)=>{
    console.log("p1,接口");
    r(1);
  })

//获取接口2
function p2(){
  return  new Promise((r,s)=>{
    console.log("p2,接口");
    s(2);
  })
}
//获取接口3
function p3(){
  return  new Promise((r,s)=>{
    console.log("p3,接口");
    r(3);
  })
}


// 全部成功 只要有一个失败了就不会走了
// Promise.all([x,p2(),p3()]).then((arr)=>{

//   console.log(arr);

// }).catch((error)=>{

//   console.log("有一个失败了",error);
// })

//全部都跑，最后都会执行then
// Promise.allSettled([x,p2(),p3()]).then((arr)=>{

// })

// 全部成功 只要有一个失败了就不会走了
// 竞速
// Promise.race([x,p2(),p3()]).then((arr)=>{

//   console.log(arr,"嘻嘻嘻");

// }).catch((error)=>{

//   console.log("有一个失败了",error);
// })


let px = new Promise((r,s)=>{

  s(5);

})

px.then(()=>{

  console.log("px成功了");

})
.then(()=>{

  console.log("px成功了");

}).catch(()=>{

  console.log("px失败了");

}).finally(()=>{

  console.log("px无论失败还是成功都会执行")
  
})


console.log(1);
async function go (){
  setTimeout(()=>{
    console.log(555);
    return 5;
  })
}
console.log(2);
console.log(go());
console.log(3);