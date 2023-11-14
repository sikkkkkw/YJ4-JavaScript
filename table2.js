document.write("<table border = 1>");
for(let i=2; i<=9; i++){
    document.write("<tr>");
    for(let j=1; j<=9; j++){
        document.write("<td>"+(i*j)+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>")