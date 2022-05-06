let i = 0;
while(i<1){
    let query = prompt('Quel jour est il');
    switch (query) {
        case 'lundi': // if
            document.write("Demain c'est mardi" + "<hr>");
            i++;
            break; 
        case 'mardi':
            document.write("Demain c'est mercredi" + "<hr>");
            i++;
            break; 
        case 'mercredi':
            document.write("Demain c'est jeudi" + "<hr>");
            i++;
            break; 
        case 'jeudi':
            document.write("Demain c'est vendredi" + "<hr>");
            i++;
            break; 
        case 'vendredi':
            document.write("Demain c'est samedi, enfin" + "<hr>");
            i++;
            break; 
        case 'samedi':
            document.write("Demain c'est dimanche" + "<hr>");
            i++;
            break; 
        case 'dimanche':
            document.write("Demain c'est lundi, bon courage" + "<hr>");
            i++;
            break; 
        default:
            document.write("Je ne comprends pas" + "<hr>");
            alert("je ne comprends pas, répéter s'il vous plait")
    }
}