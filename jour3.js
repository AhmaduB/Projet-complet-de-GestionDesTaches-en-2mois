const taches = [
  { id: 1, titre: "Installer Node", statut: "termine" },
  { id: 2, titre: "Réviser JS", statut: "encours" },
  { id: 3, titre: "Faire le TP", statut: "afaire" },
  { id: 4, titre: "Lire la doc React", statut: "afaire" },
];

const tabTitres = () => taches.map((tache) => tache.titre);
console.log(tabTitres());

//Retourne uniquement les tâches "afaire" avec filter.
const tacheAfaire = () => taches.filter((t) => t.statut === "afaire")
console.log(tacheAfaire()) 

// Retrouve la tâche d'id 2 avec find. Que se passe-t-il avec l'id 99 ?
const tache2 = () => taches.find((t) => t.id === 2)
console.log(tache2())
console.log("*********************************************")
const tache99 = () => taches.find((t) => t.id === 99)
console.log(tache99())  // il renvoie undefined car cette tache avec id=99 n'existe pas


// Écris tachesParStatut(taches, statut) qui retourne les tâches d'un statut donné.
const tachesParStatut = (tache, statut) => taches.filter((t) => t.statut === statut)
console.log(tachesParStatut(taches, "afaire"))
console.log(tachesParStatut(taches, "termine"))

// Retourne les tâches dont le titre contient "JS" (indice : .includes()).
const titreJs = () => taches.filter((t) => t.titre.includes("JS"))
console.log(titreJs())

// Avec map et le spread, retourne un tableau où toutes les tâches ont le statut "afaire"
const tabAfaire = () => taches.map((t) => {
  return {...t, statut: "afaire"}
})

console.log(tabAfaire())

// Avec map et une condition, retourne un tableau où seule la tâche d'id 3 passe à "encours".
const tab = () => taches.map((t) =>  t.id === 3 ? {...t, statut: "encours"} : {...t})
console.log(tab())

// Retourne les titres des tâches non terminées en enchaînant filter puis map.

const tab7 = () => taches
  .filter((t) => t.statut !== "termine")
  .map((t)=> t.titre)
console.log(tab7())