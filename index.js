function addition(nombre1, nombre2) {
    return nombre1 + nombre2;
}

function soustraction(nombre1, nombre2) {
    return nombre1 - nombre2;
}

function multiplication(nombre1, nombre2) {
    return nombre1 * nombre2;
}

function division(nombre1, nombre2) {
    if (nombre2 === 0) {
        throw new Error("Division par zéro impossible.");
    }
    return nombre1 / nombre2;
}

// Boucle principale pour répéter les calculs
let continuer;
do {
    // Demande un choix
    let choix;
    do {
        choix = prompt(
            "Quel calcul voulez-vous faire :\n" +
            "1- Addition\n" +
            "2- Soustraction\n" +
            "3- Multiplication\n" +
            "4- Division"
        );
    } while (choix !== "1" && choix !== "2" && choix !== "3" && choix !== "4");

    // Demande deux nombres
    let premierNombre, deuxiemeNombre;
    do {
        premierNombre = Number(prompt("Entrez un premier nombre :"));
        deuxiemeNombre = Number(prompt("Entrez un deuxième nombre :"));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

    // Appelle la fonction choisie
    let resultat;
    try {
        switch (choix) {
            case "1":
                resultat = addition(premierNombre, deuxiemeNombre);
                break;
            case "2":
                resultat = soustraction(premierNombre, deuxiemeNombre);
                break;
            case "3":
                resultat = multiplication(premierNombre, deuxiemeNombre);
                break;
            case "4":
                resultat = division(premierNombre, deuxiemeNombre);
                break;
            default:
                throw new Error("Choix non valide.");
        }
        alert("Voici le résultat : " + resultat);
    } catch (error) {
        alert("Erreur : " + error.message);
    }

    // Demande si l'utilisateur veut continuer
    continuer = confirm("Voulez-vous effectuer un autre calcul ?");
} while (continuer);

alert("Merci d'avoir utilisé la calculatrice !");
