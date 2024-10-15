function submitVotes() {
    const votes = {};

    // Récupérer les votes pour chaque paragraphe
    const vote1 = document.querySelector('input[name="vote1"]:checked');
    const vote2 = document.querySelector('input[name="vote2"]:checked');

    // Enregistrer les votes si un choix a été fait
    if (vote1) {
        votes["Paragraphe 1"] = vote1.value;
    } else {
        alert("Veuillez voter pour le paragraphe 1");
        return;
    }

    if (vote2) {
        votes["Paragraphe 2"] = vote2.value;
    } else {
        alert("Veuillez voter pour le paragraphe 2");
        return;
    }

    // Afficher les résultats des votes
    console.log(votes);
    alert("Merci pour vos votes !
" + JSON.stringify(votes, null, 2));
}