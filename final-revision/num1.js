/*

Question 1 1. DOM, AJAX et JSON

Vous écrivez le code pour une extension navigateur qui va rendre la navigation plus simple pour les personnes avec des
limitations visuelles en remplaçant les images par du contenu textuel équivalent généré par un algorithme de "Machine
Learning". Nous supposons ici que l'algorithme peut être invoqué par une requête AJAX POST à une URL, et en récupérant
les résultats obtenus.

1. function getImages():
    - Retourne un tableau de l'ensemble des noeuds images (<IMG>) dans la page
2. function translate(images):
    - Prend en paramètre le tableau des éléments DOM images
    - Créer un nouveau tableau de même taille qui devra contenir les URLs des différentes images (ex., urls)
    - Effectue une requête AJAX avec méthode POST à l'URL /text. Note: vous devez passer le tableau urls sérialisé
      au format JSON comme argument à la méthode send.
    - Vous devez afficher un message dans la console si une condition d'erreur de l'objet XMLHttpRequest survient:
      erreur de réseau, timeout et erreur de protocole HTTP (réponse différente de 200). Le reste du traitement ne doit
      pas être effectué dans un tel cas.
    - Sur réception des données en format JSON (vous devez valider que l'en-tête approprié correspond au format
      application/json), vous devez invoquer la fonction replaceImages en passant le tableau images et l'objet
      reconstruit en désérialisant la réponse obtenue en format JSON en tant qu'objet JavaScript.
3. function replaceImages(images, descriptions):
    - Prend en paramètre le tableau des images comme #2
    - Pour chaque image (indice i), vous devez remplacer le noeud (<IMG>) par un nouveau noeud de type texte
      (nodeType==3), dont la valeur sera la description correspondante dans le tableau descriptions de même indice
      i. Indice: nous avons vu en cours une méthode permettant de remplacer un noeud "enfant" par un autre.
*/

//1
function getImages() {
 return document.querySelectorAll("IMG");
 // Ou: document.getElementsByTagName("IMG");
}

//2
function translate(images) {
    let urls = [];
    for (let i=0; i<images.length; i++) {
        urls.push(images[i].src);
    }

    // Do ajax query
    let x = new XMLHttpRequest();
    x.open("POST", "/text");
    x.onload = function() {
    if (x.status == 200) {
        if (x.getResponseHeader("content-type") == "application/json") {
        // appeler replaceImages
        replaceImages(images, JSON.parse(x.responseText));
        } else {
            console.log("Mauvais contenu");
         }
     } else {
        console.log("Erreur protocole");
    }
 }

 x.onerror = function() {
    console.log("Erreur réseau");
 }

 x.ontimeout = function() {
    console.log("Timeout");
 }
 x.send(JSON.stringify(urls));
}

//3
function replaceImages(images, descriptions) {
 for (let i=0; i<images.length; i++) {
 let newNode = document.createTextNode(descriptions[i]);
 images[i].parentNode.replaceChild(newNode, images[i]);
 }
}

window.onload = function() {
 const images = getImages();
 translate(images); // Va invoquer replaceImages
}
