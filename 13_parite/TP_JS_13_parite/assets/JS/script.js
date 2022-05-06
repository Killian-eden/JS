let nbr = parseInt(prompt("Choisiser un nombre"));

for (var i = 1; i <= 10; i++) {
    
    if (nbr % 2 === 0) {
        document.write("<li>" + nbr + " est pair" + "<br>");
    }
    else{
        document.write("<li>" + nbr + " est impair" + "<br>");
    }
    nbr++;
}