
//Récupère la tâche d'id 1 et affiche-la dans la console.
console.log("-----exo1-----")
const reponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const donnees = await reponse.json();

console.log(donnees);

// Recuperer uniquement le titre avec le destructuring
console.log(" ---------exo2-----------")
const {title} = donnees;
console.log("Titre : ",title)

// Récupère toutes les tâches (/todos) et affiche combien il y en a (.length).
console.log("--------exo3----------")
const reponsetodos = await fetch("https://jsonplaceholder.typicode.com/todos");
const donneestodos = await reponsetodos.json()
console.log("Nombre de tache:",donneestodos.length)

// Récupère /todos?_limit=5 pour n'avoir que 5 tâches, et affiche leurs titres avec map.
console.log("----------exo4----------------")
const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
const donneeRes = await res.json()

const tab = donneeRes.map((t) => t.title)
console.log(tab)

// Parmi ces tâches, affiche seulement celles qui ne sont pas terminées avec filter.
console.log("----------exo5----------");
const nonTerminees = donneeRes.filter((t) => t.completed === false);
console.log(nonTerminees);


console.log("--------exo6---------");
async function chargerTache(id) {
  const reponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  if (!reponse.ok) {
    throw new Error(`Erreur HTTP ${reponse.status}`);
  }

  return await reponse.json();
}

try {
  const tache = await chargerTache(1);
  console.log(tache);
} catch (error) {
  console.log("Erreur :", error.message);
}

console.log("------------------exo7-----------------");
try {
  const r = await chargerTache(99999);
  console.log(r);
} catch (err) {
  console.log("Erreur :", err.message);
}

// Récupère les tâches de l'utilisateur 1 et compte combien sont terminées avec reduce ou filter.
console.log("-------------exo8--------------");
const reponse8 = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1");

if (!reponse8.ok) {
  throw new Error(`Erreur HTTP ${reponse8.status}`);
}

const todosUser1 = await reponse8.json();

const terminees = todosUser1.filter((t) => t.completed === true);

console.log("Tâches de l'utilisateur 1 :", todosUser1.length);
console.log("Tâches terminées :", terminees.length);


const nbTerminees = todosUser1.reduce(
  (total, t) => (t.completed ? total + 1 : total),
  0
);
console.log("Tâches terminées (reduce) :", nbTerminees);

//  crée une tâche avec POST et affiche la réponse
console.log("------------exo9--------------")
const reponse9 = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
        title: "Ma nouvelle tache",
        completed: false,
        userId: 1,
    }),
});
if(!reponse9.ok){
    throw new Error(`Erreur HTTP ${reponse9.status}`); 
}
const donnee9 = await reponse9.json()
console.log("Statut HTTP :", reponse9.status); 
console.log(donnee9);

// transforme les données reçues au format : { id, titre, statut }, avec statut valant "termine" si completed est true, sinon "afaire".
console.log("-------------exo10--------------");
const reponse10 = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

if (!reponse10.ok) {
  throw new Error(`Erreur HTTP ${reponse10.status}`);
}

const todosApi = await reponse10.json();

const tachesKanban = todosApi.map((t) => ({
  id: t.id,
  titre: t.title,
  statut: t.completed ? "termine" : "afaire",
}));

console.log(tachesKanban);