var Point = function (x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.area = function area() {
  return 0;
};

Point.prototype.toString = function toString() {
  return "(" + this.x + "," + this.y + ")";
};

console.log(Point);

var Circle = function (x, y, r) {
  Point.call(this, x, y);

  this.r = r;
};

Circle.prototype = Object.create(Point.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function area() {
  return Math.PI * this.r * this.r;
};

Circle.prototype.toString = function toString() {
  return "(" + this.x + "," + this.y + ", " + this.r + ")";
};

var Ellipse = function (x, y, r1, r2) {
  Circle.call(this, x, y, r1);
  this.r2 = r2;
};

Ellipse.prototype = Object.create(Circle.prototype);
Ellipse.prototype.constructor = Ellipse;

Ellipse.prototype.area = function area() {
  return 3.1412 * this.r * this.r2;
};

Ellipse.prototype.toString = function toString() {
  return "(" + this.x + "," + this.y + ", " + this.r + "," + this.r2 + ")";
};

Point.prototype.translate = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

var p = new Point(10, 20);
var c = new Circle(20, 30, 5);
var e = new Ellipse(5, 10, 5, 2);

e.isCentered = function isCentered() {
  return this.x == 0 && this.y == 0;
};

function printProtoFunctions(obj) {
  for (var k in obj) {
    if (typeof obj[k].prototype !== "function" && typeof obj[k] == "") {
      continue;
    }
    printProtoFunctions(obj[k].prototype);
    console.log(k + " : " + obj[k].prototype);
  }
}

printProtoFunctions(e);
