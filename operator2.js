let num1 = 15;
let num2 = 2;
let result;
// 산술 연산자
document.write("<hr>");
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
document.write("<hr>");
let t1 = "학교종이 ";
let t2 = "땡땡땡 ";
let t3 = 8282;
let t4 = " 어서 모이자";
result = t1+t2+t3+t4;
document.write(result,"<br>");
//대입 연산자
document.write("<hr>");
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

let str ="<table border='1'>"; //html에서 표만들어져서 나옴
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";
document.write(str);
//증감 연산자
document.write("<hr>");
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
//비교 연산자
document.write("<hr>");
let a = 10;
let b = 20;
let c = 10;
let f = "20";

result = a > b; //a(10) > b(20)은 false로 반환
document.write(result,"<br>");
result = a < b; //a(10) < b(20)은 true로 반환
document.write(result,"<br>");
result = a <= b; //a(10) <= b(20)은 true로 반환
document.write(result,"<br>");
result = b == f; //b(20) == f("20")은 자료형 상관없이 숫자만 비교하여 true로 반환
document.write(result,"<br>");
result = a != b; //a(10) != b(20)은 데이터가 다르므로 true로 반환
document.write(result,"<br>");
result = a === f; //b(20) === f("20")은 숫자는 같지만 자료형이 다르므로 false로 반환
document.write(result,"<br>");
//논리 연산자
document.write("<hr>");
let a1 = 10;
let b1 = 20;
let m = 30;
let n = 40;

// || or 연산자라 부르며, 피연산자 중 값이 하나라도 true가 존재하면 true로 결괏값을 반환한다.
// && and 연산자라 부르며, 피연산자 중 값이 하나라도 false가 존재하면 false로 결괏값을 반환한다.
// ! not 연산자라 부르며, 단항 연산자입니다. 피연산자의 값이 true이면 반대로 false로 결괏값을 반환한다.

result = a > b || b >= m || m > n; //false || false || false
document.write(result,"<br>"); //false
result = a > b || b >= m || m <= n; //false || false || true
document.write(result,"<br>"); //true
result = a <= b && b >= m && m <= n; //true && false && true
document.write(result,"<br>"); //false
result = a <= b && b <= m && m <= n; //true && true && true
document.write(result,"<br>"); //true
result = !(a > b); //!false를 계산
document.write(result,"<br>"); //true

//삼항 조건 연산자
document.write("<hr>");
let z =3, c1 = 5;
result = (z > c1)? z : c1 //x가 더 크면 x를 그렇지 않으면 y를 변환
document.write("둘 중에 더 큰수는"+result+"입니다."+"<br>");// 5

if(z > c){
    document.write("둘 중에 더 큰수는"+z+"입니다."+"<br>");
}else{
    document.write("둘 중에 더 큰수는"+c1+"입니다."+"<br>");
}

result = z > c1 ? "javascript" : "hello"; //z(3) > c1(5)은 false이므로 "hello"가 result에 저장된다.
document.write(result);



