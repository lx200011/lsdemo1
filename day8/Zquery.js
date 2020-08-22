


~function (global) {

  function Zquery(select) {
    this.select = [];

    if (typeof select == "string") {
      this.select = document.querySelectorAll(select);
    } else if (select instanceof HTMLElement) {
      this.select = [select];
    }

  }

  // new 完之后 prototype >>  __proto_
  Zquery.prototype.text = function (textString) {
    console.log('', this.select);
    this.select.forEach(function (item) {
      item.innerText = textString;
    })

    return this;
  }

  // new 完之后 prototype >>  __proto_
  Zquery.prototype.addClass = function (classItem) {
    this.select.forEach(function (item) {
      item.classList.add(classItem);
    })
    return this;
  }

  Zquery.prototype.on = function (eventTag, callBack) {
    this.select.forEach(function (item) {
      item.addEventListener(eventTag, callBack)
    })

    return this;
  }

  Zquery.prototype.eq = function (index) {
    return new Zquery(this.select[index]);
  }

  Zquery.prototype.index = function () {
    let _that = this;
    let arr = _that.select[0].parentElement.children;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] == _that.select[0]) {
        return index;
      }
    }
    return -1;
  }

  Zquery.prototype.parent = function () {

    return new Zquery(this.select[0].parentElement)
  }

  Zquery.prototype.sibling = function () {
    console.log(this.select[0].Sibling);
    return new Zquery()
  }

  global.z$ = function (select) {
    return new Zquery(select);
  }
}(window);

// ~
// !
// ()
// (function (global) {

//   console.log(111111111);


// })(window);
