let max = 0;
let min = 1000000;
let maxplace = 0;
let minplace = 0;
let jourvend;
let jourachete;
function meilleurInvestissement(arr){
    for (let i = 0; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
            maxplace = i;
        }
        if (min > arr[i]){
            min = arr[i];
            minplace = i;
        }
    }
    switch (maxplace) {
        case 0:
            jourvend = "lundi";
            break;
        case 1:
            jourvend = "mardi";
            break;
        case 2:
            jourvend = "mercredi";
            break;
        case 3:
            jourvend = "jeudi";
            break;
        case 4:
            jourvend = "vendredi";
            break;
        case 5:
            jourvend = "samedi";
            break;
        case 6:
            jourvend = "dimanche";
            break;
        default:
            jourvend = "erreur";
            break;
    }
    switch (minplace) {
        case 0:
            jourachete = "lundi";
            break;
        case 1:
            jourachete = "mardi";
            break;
        case 2:
            jourachete = "mercredi";
            break;
        case 3:
            jourachete = "jeudi";
            break;
        case 4:
            jourachete = "vendredi";
            break;
        case 5:
            jourachete = "samedi";
            break;
        case 6:
            jourachete = "dimanche";
            break;
        default:
            jourachete = "erreur";
            break;
    }
    console.log("Il faut investir le " + jourachete + " et le vendre le " + jourvend)
}

console.log(meilleurInvestissement([50,10,20,2,80,60,20]));


// ----------------- ÉNONCÉ -----------------

// Vous avez 7 valeurs dans un tableau qui représente le cours de l'or pour les 
// 7 jours d'une semaine.
// Vous devez, grace à un algorithme, retourner le meilleur jour pour investir et 
// le meilleur jour pour vendre.
// Ici le meilleur jour pour investir est Jeudi(4eme valeur du tableau), avec un cours
// à 2€ et le meilleur pour vendre est vendredi, avec un cours à 80 donc un bénéfice de 78€.

// Voici ce que vous devez retourner : "Le meilleur coup à faire cette semaine était d'investir
// le jeudi et de revendre le vendredi pour un bénéfice de 78."

// Vous pouvez changer la tournure de la phrase mais vous devez obligatoirement
// retourner le jour d'achat, le jour de vente, et le montantdu bénéfice.

// Bon courage !


// ----------------- CONSEILS -----------------

// indexOf();
// shift;
// boucle for;
// travaillez avec des tableaux;
// push();
