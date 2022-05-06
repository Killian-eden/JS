const INPUT = document.querySelector('#tweetContent');
const LOG = document.getElementById('counterBlock');
let area;

let test;
let i = 140;

LOG.textContent = i;
INPUT.addEventListener('keypress', function (logKey) {
    if (i <= 0){
        test = document.querySelector("#counterBlock").style.color = "red";
        i--;
        LOG.textContent = i;
    }
    else {
        test = document.querySelector("#counterBlock").style.color = "#456";
        i--;
        LOG.textContent = i;
    }
    area = document.querySelector('textarea');
    let truc = area.textLength + i;
    console.log(area.textLength)
    console.log(truc)
} );
/*Pour supprimer*/
INPUT.addEventListener("keydown", function (event) {
    if (event.key === "Backspace"){
        if (i < 140){
            i++;
            LOG.textContent = i;
        }
        if (i > 0){
            test = document.querySelector("#counterBlock").style.color = "#456";
        }
        console.log(area.textLength)
    }
});




/*secours */
/*
const INPUT = document.querySelector('#tweetContent');
const LOG = document.getElementById('counterBlock');
let area = document.querySelector('textarea');


let test;
let i = 140;
LOG.textContent = i;
INPUT.addEventListener('keypress', function (logKey) {
    if (i <= 0){
        test = document.querySelector("#counterBlock").style.color = "red";
        i--;
        LOG.textContent = i;
    }
    else {
        test = document.querySelector("#counterBlock").style.color = "#456";
        i--;
        LOG.textContent = i;
    }
    console.log(area.textLength)
} );
window.addEventListener("keydown", function (event) {
    if (event.key === "Backspace"){
        if (i < 140){
            i++;
            LOG.textContent = i;
        }
        if (i > 0){
            test = document.querySelector("#counterBlock").style.color = "#456";
        }
        console.log(area.textLength)
    }
});
*/
