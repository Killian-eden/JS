let min=1; 
let max=100;  
let random = Math.floor(Math.random() * (max - min)) + min; 


alert("Bienvenue")
let answer = parseInt(prompt("donne un nombre entre 1 et 100 tu as 6 essai"));
let trying = 0; 
do{
    if(trying >= 5){
        break; 
    }
    else if(answer < random){
        trying++;
        answer = parseInt(prompt("c'est plus "+ trying + "/6"));
    }
    else if(answer > random){
        trying++;
        answer = parseInt(prompt("c'est moins "+ trying + "/6"));
    }
    else if(isNaN(answer)){
        alert("Ce n'est pas un nombre");
        answer = parseInt(prompt("Recommence "+ trying + "/6"));
    }
}while( answer != random);
if(trying >= 7){
    document.write("perdu le nombre était " + random )
}
else{
    document.write("bravo tu as gagner");
}
