let nombre;
let i = 0;
nombre = prompt("Choisi un nombre");
console.log(nombre)
while(i<1){
    if(isNaN(nombre)){
        nombre = parseFloat(prompt("Choisi un nombre"));
    }
    else{
        i++;
    }
}
document.write("Bravo " + nombre + " est un nombre");