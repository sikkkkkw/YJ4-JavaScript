//1에서 100까지의 숫자 합을 구하는 프로그램에서 숫자의 합이 100이 넘었을때
let sum = 0;
for(let i =1; i <= 100; i++){
    sum += i
    if(sum > 100){
        document.write(sum,"<br>");
        document.write(i);
        break;
    }
    

}