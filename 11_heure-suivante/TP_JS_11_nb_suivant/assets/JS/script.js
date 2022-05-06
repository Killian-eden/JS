let h = parseInt(prompt("Entrer l'heure"));
let min = parseInt(prompt("Les minutes"));
let s = parseInt(prompt("Et les secondes"));



if(s >= 0 && s <= 59 && min >= 0 && min <= 59 && h >= 0 && h<= 23){
    s++;
    if(s == 60){
        s=0;
        min++;
        if(min == 60){
            min=0;
            h++;
            if(h == 24){
                h=0;
                document.write(h+"h"+min+"min"+s+"s");
            }
            else{
                document.write(h+"h"+min+"min"+s+"s");
            }
        }
        else{
            document.write(h+"h"+min+"min"+s+"s");
        }
    }
    else{
        document.write(h+"h"+min+"min"+s+"s");
    }
}
else{
    document.write("Il y a une erreur, êtes vous sur d'avoir mis des nombres");
}