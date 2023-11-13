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