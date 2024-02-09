//map
if (!Array.prototype.customMap) {
    Array.prototype.customMap = function(callback) {
      var newArray = [];
      for (var i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
      }
      return newArray;
    };
  }
  
  //filter
  if (!Array.prototype.customFilter) {
    Array.prototype.customFilter = function(callback) {
      var newArray = [];
      for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
          newArray.push(this[i]);
        }
      }
      return newArray;
    };
  }
  
  //reduce
  if (!Array.prototype.customReduce) {
    Array.prototype.customReduce = function(callback, initialValue) {
      var accumulator = initialValue === undefined ? undefined : initialValue;
      for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
          accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
          accumulator = this[i];
        }
      }
      return accumulator;
    };
  }
  
  //массив
  var numbers = [1, 2, 3, 4, 5];
  
  //используме
  var mapped = numbers.customMap(function(num) {
    return num * 2;
  });
  
  var filtered = numbers.customFilter(function(num) {
    return num % 2 === 0;
  });
  
  var reduced = numbers.customReduce(function(acc, num) {
    return acc + num;
  }, 0);
  
  console.log("Mapped:", mapped);
  console.log("Filtered:", filtered);
  console.log("Reduced:", reduced);
  