/*Question 2

Utilisez la notion ES? pour créer la hiéarchie de la classe de "Book" et "Bookincolor" décrit dans le numéro précédent
*/


class Book {
  constructor(title, nbPage, isHardbook) {
    this.title = title;
    this.nbPage = nbPage;
    this.isHardbook = isHardbook;
  }
  calculatePrice() {
    const qtyPage = qtyPage || this.qtyPage
    const hardbookPrice = this.isHardbook ? 30 : 0;
    return price = 0.01 * qtyPage + hardbookPrice;
  }
  describe() {
    return '${this.title}, ${this.nbPage} p,  ${this.calculatePrice()}$';
  }
}

class BookInColor extends Book {
  constructor(title, nbPage, isHardbook) {
    super(title, nbPage, isHardbook);

    this.qtyColor = qtyColor;
    this.ratioColor = ratioColor;
  }
  calculatePrice() {

    const qtyPageActual = qtyPage || this.qtyPage;
    const qtyPageNoColors = qtyPageActual * (1-this.ratioColor);
    const price = super.calculatePrice(qtyPageNoColors);
    const qtyPageColors =qtyPageActual * this.ratioColor;
     return price + qtyPageColors*0.2;
  }

}


var p1 = new Book("lol", 10, true);
console.log(p1.describe());
console.log(p1.calculatePrice());

var p2 = new BookInColor("lol", 10, true, 10, 0.5);


console.log(p2.describe);
console.log(p2.calculatePrice);



// class Ellipse extends Circle {
//   constructor(x, y, r, r2) {
//     super(x, y, r);
//     this.r2 = r2;
//   }
//   calculatePrice() {
//     var nbCouleur = this.nbPage * this.ratioColor;
//     return nbCouleur * 0.2 + super.calculatePrice() + "$";
//   }
// }
