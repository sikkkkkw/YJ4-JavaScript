let text = "hello World";
//(1)
document.write(text.length,"<br>");
//(2)
document.write(text.replace("o","","<br>"));
// (3)
let fruit = "사과 바나나 딸기";
let s= fruit.split(" ");
document.write(s,"<br>");
// (4)
s.splice(2,1);
document.write(s,"<br>");
// (5)
s.push("수박","포도");
document.write(s,"<br>");

// (6)
for(let i = 0; i <=s.length; i++){
    document.write(s[i]," ");
    if(s[i]==="포도"){
        break;
    }
}


