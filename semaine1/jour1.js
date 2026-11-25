const taches = [
  { id: 1, titre: "Installer Node", statut: "termine" },
  { id: 2, titre: "Réviser JS", statut: "encours" },
  { id: 3, titre: "Faire le TP", statut: "afaire" },
  { id: 4, titre: "Lire la doc React", statut: "afaire" },
];

// Afficher le prenom
const prenom = "Amadou"
console.log(`Bonjour ${prenom}`);

// calculer le carre de n
const carre = (n) => n*n;
console.log(carre(6))

// verifier si un nombre est pair
const estPair = (n) => n % 2 === 0;
console.log(estPair(83))

// fonction qui return la description de la tache
function descriptionTache(tache) {
    return ` ${tache.id} - ${tache.titre} (${tache.statut})`
}
console.log(descriptionTache(taches[1]));

// fonction qui return Bonjour (nom)
function salut(nom = "inconnu") {
    return `Bonjour ${nom}`
}
console.log(salut())
console.log(salut("Demba"))

const maximum = (a,b) => (a < b ? b : a)
console.log(maximum(12, 17))

const chiffre = [12, 22, 14, 8 ,45]
for(let i of chiffre){
    console.log(i)
}

const titreEnMajuscules = (tache) => `${tache.titre.toUpperCase()}`
console.log(titreEnMajuscules(taches[2]));

function resume(taches) {

    for (const tache of taches) {
       console.log(descriptionTache(tache))   
    }
}
    // Voici la fonction flechee
    // const resume = (taches) => {
    //  taches.forEach((tache) => console.log(descriptionTache(tache)));
    // };
resume(taches)