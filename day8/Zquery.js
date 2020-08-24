~(function (global) {
  function Zquery(select) {
    this.select = [];

    if (typeof select == "string") {
      this.select = document.querySelectorAll(select);
    } else if (select instanceof HTMLElement) {
      this.select = [select];
    } else if (select instanceof Array) {
      this.select = select;
    }
  }

  // new 完之后 prototype >>  __proto_
  Zquery.prototype.text = function (textString) {
    console.log("", this.select);
    this.select.forEach(function (item) {
      item.innerText = textString;
    });

    return this;
  };

  // new 完之后 prototype >>  __proto_
  Zquery.prototype.addClass = function (classItem) {
    this.select.forEach(function (item) {
      item.classList.add(classItem);
    });
    return this;
  };

  //添加事件
  Zquery.prototype.on = function (eventTag, callBack) {
    this.select.forEach(function (item) {
      item.addEventListener(eventTag, callBack);
    });

    return this;
  };

  //添加事件
  Zquery.prototype.click = function (callBack) {
    //new Zquery(this.select).on("click",callBack)
    return this.on("click", callBack);
  };

  //取消监听事件
  Zquery.prototype.off = function (eventTag, callBack) {
    this.select.forEach(function (item) {
      item.removeEventListener(eventTag, callBack);
    });
    return this;
  };

  Zquery.prototype.eq = function (index) {
    return new Zquery(this.select[index]);
  };

  Zquery.prototype.index = function () {
    let _that = this;
    let arr = _that.select[0].parentElement.children;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] == _that.select[0]) {
        return index;
      }
    }
    return -1;
  };

  //获取dom上的属性
  Zquery.prototype.attr = function (param,value) {
    if(value == null){
      return this.select[0].getAttribute(param);
    }else{
      return this.select[0].setAttribute(param,value);
    }
    
  };

  //判断是否包含传入的class名字如果包含返回true

  Zquery.prototype.hasClass = function (className) {
    //forEach()
    //findIndex
    //filter
   
    return this.attr("class")
      .split(" ")
      .findIndex(function (itme, index) {
        if (itme == className) {
          return true;
        } else {
          return false;
        }
      })  > 0 ? true : false
  };

  //判断是否包含传入的class名字如果包含返回true
  Zquery.prototype.removeClass = function (className) {
    this.select.forEach(function (item) {
      item.classList.remove(className);
    });
    return this;
  };

  Zquery.prototype.parent = function () {
    return new Zquery(this.select[0].parentElement);
  };

  //找到兄弟节点,不包含自己
  Zquery.prototype.sibling = function () {
    console.log(this.select[0].Sibling);
    return new Zquery();
  };

  global.z$ = function (select) {
    return new Zquery(select);
  };
})(window);

// ~
// !
// ()
// (function (global) {

//   console.log(111111111);

// })(window);
