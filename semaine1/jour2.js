const taches = [
  { id: 1, titre: "Installer Node", statut: "termine" },
  { id: 2, titre: "Réviser JS", statut: "encours" },
  { id: 3, titre: "Faire le TP", statut: "afaire" },
  { id: 4, titre: "Lire la doc React", statut: "afaire" },
];

//Extraire titre et statut de la première tâche
const { titre, statut } = taches[0];
console.log(titre, statut);

function afficher({id,titre}) {
    console.log(id)
    console.log(titre)
};
afficher(taches[2]);

const newTaches = [...taches, {id:5, titre:"Se reposer", statut: "encours"}]
console.log(newTaches);
console.log(taches);


const Tache3 = taches[2];
const copieTache3 = { ...Tache3, statut:"encours"};
console.log(Tache3);
console.log(copieTache3);


const autre = [{id:5, titre:"Se reposer", statut: "encours"}];
const tab3 = [...taches, ...autre];
console.log(tab3);

let a = 23;
let b = 16;

[a,b]= [b,a];
console.log(`a = ${a}`);
console.log(`b = ${b}`);

//ici copie et taches sont liés
const copie = taches;
copie.push({id:5, titre: "Parcelles", statut: "afaire"});
console.log(copie);
console.log(taches);

// copie2 et taches ne sont pas liées
const copie2 = [...taches];
copie2.push({id:6, titre: "Medina", statut:"encours"});

console.log(copie2);
console.log(taches);