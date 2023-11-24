let myString ="hello world!";
for(let i=0; i<=myString.length; i++){
    if(i<=4){
        document.write(myString.substring(0+i,1+i),"<br/>");
    }
}

let my = myString.split(" ");
document.write(my[0],"<br/>");

let userNum = prompt("당신의 연락처는?","010-7186-0119");
let result = userNum.replace(userNum.substring(4,8),"****");
document.write(result,"<br>");