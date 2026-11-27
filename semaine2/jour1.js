
// Retourne une promesse qui se termine après `ms` millisecondes.
const attendre = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


// EXERCICE 1 : l'ordre d'affichage
console.log("--- exo 1 ---");
console.log("1");
setTimeout(() => console.log("2 (après 1 seconde)"), 1000); 
console.log("3");

await attendre(1500); 


// EXERCICE 2 : attendre(ms) avec .then
await attendre(1000).then(() => console.log("Une seconde est passée"));


// ------------------------------------------------------------
// EXERCICE 3 : fonction async avec await
// `await` met la fonction en pause jusqu'à la fin de la promesse.
// `await` ne s'utilise que dans une fonction `async`
// (ou au niveau du fichier en mode module).
// ------------------------------------------------------------
console.log("--- exo 3 ---");
async function demo() {
  console.log("Début");
  await attendre(2000); 
  console.log("Fin");
}
await demo(); 


// ------------------------------------------------------------
// EXERCICE 4 : diviser(a, b) retourne une promesse
// - resolve(valeur) => succès
// - reject(erreur)  => échec
// ------------------------------------------------------------
const diviser = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Division par 0"));
    } else {
      resolve(a / b);
    }
  });
};


// ------------------------------------------------------------
// EXERCICE 5 : consommer la promesse avec .then / .catch
// .then  => si succès
// .catch => si échec
// ------------------------------------------------------------
console.log("--- exo 5 ---");
await diviser(10, 2).then((resultat) => console.log("Résultat :", resultat)); // 5
await diviser(10, 0).catch((erreur) => console.log("Erreur :", erreur.message)); // Division par 0


// ------------------------------------------------------------
// EXERCICE 6 : la même chose avec async/await + try/catch
// - `await` donne la valeur (au lieu de la promesse)
// ------------------------------------------------------------
console.log("--- exo 6 ---");
const calcul = async (a, b) => {
  try {
    const resultat = await diviser(a, b);
    console.log("Résultat :", resultat);
  } catch (erreur) {
    console.log("Erreur :", erreur.message); // message réel de l'erreur
  }
};

await calcul(10, 2); // Résultat : 5
await calcul(10, 0); // Erreur : Division par 0


// ------------------------------------------------------------
// EXERCICE 7 : chargerTaches() simule un appel à une API
// Elle attend 1 seconde, puis RETOURNE le tableau.
// Une fonction `async` retourne toujours une promesse.
// ------------------------------------------------------------
console.log("--- exo 7 et 8 ---");
const taches = [
  { id: 1, titre: "Installer Node", statut: "termine" },
  { id: 2, titre: "Réviser JS", statut: "encours" },
];

async function chargerTaches() {
  await attendre(1000);
  return taches;
}

// EXERCICE 8 : avec et sans await
console.log(await chargerTaches()); // le tableau
console.log(chargerTaches());       // Promise { <pending> } : en absence de await !

await attendre(1500); 


// ------------------------------------------------------------
// EXERCICE 9 : une fonction async qui ÉCHOUE
// - `return`            => la promesse réussit
// - `throw new Error()` => la promesse est rejetée
// ------------------------------------------------------------
console.log("--- exo 9 ---");
async function chargerTachesEnEchec() {
  await attendre(1000);
  throw new Error("Serveur indisponible");
}

try {
  await chargerTachesEnEchec();
} catch (erreur) {
  console.log("Erreur :", erreur.message); 
}
