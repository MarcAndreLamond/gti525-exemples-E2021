/*
  Injecte une nouvelle publicité aléatoire
*/
function generateNewAd() {
  const targetNode = document.getElementById("ads");
  const imgUrls = [
    /* Tirées de: https://homepages.cae.wisc.edu/~ece533/images/ */
    "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
    "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
    "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
    "https://homepages.cae.wisc.edu/~ece533/images/pool.png",
    "https://homepages.cae.wisc.edu/~ece533/images/watch.png",
  ];
  const adUrls = [
    "http://contoso.com",
    "http://cohowinery.com",
    "http://alpineskihouse.com",
    "http://northwindtraders.com",
    "http://lucernepublishing.com",
  ];
  const newImgUrl = imgUrls[Math.floor(Math.random() * imgUrls.length)];
  const newAdUrl = adUrls[Math.floor(Math.random() * adUrls.length)];

  // Générer la publicité: image enrobée dans un lien, et l'ajouter
  const adImg = document.createElement("img");
  adImg.src = newImgUrl;
  adImg.width = "100";
  adImg.height = "100";
  const adLink = document.createElement("a");
  adLink.href = newAdUrl;
  adLink.target = "_blank";
  adLink.appendChild(adImg);
  targetNode.appendChild(adLink);
}

function watchForAds() {
  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.targetNode === "A") {
        // node.href = "https://aeets.com"
      }
    }
  };

  const targetNode = document.getElementById("ads");

  // Création d'un observateur de mutations
  const observer = new MutationObserver(callback);

  // Configuration de l'observateur:
  // Inclure les changements aux attributs, la surveillance des noeuds ajoutés/retirés, et étendre la recherche aux noeuds descendants
  const config = { attributes: true, childList: true, subtree: true };

  // Enregistrement d'un observateur sur un noeud donné
  observer.observe(targetNode, config);
}

window.onload = function () {
  watchForAds();
  setInterval(generateNewAd(), 3000);
};
