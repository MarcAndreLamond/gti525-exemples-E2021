/*

Considérez une base de données MongoDB qui possède deux collections: movies et users. users contient, pour chaque utilisateur, le numéro de l'utilisateur, son nom, et une liste des films écoutés: 

{
 userNo, userName, [ movieNo1, movieNo2, movieNo3 ... ] 
};

movies contient l'ensemble des films disponibles : {movieNo, movieName} (pour chaque film). 

Vous devez proposer une requête qui sera exécutée dans le shell MongoDB afin d'imprimer dans la console le nom de chaque usager et le titre de chacun des films qu'iel a écouté. Vous pouvez assumer que la base de données a déjà été chargée dans le shell (console) MongoDB. Conseil: vous devrez utiliser les jointures MongoDB tel qu'on l'a vu en classe


*/

db.users.find().forEach(
 function(user) {
     print(user.userName + " a écouté les films suivants:");
    user.movies.forEach(function (m) {
    var movieName = db.movies.findOne({"movieNo": m}).movieName;
        print(movieName);
    });
 }
)
