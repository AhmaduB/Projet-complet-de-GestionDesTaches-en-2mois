import {
  ajouterTache,
  supprimerTache,
  modifierTache,
  deplacerTache,
} from "./taches.js";

const depart = [{ id: 1, titre: "Test", statut: "afaire" }];

const apresAjout = ajouterTache(depart, "Autre tâche");
const apresDeplacement = deplacerTache(apresAjout, 1, "encours");
const apresModification = modifierTache(apresDeplacement, 1, "Test modifié");
const apresSuppression = supprimerTache(apresModification, 1);

console.log("depart :", depart);                 // doit être INCHANGÉ
console.log("après ajout :", apresAjout);
console.log("après déplacement :", apresDeplacement);
console.log("après modification :", apresModification);
console.log("après suppression :", apresSuppression);
