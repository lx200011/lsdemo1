//"use strict";
function a(name){
 
 //this.name = name;
 console.log(this);
}

//不是new的指向window
//如果是new的就指向这个对象
//console.log(a("张是").name);
//console.log(new a("礼物").name);


var pro = {
  age:5,
  name:function(){
    console.log("我是pro",this.age);
  }
}

var  xx = {
  age:3535,
  name:pro.name
}

pro.name();
xx.name();
var g = xx.name;
//g();

// function 关键字创建的出来方法 this是看谁去调用这个方法,就指向谁
// 没有对象去调用 是直接跑的话 this指向window

console.log("------------------");
// new 关键字方法如果有return的话 return基础类型没有作用的 return对象对象类型才生效
function zr(){
  this.aa = 5;
  this.bb = function(){
    console.log(this);
  }

  return ()=>{
    console.log(this);
  }
}
//()=>{} // 自己没有this这个概念
// 箭头函数的this是看在哪些的这个代码

var result = new zr();
result();


var x1 = {
  age:1,
  name:function(){
    console.log(this);
  }
}


function g1(a){
  this.a = a;
}
function g2(a){
  
}
g2.prototype.show = function(){

}
//原型链 只有在方法上面才有 
//字面量对象并没有原型链
//__proto__原型

g1.prototype.b = 5;

console.log( new g1(1),"xx");
g1.prototype.b = 6;
console.log( new g1(2));

console.log("------------------");


var aa2 = {
 c:3,
 d:function(){
   console.log(this);
 }
}

var aa1 = {
  a:1,
  b:2,
  __proto__:aa2
}


console.log(aa1);
console.log(aa1.c);
aa1.d()



function v1 (){

}

v1.prototype.show = function(){};
 
var v1Result =  new v1();
console.log(v1Result);
console.log(v1Result.__proto__ == v1.prototype);
console.log(v1Result.constructor == v1);


//Function.prototype.zr = 5;

// function Foo(){

// }

// Foo.prototype

// console.dir(Foo.zr);

class foo2 {
  nameAge = 5;

  showFoo2(){
    console.log(this,"gggggg");
  }
};
class Foo1 extends foo2{
   name = 5;
   age = 6;
   gx = [11,2,2,2,3];

  constructor(){
    super();
  }

   show(){
     console.log(this,this.name);
   }
}

new Foo1().showFoo2()