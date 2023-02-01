const monelement = document.querySelector('#titre');
monelement.innerHTML = 'Nouveau contenu';
/*Deuxième partie de l'exercice (à mettre en commentaire pour tester la 1ère partie)*/
monelement.insertAdjacentHTML('beforeend', '<p>Contenu modifié !</p>');
/*Troisième partie de l'exercice (à mettre en commentaire pour tester la 2ème partie)*/
monelement.remove();