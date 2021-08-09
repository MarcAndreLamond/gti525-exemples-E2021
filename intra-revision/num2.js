var Tag = function () {
  // Aucune propriété à définir
};

// Complétez votre code ici...

function ImageTag(src) {
  this.src = src;
}

ImageTag.prototype = Object.create(Tag.prototype);

ImageTag.prototype.constructor = ImageTag;

function TitleTag(level, title) {
  this.level = level;
  this.title = title;
}

TitleTag.prototype = Object.create(Tag.prototype);
TitleTag.prototype.constructor = TitleTag;

var img = new ImageTag("myimage.png");
var title = new TitleTag(1, "Bienvenue sur ma page");

// 2.2
// ne pas definir methodes a lexterieur des constructeurs

ImageTag.prototype.html = function () {
  return `<img src="${this.src}" />`;
};

TitleTag.prototype.html = function () {
  return `<h${this.level}> ${this.title}</h${this.level}>`;
};

//2.3

class tag2 {
  constructor()
}

class ImageTag2 extends tag2{
  constructor(src) {
    this.src = src;
  }

  html() {
    return `<img src="${this.src}" />`;
  }
}

class TitleTag2 extends tag2{
  constructor(level, title) {
    this.level = level;
    this.title = title;
  }

  html() {
    return `<img src="${this.src}" />`;
  }
}
