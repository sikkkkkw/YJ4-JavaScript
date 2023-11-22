let sum=0;
for(let i = 1; i <= 10; i++){
    sum += i; //sum=sum+i
}
document.write("1부터 10까지의 합은"+sum+"<br>");

let fact=1;
for(let i = 1; i <= 10; i++){
    fact *= i; //fact = fact*i
}
document.write("1부터10가지의 곱은"+fact+"<br>");

for(let i = 1; i <= 3; i++){ 
    for(let k = 1; k <= 2; k++){
        document.write("i값:"+i+" k값:"+k+"<br>");
    }
}
// 구구단 출력
for(let i = 2; i <= 9; i++){
    for(let k = 1; k <= 9; k++){
        document.write(i+"x"+k+"="+i*k+"  ");
        if(k === 9){
            document.write("<br>");
        }
    }
}
// 피라미드 만들기
for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= i; k++) {
    document.write("*");
}document.write("<br>");
}
// 피라미드 반대
for (let i = 1; i <= 10; i++){
    for(let k = 1; k <= 10 - i; k++){
        document.write("*");
    }
    document.write("<br>");
}
//for/in문
//<일반적인 for의 문법>
let arr = [3,4,5];
for(let i =0;i<arr.length; i++){
    document.write(i+"번째 = ");
    document.write(arr[i]+" ");
}document.write("<br>");
// <for/in의 문법>
for(let i in arr){
    document.write(i+"번째 = ");
    document.write(arr[i]+" ");
}document.write("<br>");
//for/of문
//<for/of의 문법>
for(let item of arr){
    document.write(item+" ");
}document.write("<br>");

//do/while문
let id =1;//전역변수
do{
    document.write(id+" ");
    id++
}while(id <= 10)
document.write("<br>");
//break문
let r,sum2=0;
for(r = 1; r <= 100; r++){
    sum2 += r;
    if(sum2 >= 10)// 합계가 10이상일 경우 반복문 종료
    break;
}
document.write(`최초로 합이 10 이상인 위치 ${r}, 합은 ${sum2}`);
document.write("<br>")
// for 문을 이용하여 1부터 10까지 반복하도록 작성하는 예제 그리고 break문을 사용하여 변수 i의 값이 6일 경우 강제로 반복문 종료
for(let i =1; i <= 10; i++){
    if(i == 6)break;
    document.write(i,"<br>");
}
document.write("=== The End===");
// continue문
let t,sum3=0;
for(t = 1; t <= 10; t++){
    if(t % 2 ==0)
    continue;
    sum3 += t;
}
document.write(`1에서 10까지 홀수의 합은 ${sum3}`);
document.write("<br>");
// for문을 이용해 1부터 10까지 i가 2의 배수일 경우에만 continue문을 실행하여 홀수만 출력
for(let i = 1; i <= 10; i++){
    if(i % 2 === 0)continue;
    document.write(i,"<br>");
}
document.write("=== The End===");
for(let i= i;i<=100; i++){
    if(i % 5 == 0 && i % 7 != 0){
        document.write(`<p class ='red'>${i}</p>`);
    }else if(i % 7 == 0 && i % 5 != 0){
        document.write(`<p class ='blue'>${i}</p>`);
    }else if(i % 7 == 0 && i % 5 == 0){
        document.write(`<p class ='grnne'>${i}</p>`);
    }
}
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