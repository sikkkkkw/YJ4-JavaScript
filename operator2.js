let num1 = 15;
let num2 = 2;
let result;
// 산술연산자
result = num1 + num2; //17
document.write(result,"Hello","<br>");
result = num1 - num2; //13
document.write(result,"<br>");
result = num1 * num2; //30
document.write(result,"<br>");
result = num1 / num2; //7.5
document.write(result,"<br>");
result = num1 % num2; //1
document.write(result,"<br>"); 
//문자 결합 연산자
let t1 = "학교종이 ";
let t2 = "땡땡땡 ";
let t3 = 8282;
let t4 = " 어서 모이자";
result = t1+t2+t3+t4;
document.write(result,"<br>");
//대입 연산자
let num3 = 10;
let num4 = 3;
num3 += num4; //num3 = num3(10) + num4(3); 
document.write(num3,"<br>");
num3 -= num4; //num3 = num3(10) - num4(3);
document.write(num3,"<br>");
num3 *= num4; //num3 = num3(10) * num4(3);
document.write(num3,"<br>");
num3 %= num4; //num3 = num3(10) % num4(3);
document.write(num3,"<br>");

let str ="<table border='1'>"; //html 넣을때 
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";
document.write(str);
//증감 연산자
let num5 = 10;
let num6 = 20;

num5--; //변수num5(10)의 값이 1 만큼 감소되어 num5에 9가 저장
document.write(num5,"<br>");
num5++; //변수num5(9)의 값이 1 만큼 더해서 num5는 10이 저장됨
document.write(num5,"<br>");
result = num6++; //변수++는 result : 20이 저장된 후 다음에 1을 더한다. num6 : 21
document.write(num6,"<br>");
result = ++num6; //++변수는 먼저 1 만큼 더한 후 result에 대입한다.  num6 : 22
document.write(num6,"<br>");


