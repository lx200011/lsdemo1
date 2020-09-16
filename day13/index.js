// call
// apply
// bind
// 改变当前函数的this

// this window
function a(){
 console.log(this); 
}

var b = {
  name:"good",
  c(a,b,c,s){
    console.log(this.name,a,b,c,s);
  }
}

//a();

//b.c();


var z = {
  name:"good2222"
}

//b.c.call(z,1,2,3)

//a();
//a.call(z);


//b.c.apply(z,[1,2,3,5])

var g = b.c.bind(z)
//g();
g(1,2,6,7);