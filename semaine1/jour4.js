
const taches = [
  { id: 1, titre: "Installer Node", statut: "termine" },
  { id: 2, titre: "Réviser JS", statut: "encours" },
  { id: 3, titre: "Faire le TP", statut: "afaire" },
  { id: 4, titre: "Lire la doc React", statut: "afaire" },
];

// Exercice 1 : calcul de la somme avec reduce
const nombres = [4, 8, 15, 16, 23, 42];
const somme = nombres.reduce((total, n) => total + n, 0);
console.log("Exo 1 :", somme); 

// Exercice 2 : compter les tâches avec reduce, puis comparer avec .length
const nombreTaches = taches.reduce((total) => total + 1, 0);
console.log("Exo 2 :", nombreTaches, taches.length); 

// Exercice 3 : compter les tâches par statut
const compterParStatut = taches.reduce((acc, t) => {
  return { ...acc, [t.statut]: (acc[t.statut] || 0) + 1 };  
  // ou bien faire:   if (acc[tache.statut]) { acc[tache.statut]++; } else { acc[tache.statut] = 1; }
}, {});
console.log("Exo 3 :", compterParStatut); // { termine: 1, encours: 1, afaire: 2 }

// Exercice 4 : tri alphabétique par titre (sur une copie)
const triParTitre = [...taches].sort((a, b) => a.titre.localeCompare(b.titre));
console.log("Exo 4 :", triParTitre);

// Exercice 5 : tri par id décroissant (les ids sont des nombres : on soustrait)
const triParIdDecroissant = [...taches].sort((a, b) => b.id - a.id);
console.log("Exo 5 :", triParIdDecroissant);

// Exercice 6 : le titre le plus long
const plusLongTitre = (liste) =>
  liste.reduce(
    (plusLong, t) => (t.titre.length > plusLong.length ? t.titre : plusLong),
    ""
  );
console.log("Exo 6 :", plusLongTitre(taches)); // "Lire la doc React"

// Exercice 7 : regrouper les tâches par statut
const grouperParStatut = (liste) =>
  liste.reduce((acc, t) => {
    return { ...acc, [t.statut]: [...(acc[t.statut] || []), t] };
  }, {});
console.log("Exo 7 :", grouperParStatut(taches));

// Preuve que le tableau d'origine n'a pas changé
console.log("Original :", taches);