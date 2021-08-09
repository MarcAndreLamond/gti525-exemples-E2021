function testTimeout(a, b, c, d, e) {
  var result = 0;
  setTimeout(function () {
    setTimeout(function () {
      result = result * 10 + a;
    }, 900);
    result = result * 10 + b;
  }, 500);

  result = result * 10 + c;
  setTimeout(function () {
    setTimeout(function () {
      result = result * 10 + d;
    }, 0);
    result = result * 10 + e;
  }, 1000);

  setTimeout(function () {
    console.log(result);
  }, 9000);
}

function myFunc(a, b, ...args) {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return a * b * sum;
}

// console.log(myFunc(10, 3, 4, 3, 2));

var myTitle = "Mon objet";
var myObj = {
  name: "Bob King",
  age: 51,
};
var getJson = function (title) {
  return title + "\n:" + JSON.stringify(this);
};
getJson.apply(myObj, [myTitle]);
console.log(getJson.apply(myObj, [myTitle]));
