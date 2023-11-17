let x = 10, y = 20;
if(x === y){
    document.write("x와 y는 같습니다."+"<br>");    
}
if(x < y){
    document.write("x가 y보다 작습니다."+"<br>");
}
if(x > y)
    document.write("x가 y보다 큽니다."+"<br>");


if(x === y){
    document.write("x와 y는 같습니다."+"<br>");
}else{
    if(x < y){
        document.write("x가 y보다 작습니다."+"<br>");
    }else{
        document.write("x가 y보다 큽니다."+"<br>");
    }
}
document.write("<br>");
let walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가여?","0");
if(walkAmount >= 10000){
    document.write(`매우 좋은 습관을 지니고 계시군요!!<br>`);
}
document.write(`=================The End==============`);
document.write("<br>");
let num = 3;
if(num){
    document.write(num);
}
let num1=0; // false가 되어서 출력이 안됨 
if(num1){
    document.write(num1);
}
let userName = prompt("방문자의 이름은?","");
if(userName){
    document.write(userName+"님 반값습니다! 방문을 환영합니다.");
}
document.write("<br>");
let num2 = prompt("당신이 좋아하는 숫자는?","0");
if (num2 % 2 === 0){
    document.write("당신이 좋아하는 숫자는 짝수입니다.");
}else {
    document.write("당신이 좋아하는 숫자는 홀수입니다.");
}
// else if문
document.write(`<hr>`);
document.write("<br>");
if(x === y){
    document.write("x와 y는 같습니다."+"<br>");
}else if(x < y){
    document.write("x가 y보다 작습니다."+"<br>");
}else{
    document.write("x가 y보다 큽니다."+"<br>");
}let a = 200;
if(a < 100){
    document.write("100보다 작구나"+"<br>");
}else{
    document.write("100보다 크거나 같구나"+"<br>");
}

if(a % 2 ===0){
    document.write("a는 짝수입니다."+"<br>");
}else{
    document.write("a는 홀수 입니다."+"<br>");
}

let mon = prompt(`현재는 몇 월입니까?`,"0");
if(mon >= 9 && mon <=11){
    document.write("독서의 계절 가을");
}else if(mon >= 6 && mon <= 8){
    document.write("여행가기 좋은 여름");
}else if(mon >= 6 && mon <= 8){
    document.write("여행가기 좋은 여름");
}else{
    document.write("스키의 계절");
}
//중첩if문
document.write("<br>");
let id = "easy1004";
let pw = "112233";
let user_id = prompt("아이디는?","");
let user_pw = prompt("비밀번호는?","");
if (id === user_id){
    if(pw == user_pw){
        document.write(user_id+"님 반깁습니다!");
    }else{
        alert("비밀번호가 일치하지 않습니다.");
        location.reload();
    }
} else{
    alert("아이디가 일치하지 않습니다.");
    location.reload();
}

//삼항 조건 연산자
let z =3, c = 5;
let result = (z > c)? z : c //x가 더 크면 x를 그렇지 않으면 y를 변환
document.write("둘 중에 더 큰수는"+result+"입니다."+"<br>");// 5

if(z > c){
    document.write("둘 중에 더 큰수는"+z+"입니다."+"<br>");
}else{
    document.write("둘 중에 더 큰수는"+c+"입니다."+"<br>");
}


