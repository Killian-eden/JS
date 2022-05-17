function Stylo(color){
    this.couleur = color;
    this.niveau = 100;
    this.ouvert = false;
    this.ecrire = function (w) {
        if (this.ouvert && this.niveau >= 0){
            document.write(w.fontcolor(this.couleur) + "<br>")
            this.niveau -= w.length;
        }else {
            document.write("Il faut enlever le bouchon")
        }
    }
    this.ouvrir = function() { this.ouvert = true;}
    this.fermer = function() { this.ouvert = false;}
    this.remplir = function() { this.niveau = 100;}
}
let bic = new Stylo("blue");
bic.ouvrir();
bic.ecrire("Bonjour");
bic.couleur = "red";
bic.ecrire("C'est bon sa marche");
bic.couleur = "black";
bic.ecrire("et on peut changer de couleur")