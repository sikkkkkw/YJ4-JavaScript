//while 문을 사용해 '안녕하세요 1~안녕하세요 10'까지 1씩 증가하면서 10회 출력하도록 작성하는 예제
let i = 1;
while(i <= 10){
    document.write("안녕하세요 "+ i,"<br>");
    i++;
    if(i === 5){
        i++;
        continue;
    }
}
document.write("===The End===","<br>");

// while 문의 조건식 i <= 30을 만족(true) 하면 중괄호의 코드를 반복하여 실행한다. i의 값이 2의 배수이면서 6의 배수일 경우 화면에 i위 값을 출력한다.
let i1 =1;
while(i1 <= 30){
    if(i1 % 2 === 0 && i1 % 6 === 0){
        document.write(i1,"<br>");
    }
    i1++;
}

let i2 = 20;
while(i2 >= 10){
    if(i2 % 2 == 0){
        document.write(`<p class = 'blue'>${i2}</p>`);
    }else{
        document.write(`<p class = 'red'>${i2}</p>`);
    }
    i2--;
}
