//1부터 입력한 값까지의 숫자를 반복하여 6의 배수만 출력안 하는 프로그램
let i = prompt("숫자를 입력하세여.");
for(let j = 1; j <= i; j++){
    if(j % 6 === 0)
    continue;
    document.write(`<p class = back>6의 배수만 출력안하도록 ${j}</p><br>`);
}