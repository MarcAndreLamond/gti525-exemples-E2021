/*

Question 2 Node.js (Fichier)


Vous devez écrire un programme Node.JS qui ouvre un fichier texte en mode flux ("streams"), et qui détermine la plus
longue séquence de répétitions consécutives d'un même caractère dans le fichier. Lorsque la fin du fichier est atteinte, votre
programme devrait imprimer le caractère et le nombre de répétitions.
Notes: pour simplifier, nous pouvons assumer que le fichier contient uniquement des caractères ASCII. Vous devriez
également être en mesure de bien prendre en charge les séquences de caractères à la frontière de deux blocs ("blobs")
contiguës.
Exemple: si le fichier contient la chaîne suivante, la séquence la plus longue serait TTTTTTTTT, et le programme devrait
imprimer T et 9 répétitions lorsque la fin du fichier est atteinte. ABCDDDEFGHIJKLMMMMNOOOPQRRRSTTTTTTTTTUVWXYZZ

*/

// Solution:
var fs = require('fs');
if (! fs) process.exit(1);


if (process.argv.length < 3) {
 console.log("Syntax: fileName");
 process.exit(2);
}
// Premier paramètre passé en ligne de commande
var fileName = process.argv[2];
// Complétez votre code ici - ouvrez le fichier fileName
var readStream = fs.createReadStream(fileName);
var lastChar = null;
var charLen = 0;
var maxCharLen = 0;
var maxLastChar = null;
readStream.on("data", function(blob) {
 for (var i=0; i<blob.length; i++) {
 var c = blob[i];
 if (c == lastChar) {
 charLen++;
 } else {
 lastChar = c;
 charLen = 1;
 }
 if (charLen > maxCharLen) {
 maxCharLen = charLen;
 maxLastChar = lastChar;
 }
 }
} );
readStream.on("end", function() {
 console.log("Plus longue séquence: char " + maxLastChar + " , rép=" + maxCharLen);
} );
readStream.on("error", function() {
 console.log("Erreur lors de la lecture du fichier " + fileName);
} );