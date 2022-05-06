let nom = document.getElementById("pseudo");
let bj = document.querySelector(".bj");
let error = document.querySelector(".pseudoError");
let block = document.querySelector(".block")
let age = document.getElementById("age")
let mail = document.getElementById("email")
let incrit = document.getElementById("inscrit");
let errorage = document.querySelector(".ageError")
let val = document.getElementById("valider");
let merci = document.getElementById("merci");
let liste = document.getElementById("liste")
let tableau = [["Harry", 19, "hp@poudlard.fr"], ["Hermione", 20, "hg@poudlard.fr"], ["Neville", 20, "nl@poudlard.fr"], ["Ronald", 21, "rw@poudlard.fr"]];
nom.addEventListener("keyup", function (){
    bj.textContent = "Bonjour " + nom.value;
    for (let i = 0; i < tableau.length; i++){
        if (nom.value !== tableau[i][0]){
            error.classList.remove("block");
            incrit.disabled = false;
        }
        else{
            incrit.disabled = true;
            error.classList.toggle("block");
            break;
        }
    }
})
age.addEventListener("keyup", function (){
    if (age.value >= 18){
        errorage.classList.remove("block");
        incrit.disabled = false;
    }
    else {
        errorage.classList.add("block");
        incrit.disabled = true;
    }
})
incrit.addEventListener("click", function () {
    val.style.display = "block";
    merci.textContent = "Merci " + nom.value;
    tableau.push([nom.value, age.value, mail.value])
    for(let i2 = 0; i2<= tableau.length;i2++){
        liste.innerHTML += "<li>" + tableau[i2][0] + " : " + tableau[i2][1] + "</li>" + "<br>";
    }
})