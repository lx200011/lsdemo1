/**
 *
 * 1. 等待
 * 2. 成功
 * 3. 失败
 *
 * 初始状态是等待.
 * 只要被更改过状态之后就不能在更改
 */
const PENDING = "PENDING";
const RELOVE = "RELOVE";
const REJECT = "REJECT";

class MyPromise {
  constructor(callback) {
    this.type = PENDING; // 初始是等待状态;

    this.method = {
      success() {},
      error() {},
    };

    //call apply bind
    //主动去设置这个方法的this
    //这三个方法只能用在functioin的方法上 对于箭头函数不生效
    callback(this.resolve.bind(this), this.reject.bind(this));
  }

  //成功
  resolve(value) {
    setTimeout(() => {
      this.type = RELOVE;
      this.method.success(value);
    });
  }

  //失败
  reject(value) {
    setTimeout(() => {
      this.type = REJECT;
      this.method.error(value);
    });
  }

  then(onRelove, onReject) {
    // debugger
    let that = this;
    return new MyPromise((r, s) => {
      if (that.type == PENDING) {
        that.method.success = function (v) {
          let value;
          try {
            value = onRelove(v);
            if (value instanceof MyPromise) {
              value.then(r, s);
              return;
            }
            r(value);
          } catch (error) {
            s(error);
          }
        };
        that.method.error = function (v) {
          let value;
          try {
            value = onReject(v);
            if (value instanceof MyPromise) {
              value.then(r, s);
              return;
            } else {
              r(value);
            }
          } catch (error) {
            if (onReject == undefined) {
              s(v);
            } else {
              s(error);
            }
          }
        };
      }
    });
  }

  static isResolve(value) {
    return new MyPromise((r) => {
      r(value);
    });
  }

  static isReject(value) {
    return new MyPromise((r, s) => {
      s(value);
    });
  }

  static all(array) {
    return new MyPromise((r, s) => {
      let result = [];
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.then(
          (value) => {
            result.push(value);
            if (index == array.length - 1) {
              r(result);
            }
          },
          (value) => {
            s(index);
          }
        );
      }
    });
  }

  static race(array) {
    return new MyPromise((r,s) => {
      let result;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.then(
          (value) => {
            if(result == null){
              result = value;
              r(result);
            }
          }
        );
      }
    });
  }

  catch(onReject) {
    return this.then(function () {}, onReject);
  }
}
