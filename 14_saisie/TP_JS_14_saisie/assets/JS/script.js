let nbr;

do{
    nbr = parseInt(prompt("Donner un nombre entre 50 et 100"));

} while( nbr <50 || nbr > 100 )
document.write("C'est bon "+ nbr + " est un nombre entre 50 et 100");