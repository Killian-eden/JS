let x = parseInt(prompt("donner un nombre entre 2 et 9"));

if(!isNaN(x)){
    if( x >= 2 && x <= 9){
        for(let i = 1; i<=10; i++){
            document.write( x + " x " + i + " = " + x*i + "<br>");
        }
    }
    else{
        document.write("Etes vous sur que c'est un nombre entre 2 et 9")
    }
}
else{
    document.write("Erreur de saisie")
}
