
/*

Question 1

Utisez l'héritage protorypal (vous ne pouvez pas utiliser la notation ES6) pour modéliser le scénario suivant.
La classe de base se nomme « Book ». Son constructeur prend en paramètre:

- lettre du livre.
- le nombre de pages total
- et silelivre a une couverture reliée ou non (hardbook) (valeur booléenne}

De plus la classe continent une méthode describe » qui retourne la concaténation:

- du titre
- du nombre de pages
- et le prix du livre.

La classe contient une dernière méthode: « calculatePrice(qtyPage) » qui retourne le prix du livre qui est défini à 0.01$ par page. plus 30$ si c'est un ivre relié, Si le paramètre qtyPage est omis lors de 
l'appel de “caculatePrice”,
La fonction va prendre le nombre de pages total du livre.

Ensuite, la casse « BookinColor » dérive de la classe « Book ». San constructeur est similaire à  Book » mais il a deux paramètres supplémentaires: soiy le nombre de couleurs utlisé {qtyColon) et le pourcentage du livre imprimé
en couleur (ratioColon. Le constructeur de « BookinColor» appelle celui de la classe parente. Pour terminer, la classe « BookinColor » définit sa propre méthode = calculatePrice(qtyPage) », On calcule le prix d'un livre en couleur
de La façon suivante: on va calculer le nombre de pages noir et blanc (qtyPage*(1-ratioColor) et appeler La fonction «calculatePrce(qtyPage) » de la casse parente. Ensuite on calcule le nombre de pages couleur
{nbCouleur=qtyPage*ratioColor) at on le multiplie par le prix d'une page couleur (nbCouleur*0.25$). Encore ici si le paramètre qtyPage n'est pas passé en paramètre, La fonction va prendre le nombre de pages total du livre.


*/


var Book = function (title, qtyPage, isHardbook) {
  this.title = title;
  this.qtyPage = qtyPage;
  this.isHardbook = isHardbook;
};

Book.prototype.calculatePrice = function (qtyPage) {
  var qtyPageActual = qtyPage ? qtyPage:this.qtyPage;
  var hardbookPrice = this.isHardbook ? 30 :0;
  return 0.01 *qtyPageActual + hardbookPrice;
}

Book.prototype.describe = function () {
  return(
       this.title + " p." + this.qtyPage + "  $" + this.calculatePrice()
  );
}



var BookInColor = function (title, qtyPage, isHardbook, qtyColor, ratioColor) {
  Book.call(this, title,qtyPage, isHardbook);
  this.qtyColor = qtyColor;
  this.ratioColor = ratioColor;
};


BookInColor.prototype = Object.create(Book.prototype);
BookInColor.prototype.cconstructor = BookInColor;


BookInColor.prototype.calculatePrice = function (qtyPage) {{
    var qtyPageActual = qtyPage ? qtyPage : this.qtyPage;
    var qtyPageNoColors = qtyPageActual * (1-this.ratioColor);
    var price = Book.prototype.calculatePrice(this, qtyPageNoColors);
    var qtyPageColors =qtyPageActual * this.ratioColor;
    return price + qtyPageColors*0.2;
  }
}

var p1 = new Book("lol", 10, true);
console.log(p1.describe());
console.log(p1.calculatePrice());

var p2 = new BookInColor("lol", 10, true, 10, 0.5);


console.log(p2.describe);
console.log(p2.calculatePrice);
