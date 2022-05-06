let min=1; 
let max=3;  
let random = Math.floor(Math.random() * (max - min)) + min; 
let bot;
if(random == 1){
    bot = "ciseau";
}
else if(random == 2){
    bot = "pierre";
}
else if(random == 3){
    bot = "feuille";
}
let joueur = prompt("Choisi entre pierre feuille ciseau");
joueur = joueur.toLowerCase(joueur)
document.write("le bot a choisi " + bot + "<br>")

if(joueur == bot){
    document.write("c'est une égaliter");
}
else if(joueur == "ciseau" && bot == "pierre"){
    document.write("La pierre écrase les ciseau tu as perdu");
}
else if(joueur == "ciseau" && bot == "feuille"){
    document.write("Les ciseau coupe la feuille tu as gagner");
}
else if(joueur == "pierre" && bot == "ciseau"){
    document.write("La pierre écrase les ciseau tu as perdu");
}
else if(joueur == "pierre" && bot == "feuille"){
    document.write("La feuille recouvre la pierre tu as perdu");
}
else if(joueur == "feuille" && bot == "ciseau"){
    document.write("La feuille se fais couper par les ciseau tu as perdu");
}
else if(joueur == "feuille" && bot == "pierre"){
    document.write("La feuille recouvre la pierre tu as gagner");
}
else{
    document.write("tu n'as pas choisi")
}