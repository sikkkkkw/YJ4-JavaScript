let x =10, y = 20;
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
// else if문
if(x === y){
    document.write("x와 y는 같습니다."+"<br>");
}else if(x < y){
    document.write("x가 y보다 작습니다."+"<br>");
}else{
    document.write("x가 y보다 큽니다."+"<br>");
}



let a =200;
if(a<100){
    document.write("100보다 작구나"+"<br>");
}else{
    document.write("100보다 크거나 같구나"+"<br>");
}

if(a % 2 ===0){
    document.write("a는 짝수입니다."+"<br>");
}else{
    document.write("a는 홀수 입니다."+"<br>");
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


