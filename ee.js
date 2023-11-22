//중첩 for문
let x ="<table border='1'>"
document.write(x);
for(let i = 1; i<= 3; i++){
    document.write("<tr>");
    for(let k = 1; k <=2; k++ ){
        document.write(`<td>${i}행 ${k}열</td>`);
    }
    document.write("</tr>");
    document.write(`<br>`);
}
document.write("<table>");