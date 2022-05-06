let spawn = document.querySelector("#toggle-rectangle");
let classes = spawn.classList;
let rect = document.querySelector(".rectangle");
function survol(){
    rect.classList.toggle("important")
}
function double(){
    rect.classList.toggle("good")
}
function reset(){
    rect.classList.remove("important")
    rect.classList.remove("good")
}
spawn.addEventListener('click', function() {
    rect.classList.toggle("hide")
})
rect.addEventListener('mouseover', survol);
rect.addEventListener('dblclick', double)
rect.addEventListener('mouseout', reset)
