// document.write("<table>")
// document.write("<tr>")
// for(i=0; i<=9;i++){
//     document.write("<td>")
//     document.write(i)
// }

// document.write("<table>")
// for(i=0; i<=9;i++){
//     document.write("<tr>")
//     document.write("<td>")
//     document.write(i)
// }

// document.write("<table>")
// for(let i = 0; i <= 9 ;i++){
//     if(i%2 == 0){
//         document.write("<td style='background-color:red'>")
//         document.write(i + "<br>");
//     }
//     else{
//         document.write("<td style='background-color:green'>")
//         document.write(i + "<br>");
//     }
// }

// document.write("<table>")
// for(let i2 = 0; i2<=10; i2++){
//     for(let i = 0; i <= 9 ;i++){
//         if(i%2 == 0){
//             document.write("<td style='background-color:lightblue'>")
//             document.write(i + "<br>");
//         }
//         else{
//             document.write("<td style='background-color:yellow'>")
//             document.write(i + "<br>");
//         }
//     }
//     document.write("<tr>")
// }

// document.write("<table>")
// document.write("<tr>");
// for(let i = 0; i <= 99; i++){
//     if(i % 10 == 0){
//         document.write("</tr>");
//         document.write("<tr>");
//     }
//     if(i % 2 == 0){
//         document.write("<td style='background-color:yellow>");
//         document.write(i);
//         document.write("</td>");
//     }
//     else{
//         document.write("<td style='background-color:lightblue>");
//         document.write(i);
//         document.write("</td>");
//     }

// }
// document.write("</tr>");
// document.write("</table>");

// document.write("<table>")
// document.write("<tr>");
// for(let i = 0; i <= 99; i++){
//     if(i % 10 == 0){
//         document.write("</tr>");
//         document.write("<tr>");
//     }
//     if(i % 11 == 0){
//         document.write("<td style='background-color: yellow'>");
//         document.write(i);
//         document.write("</td>");
//     }
//     else{
//         if(i % 2 == 0){
//         document.write("<td>");
//         document.write(i);
//         document.write("</td>")
//         }
//         else{
//             document.write("<td>");
//             document.write(i);
//             document.write("</td>");
//         }
//     }
// }
// document.write("</tr>");
// document.write("</table>");

let mois = 0;
for(i = 1000; i<=2000;i = i+50){
    mois++;
}
document.write("il faudras " + mois +" mois"+"<br>");
document.write("C'est a dire " + mois / 12 +" année" + "<br>");