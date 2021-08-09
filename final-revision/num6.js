// Partie 1
function clickPromise(node) {
 return new Promise( function(resolve, reject) {
 node.addEventListener("click", resolve);
 });
}
// Partie 2
window.onload = function() {
    var proms = [];
     var buttons = document.getElementsByTagName("button");
     buttons.forEach( function(button) {
        proms.push( clickPromise(button) );
    });
    waitForButtons(proms);
}
// Partie 3
async function waitForButtons(proms) {
 await Promise.all(proms);
 console.log( "Tous les boutons ont été cliqués!");
}
