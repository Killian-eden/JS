let stock = false;
function Bag() {
    this.contenu = [];
    this.ajouter = function(what) {
        if (this.contenu.length < this.taille){
            for (let j = 0; j < this.contenu.length; j++){
                if (this.contenu[j] === what){
                    stock = true;
                    break;
                }
            }
            if (stock){
                console.log("vous l'avez deja mis dedant");
                stock = false;
            }
            else {
                this.contenu.push(what);
            }
        }else {
            console.log("il n'y as plus de place");
        }
    };
    this.taille = 5;
    this.vide = function () { this.contenu = [] };
    this.montre = function () {
        for (let i = 0; i < this.contenu.length; i++){
            console.log(this.contenu[i]);
        }
    };
    this.retirer = function (what) {
        let index = this.contenu.indexOf(what)
        this.contenu.splice(index, 1)
    }
}
let sac = new Bag;
sac.ajouter("truc");
sac.montre();