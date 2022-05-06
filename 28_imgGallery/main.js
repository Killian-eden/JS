const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

/*let img = document.createElement("img")
thumbBar.appendChild(img).src = "images/pic1.jpg"
let img2 = document.createElement("img")
thumbBar.appendChild(img2).src = "images/pic2.jpg"
let img3 = document.createElement("img")
thumbBar.appendChild(img3).src = "images/pic3.jpg"
let img4 = document.createElement("img")
thumbBar.appendChild(img4).src = "images/pic4.jpg"
let img5 = document.createElement("img")
thumbBar.appendChild(img5).src = "images/pic5.jpg"

img.addEventListener("click", function () {
    displayedImage.src = "images/pic1.jpg"
})
img2.addEventListener("click", function () {
    displayedImage.src = "images/pic2.jpg"
})
img3.addEventListener("click", function () {
    displayedImage.src = "images/pic3.jpg"
})
img4.addEventListener("click", function () {
    displayedImage.src = "images/pic4.jpg"
})
img5.addEventListener("click", function () {
    displayedImage.src = "images/pic5.jpg"
})*/
let img;
let tablo = [];
for (let i = 1; i <= 5; i++){
    img = document.createElement("img")
    thumbBar.appendChild(img).src = "images/pic" + i + ".jpg";

}
function change(e) {
    let src = e.target.src;
    displayedImage.src = src
}
thumbBar.addEventListener("click", change, false)
/* Wiring up the Darken/Lighten button */
let dark = 0;
btn.addEventListener("click", function () {
    if(dark === 0){
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        btn.textContent = "Lighten"
        dark = 1;
    }
    else {
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        btn.textContent = "Darken"
        dark = 0;
    }
})

