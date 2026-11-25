
export function ajouterTache(taches, titre) { 
    const nouvelleTache = {
        id: crypto.randomUUID(),
        titre: titre,
        statut: "afaire",
    };
    return [...taches, nouvelleTache]
}

export function supprimerTache(taches, id) { 
    return taches.filter((t) => t.id !== id)
}

export function modifierTache(taches, id, nouveauTitre) { 
    return taches.map((t) => t.id === id ? {...t, titre:nouveauTitre} : t);    
}
export function deplacerTache(taches, id, nouveauStatut) {
    return taches.map((t) => t.id === id ? {...t, statut:nouveauStatut} : t);    
}