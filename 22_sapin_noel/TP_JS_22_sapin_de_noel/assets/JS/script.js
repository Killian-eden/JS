/*let sapin = parseInt(prompt("Combien d'étage"));
let x = "*";
for(let i = 0; i < sapin; i++){
   for(let i2 = 4; i2 <= i+1 ; i2++){
       for(let i3 = 1; i3 <= i2; i3+=2){
           document.write('<p style="text-align: center">' + x + "<br>" + "</p>");
           x = x + "**";
       }
   }
}
document.write('<p style="text-align: center">' + "|" + "<br>" + "|" + "<br>" + "|" + "<br>" + "</p>");*/



let sapin = parseInt(prompt("Combien d'étage"));
let x = "*";
let i2 = 4;
let x2 = "***";
for(let i = 0; i < sapin; i++){
    if(i === i2){
         x = x2;
         x2 += "**";
         i = 0;
         i2++;
         i++;
    }
    document.write('<p style="text-align: center">' + x + "<br>" + "</p>");
    x = x + "**";
    console.log(i)
}
document.write('<p style="text-align: center">' + "|" + "<br>" + "|" + "<br>" + "|" + "<br>" + "</p>");
