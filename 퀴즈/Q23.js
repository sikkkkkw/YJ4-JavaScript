// 퀴즈1 
// 문제 hello를 세로로 출력
let myString ="hello world!";
for(let i=0; i<=myString.length; i++){
    if(i<=4){
        document.write(myString.substring(0+i,1+i),"<br/>");
    }
}
//퀴즈2
// 문제 my string에서"world"가 포함되어 있으면 split을 이용하여 hello를 출력
let my = myString.split(" ");
document.write(my[0],"<br/>");
//퀴즈3
// 문제 전화번호를 입력받아 000-****-0000를 출력
let userNum = prompt("당신의 연락처는?","010-7186-0119");
let result = userNum.replace(userNum.substring(4,8),"****");
document.write(result,"<br>");