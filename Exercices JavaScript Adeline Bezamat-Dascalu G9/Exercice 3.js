const button = document.querySelector("#bouton");
button.addEventListener("click", function() {
    button.classList.add("disabled");
    button.style.display = "none";
    /*Deuxième partie de l'exercice (à mettre en commentaire pour tester la 1ère partie)*/
    button.innerHTML = "Bingo!";
});