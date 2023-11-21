let i
do{
    i = prompt("숫자를 입력하세요(1~10)");
    if(i <= 10 && 0 < i){
        document.write(i);
    }else{
        alert("다시 입력하세요.");
    }
    
    
}while(i > 10 || 1 > i || isNaN(parseInt(i)))