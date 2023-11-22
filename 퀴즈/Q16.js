document.write(`<h2>퀴즈1</h2>`);
for(let i = 1; i <= 5; i++){
    for(let k = 1; k <= i; k++){
        document.write("*");
        
    }
    document.write("<br>");
}
document.write(`<h2>퀴즈2</h2>`);
for(let i = 1; i <= 5; i++){
    for(let k = 1; k <= 6 -i; k++){
        document.write("*");
        
    }
    document.write("<br>");
}
document.write(`<h2>퀴즈3</h2>`);
for(let i = 1; i <= 5; i++){
    for(let j = 5; j > i; j--){
        document.write("&nbsp");
    }for(let k = 1; k <= i; k++){
        document.write("*");
  
    }
    document.write("<br>");
}
