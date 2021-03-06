import {div, turn, victoire, win, botplayeasy, botplay, XandO, XandObad, whoWin} from "./script2.js";

let catChoice               = document.querySelectorAll("#choice img");
let choice                  = document.getElementById("choice");
let choiceName              = document.getElementById("takeName");
let catImg                  = document.querySelectorAll(".cat");
let food                    = document.querySelector("#food p");
let foodPourcent            = document.getElementById("food");
let know                    = document.querySelector("#know p");
let knowPourcent            = document.getElementById("know");
let happiness               = document.querySelector("#happiness p");
let happinessPourcent       = document.getElementById("happiness");
let entertainment           = document.querySelector("#entertainment p");
let entertainmentPourcent   = document.getElementById("entertainment");
let love                    = document.querySelector("#love p");
let lovePourcent            = document.getElementById("love");
let sleep                   = document.querySelector("#sleep p");
let sleepPourcent           = document.getElementById("sleep");
let nameValidator           = document.getElementById("buttonName");
let textarea                = document.getElementById("name");
let catZone                 = document.getElementById("catZone");
let h2                      = document.querySelector("h2");
let allbutton               = document.getElementById("btns");
export let link             = document.querySelectorAll(".action button");
let chat                    = document.getElementById("imgcat");
let body                    = document.querySelector("body");
let effect                  = document.getElementById("effect");
let outsideEvent            = document.getElementById("outside");
export let morpion          = document.getElementById("morpion");
let plante                  = document.getElementById("plante");
let bread                   = document.getElementById("bread");
let gift                    = document.getElementById("gift");
let brille                  = document.getElementById("brille");
let inside                  = document.getElementById("inside");
let planteOn                = false;
let breadOn                 = false;
// =====================
// Les stats de mon chat
// =====================
function Cat() {
    this.type       = this.classList;
    this.food       = 50;
    this.know       = 10;
    this.sleep      = 50;
    this.happiness  = 50;
    this.entertain  = 50;
    this.love       = 50;
    this.Max        = 100;
    this.Min        = 0;
}
let ave = new Cat();

function woCat() {
    ave.type = this.classList;
    for (let j = 0; j < catImg.length; j++){
        catImg[j].classList.add(ave.type);
    }
    choice.classList.toggle("hide");
    choiceName.classList.toggle("hide");
    affiche();
}

for (let i = 0 ; i < catChoice.length; i++){
    catChoice[i].addEventListener("click", woCat);
}

// ==============
// le nom du chat
// ==============
function verifyName(event) {
    if (textarea.value.length > 1){
        nameValidator.disabled = false;
        if (event.key === "Enter"){
            nameValidator.click();
        }
    } else {
        nameValidator.disabled = true;
    }
}
function validName() {
    choiceName.classList.toggle("hide");
    catZone.classList.toggle("hide");
    allbutton.classList.toggle("hide");
    h2.innerText = textarea.value;
    body.classList.add("bgBase");
}
textarea.addEventListener("keyup", verifyName);
nameValidator.addEventListener("click", validName);
function affiche() {
    food.innerText                                  = "Faim " + ave.food + " %";
    know.innerText                                  = "Connaisance " + ave.know + " %";
    sleep.innerText                                 = "Energie " + ave.sleep + " %";
    happiness.innerText                             = "Joie " + ave.happiness + " %";
    entertainment.innerText                         = "Amusement " + ave.entertain + " %";
    love.innerText                                  = "Amour " + ave.love + " %";
    foodPourcent.style.backgroundSize               = "100% " + ave.food + "%";
    knowPourcent.style.backgroundSize               = "100%" + ave.know + "%";
    sleepPourcent.style.backgroundSize              = "100%" + ave.sleep + "%";
    happinessPourcent.style.backgroundSize          = "100%" + ave.happiness + "%";
    entertainmentPourcent.style.backgroundSize      = "100%" + ave.entertain + "%";
    lovePourcent.style.backgroundSize               = "100%" + ave.love + "%";
}
function base() {
    timeout = 2000;
    if (ave.happiness < 25){
        chat.src = "assets/img/angry.gif"
    }
    else {
        chat.src = "assets/img/base.png";
    }
    for (let l = 0; l < link.length; l++){
        link[l].disabled = false;
    }
    if (planteOn){
        plante.classList.remove("hide");
    }
    if (breadOn){
        bread.classList.remove("hide");
    }
    h2.style.color = "black";
    body.classList.add("bgBase");
    chat.classList.remove("iceCream");
    body.classList.remove("bgMeat");
    body.classList.remove("bgCookie");
    body.classList.remove("bgFish");
    body.classList.remove("bgIceCream");
    body.classList.remove("bgPizza");
    body.classList.remove("bgRamen");
    body.classList.remove("bgRice");
    body.classList.remove("bgSushi");
    body.classList.remove("bgDonut");
    body.classList.remove("bgSleep");
    body.classList.remove("bgLearn");
    body.classList.remove("bgDance");
    outsideEvent.classList.add("hide");
    outsideEvent.src = "assets/img/walk.gif";
    catZone.classList.remove("hide");
    allbutton.classList.remove("hide");
    stop = true;
}
function endeffect() {
    effect.classList.add("hide");
    chat.src = "assets/img/base.png";
    chat.classList.remove("changement");
}
function duringeffect() {
    chat.src = "assets/img/after-drogue.gif";
    effect.classList.remove("hide");
    chat.classList.add("changement");
}
function openGift() {
    let which = Math.floor(Math.random()*2)+1;
    gift.classList.add("what");
    for (let l = 0; l < link.length; l++){
        link[l].disabled = true;
    }
    setTimeout(function () {
        if (which === 1){
            inside.src = "assets/img/plante.png";
            planteOn = true;
        }
        else if (which === 2){
            inside.src = "assets/img/bread.png";
            breadOn = true;
        }
        inside.classList.remove("hide");
        brille.classList.remove("hide");
        gift.classList.remove("what");
    }, 3000)
    setTimeout(function () {
        gift.classList.add("hide");
        brille.classList.add("hide");
        inside.classList.add("hide");
        if (which === 1){
            plante.classList.remove("hide");
        }
        else if (which === 2){
            bread.classList.remove("hide");
        }
        base()
    }, 5000)
}
function addObject(){
    gift.classList.remove("hide");
    gift.addEventListener("click", openGift);
}
let timeout = 2000;
function event() {
    plante.classList.add("hide");
    bread.classList.add("hide");
    // ----------------------------
    // Event nourir
    // ----------------------------
    if(ave.Max > ave.food && ave.Min < ave.sleep){
        if(this.textContent === "Viande"){
            if (ave.sleep - 10 >= ave.Min && ave.food + 10 <= ave.Max){
                chat.src    = "assets/img/eat-meat.gif";
                body.classList.add("bgMeat");
                ave.food    += 10;
                ave.sleep   -= 10;
            }
        }
        if (this.textContent === "Cookie"){
            if (ave.sleep - 15 >= ave.Min && ave.food + 5 <= ave.Max){
                chat.src    = "assets/img/eat-cookie.gif";
                body.classList.add("bgCookie");
                ave.food    += 5;
                ave.sleep   -= 15;
            }
        }
        if (this.textContent === "Poisson"){
            if (ave.sleep - 5 >= ave.Min && ave.food + 10 <= ave.Max){
                chat.src    = "assets/img/eat-fish.gif";
                body.classList.add("bgFish");
                ave.food    += 10;
                ave.sleep   -= 5;
            }
        }
        if (this.textContent === "Glace"){
            if (ave.sleep - 20 >= ave.Min && ave.food + 5 <= ave.Max){
                chat.src    = "assets/img/eat-iceCream.gif";
                body.classList.add("bgIceCream");
                ave.food    += 5;
                ave.sleep   -= 10;
                chat.classList.add("smaller");
            }
        }
        if (this.textContent === "Pizza"){
            if (ave.sleep - 15 >= ave.Min && ave.food + 30 <= ave.Max){
                chat.src    = "assets/img/eat-pizza.gif";
                body.classList.add("bgPizza");
                ave.food    += 30;
                ave.sleep   -= 15;
            }
        }
        if (this.textContent === "Ramen"){
            if (ave.sleep - 15 >= ave.Min && ave.food + 10 <= ave.Max){
                chat.src    = "assets/img/eat-ramen.gif";
                body.classList.add("bgRamen");
                ave.food    += 10;
                ave.sleep   -= 10;
            }
        }
        if (this.textContent === "Riz"){
            if (ave.sleep - 10 >= ave.Min && ave.food + 20 <= ave.Max){
                chat.src    = "assets/img/eat-rice.gif";
                body.classList.add("bgRice");
                ave.food    += 20;
                ave.sleep   -= 10;
                chat.classList.add("smaller");
            }
        }
        if (this.textContent === "Sushi"){
            if (ave.sleep - 5 >= ave.Min && ave.food + 5 <= ave.Max){
                chat.src    = "assets/img/eat-sushi.gif";
                body.classList.add("bgSushi");
                ave.food    += 5;
                ave.sleep   -= 5;
            }
        }
        if (this.textContent === "Donut"){
            if (ave.sleep - 15 >= ave.Min && ave.food + 5 <= ave.Max){
                chat.src    = "assets/img/eat-donut.gif";
                body.classList.add("bgDonut");
                ave.food    += 5;
                ave.sleep   -= 15;
            }
        }
    }
    else if(ave.food > 99 && this.textContent === "Donut" || this.textContent === "Sushi" || this.textContent === "Riz" || this.textContent === "Ramen" || this.textContent === "Pizza" || this.textContent === "Glace" || this.textContent === "Poisson" || this.textContent === "Cookie" || this.textContent === "Viande"){
        chat.src = "assets/img/too-big.gif";
    }
    if (this.textContent === "Cocaine"){
        chat.src        = "assets/img/drogue.gif";
        ave.food        = 10;
        ave.know        = 10;
        ave.sleep       = 10;
        ave.happiness   = 100;
        ave.entertain   = 10;
        ave.love        = 10;
        setTimeout(endeffect, 10000);
        setTimeout(duringeffect, 2001);
    }
    // --------------------------
    // Event dormir
    // --------------------------
    if (this.textContent === "Dormir"){
        if (ave.sleep < 100 && ave.food > 0 && ave.entertain >= 0 && ave.sleep + 20 <= 100 && ave.food - 10 >= 0 && ave.entertain - 5 >= 0 && ave.love - 5 >= 0){
            body.classList.add("bgSleep");
            h2.style.color = "white";
            let where = Math.floor(Math.random() * 5)+ 1;
            ave.sleep       += 20;
            ave.food        -= 10;
            ave.entertain   -= 5;
            ave.love        -= 5;
            switch (where) {
                case 1:
                    chat.src        = "assets/img/sleep.gif";
                    chat.classList.add("smaller");
                    break;
                case 2:
                    chat.src        = "assets/img/sleep-2.gif";
                    break;
                case 3:
                    chat.src        = "assets/img/sleep-3.gif";
                    break;
                case 4:
                    chat.src        = "assets/img/sleep-4.gif";
                    break;
                case 5:
                    chat.src        = "assets/img/sleep-5.gif";
                    break;
                default:
                    alert("Il y as un bug");
                    break;
            }
        }
    }
    // -----------------------
    // Event apprendre
    // -----------------------
    if(this.textContent === "??tudier"){
        if (ave.know < 100 && ave.sleep > 0 && ave.entertain > 0 && ave.happiness > 0){
            if (ave.know < 50 && ave.sleep - 10 >= 0 && ave.entertain - 10 >= 0 && ave.happiness - 20 >=0){
                body.classList.add("bgLearn");
                h2.style.color  = "white";
                chat.src        = "assets/img/learn-1.gif";
                ave.know        += 10;
                ave.sleep       -= 10;
                ave.entertain   -= 10;
                ave.happiness   -= 20;
            }
            else if (ave.know >= 50 && ave.know < 75 && ave.sleep - 15 >= 0 && ave.entertain - 5 >= 0 && ave.happiness - 10 >= 0){
                body.classList.add("bgLearn");
                h2.style.color  = "white";
                chat.src        = "assets/img/learn-2.gif";
                ave.know        += 5;
                ave.sleep       -= 15;
                ave.entertain   -= 5;
                ave.happiness   -= 10;
            }
            else if (ave.know >= 75 && ave.know + 1 <= 100 && ave.sleep - 20 > 0 && ave.entertain - 2 > 0 && ave.happiness - 5 >= 0){
                body.classList.add("bgLearn");
                h2.style.color  = "white";
                chat.src        = "assets/img/learn-3.gif";
                ave.know        += 1;
                ave.sleep       -= 20;
                ave.entertain   -= 2;
                ave.happiness   -= 5;
                chat.classList.add("smaller");
            }
        }
        else if(ave.know > 99){
            chat.src    = "assets/img/too-smart.gif";
            timeout     = 5000;
        }
    }
    // -----------------------
    // Event danser
    // -----------------------
    if (this.textContent === "Danser"){
        if (ave.entertain < 100 && ave.happiness < 100 && ave.sleep > 0 && ave.entertain + 20 <= 100 && ave.happiness + 20 <= 100 && ave.sleep - 10 >= 0){
            let how = Math.floor(Math.random() * 3) + 1;
            body.classList.add("bgDance");
            h2.style.color = "white";
            switch (how) {
                case 1:
                    chat.classList.add("smaller");
                    chat.src = "assets/img/dance.gif";
                    break;
                case 2:
                    chat.src = "assets/img/dance-2.gif";
                    break;
                case 3:
                    chat.src = "assets/img/dance-3.gif";
                    break;
                default:
                    alert("Il y as un bug");
                    break;
            }
            ave.entertain   += 20;
            ave.happiness   += 20;
            ave.sleep       -= 10;
        }
    }
    for (let l = 0; l < link.length; l++){
        link[l].disabled = true;
    }
    // -------------------------
    // Event sortie
    // -------------------------
    if (this.textContent === "Sortir"){
        if (ave.sleep > 0 && ave.love < 100 && ave.entertain < 100 && ave.sleep - 10 >= 0 && ave.love + 15 <= 100 && ave.entertain + 15 <= 100){
            let where   = Math.floor(Math.random()*6)+1;
            let object  = Math.floor(Math.random()*100)+1;
            catZone.classList.add("hide");
            allbutton.classList.add("hide");
            timeout = 6000;
            outsideEvent.classList.add("during");
            body.classList.add("bgOutside")
            outsideEvent.classList.remove("hide");
            ave.sleep   -= 10;
            ave.love    += 15;
            ave.entertain += 15;
            setTimeout(function () {
                body.classList.remove("bgOutside");
                body.classList.remove("bgBase");
                switch (where) {
                    case 1:
                        outsideEvent.src = "assets/img/outside-1.gif";
                        break;
                    case 2:
                        outsideEvent.src = "assets/img/outside-2.gif";
                        break;
                    case 3:
                        outsideEvent.src = "assets/img/outside-3.gif";
                        break;
                    case 4:
                        outsideEvent.src = "assets/img/outside-4.gif";
                        break;
                    case 5:
                        outsideEvent.src = "assets/img/outside-5.gif";
                        break;
                    case 6:
                        outsideEvent.src = "assets/img/outside-6.gif";
                        break;
                }
            }, 1500)
            if (object >=1 && object <= 10){
                setTimeout(addObject,6000);
            }
        }
    }
    // -------------------------
    // Event morpion
    // -------------------------
    if(this.textContent === "Tic Tac Toe"){
        if (ave.know += 15 <= 100 && ave.sleep - 10 > 0 && ave.sleep > 0 && ave.know < 100){
            morpion.classList.remove("hide");
            if (ave.know < 100 && ave.know > 50){
                ave.know += 10;
                ave.sleep -= 5;
                for (let i = 0 ; i < div.length; i++){
                    div[i].addEventListener("click", XandO);
                }
                alert("bad")
            }
            if (ave.know <= 50){
                ave.know += 15;
                ave.sleep -= 10;
                for (let i = 0 ; i < div.length; i++){
                    div[i].addEventListener("click", XandObad);
                }
                alert("yes")
            }
            setTimeout(function () {
                for (let l = 0; l < link.length; l++){
                    link[l].disabled = true;
                }
            }, timeout + 1)
        }
    }
    affiche();
    setTimeout(base, timeout);

}
let stop = true;
function drag() {
        if (stop){
            chat.src    = "assets/img/love-2.gif";
            stop        = false;
            ave.love    += 10;
            affiche();
            for (let l = 0; l < link.length; l++){
                link[l].disabled = true;
            }
            setTimeout(base, 3000);

        }
}
function click() {
    if (stop){
        chat.src    = "assets/img/love-1.gif";
        ave.love    += 10;
        stop        = false;
        affiche();
        for (let l = 0; l < link.length; l++){
            link[l].disabled = true;
        }
        chat.classList.add("smaller");
        setTimeout(base, 3000);
    }
}

chat.addEventListener("drag", drag);
chat.addEventListener("click", click);
for (let k = 0; k < link.length ; k++){
    link[k].addEventListener("click", event)
}