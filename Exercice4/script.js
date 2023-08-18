// Demande à l'utilisateur d'entrer un nombre
let num = parseInt(prompt("Entrez un nombre pour calculer la factorielle :"));

// Calcule la factorielle du nombre saisi
let fact = 1;

for (var i = num; i >= 1; i--) {
    fact = fact * i;
}

// Affiche la factorielle calculée à l'utilisateur
alert("La factorielle est " + fact);