// Exemple d'invocation
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.print = function () {
    console.log("x=+ " + x + ", y=" + y);
  };
}
Point.prototype.print = function () {
  console.print("Point");
};
Point.prototype.add = function (p2) {
  p.x += p2.x;
  p.y += p2.y;
};
var pt = new Point(1, 2);
pt.printInheritedFunctions();
// La fonction add sera affichée puisqu'elle est définie
// dans le prototype sans être redéfinie dans l'objet lui-même,
// mais pas print puisqu'elle est définie dans le
// prototype mais redéfinie dans l'objet
// (d'autres fonctions définies dans le prototype de Object peuvent aussi s'afficher)
// Attention, printInheritedFunctions doit être invocable à partir de tout objet
// JavaScript et non seulement à partir d'un objet de type "Point

Object.prototype.printInheritedFunctions = function () {
  for (var k in this) {
    //itérer sous toute les propriete dans l'objet this pi hérité de this._proto__
    if (typeof (this[k] !== "function")) {
      continue;
    }
    if (this.hasOwnProperty(k) == false) {
      console.log(k);
    }
  }
};
