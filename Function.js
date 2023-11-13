// 자바스크립트 내장함수
// parseInt() 문자열에서 정수형로 반환
// parseFloat() 문자열에서 실수형 반환
// String() 문자형으로 반환
// Number() 숫자형으로 반환
// Boolean() 논리형으로 반환


//기명 함수 선언식
function addNum(x,y){
    document.write(parseFloat(x)+y+"<br>");
    document.write(x-y+"<br>");
}
addNum("2.5",3);
addNum(10);//인자값이 1개라서 NaN
//화살표 함수(function 대신에 =>사용)
let addNum1 = (x,y)=>{
    return x+y;
}
document.write(addNum1(2,3)+"<br>");

let addNum2 = (x,y) => x+y;
document.write(addNum2(2,3)+"<br>");
//반환문(Return)과 매개변수(Parameter)
function multiNum(x,y){
    return x*y;
}
var num = multiNum(3,4);
document.write(num+"<br>");//변수 num 값 출력
document.write(multiNum(3)+"<br>");//인수로 3을 전달하여 함수를 호출함,->NaN
// 재귀함수 정의문
function count(x){
    if(x === 0){
        document.write("함수 실행 종료");
    }else{
        document.write("count x값:"+x);
        count(x-1);
    }
}count(5);