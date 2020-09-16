var a = 1;
var objectA = {
  age: 5,
};
// function setA(opa,objA){
//   opa = 2;
//   console.log(opa,a);
// }

function setA(objA) {
  objA.age = 7;
  console.log(objA, objectA);
}

//setA(objectA);

// var z = 5;

// var  c = z;

// c = 7;

// console.log(z,c);

// var g =  objectA;

// g= 36;

// console.log(g,objectA);

objectA = {
  age: 5,
  sx: 7,
  ge: 1,
  gox: {
    ws: 1,
  },
  name: undefined,
  sss: null,
  agesx() {
    console.log(12323);
  },
};

//var g = objectA;

// var g =  Object.assign({},objectA)

// g.age = 77;
// g.gox.ws = 77;

// console.log(g,objectA);

// var g =   JSON.parse(JSON.stringify(objectA));

// g.age = 77;
// g.gox.ws = 77;

//console.log(g,objectA);

var g = copy(objectA);

g.age = 77;
//g.gox.ws = 66;

console.log(g, objectA);

function copy(obj) {
  var result = {};
  function deep(obj, result) {
    Object.keys(obj).forEach((item) => {
      if (
        obj[item] == null ||
        obj[item] == undefined ||
        typeof obj[item] != "object"
      ) {
        //console.log(item);
        result[item] = obj[item];
      } else {
        result[item] = {};
        deep(obj[item], result[item]);
      }
    });
  }
  deep(obj, result);
  return result;
}

// var a1 = []; //客厅
// var a2 = []; //外景图
// var a3 = []; //阳台

// function ai(callback) {
//   callback({
//     url: "https://xxx.png",
//     imageId: "1",
//   });
// }

// document.querySelector("button", function () {
//   let value = this.getAttribute("listName");
//   ai(function () {
//       window[value].push(value);
//   });
// });

function demo(){
  var index = 0;
  return function(){
    index++;
    console.log(index);
  }
}

var demovalue = demo();
var demovalue1 = demo();

demovalue();
demovalue();
demovalue();

demovalue1();
demovalue1();
demovalue1();


// //第一按钮
// function click1(){
//   ai(function(value){
//     a1.push(value);
//   });
// }

// //第二个按钮
// function click2(){
//   ai(function(value){
//     a2.push(value);
//   });
// }

// function click3(){
//   ai(function(value){
//     a3.push(value)
//   });
// }
