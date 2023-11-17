// //문제1
// let num =0,sum =0;
// num = prompt("다섯자리 정수를 입력하시오!",10101);
// let num1 = parseInt(num/10000); 
// num = num % 10000;
// let num2 = parseInt(num/1000); 
// num = num % 1000;
// let num3 = parseInt(num/100);
// num = num % 100;
// let num4 = parseInt(num/10);
// num = num % 10;
// let num5 =num;
// sum = (num1+num2+num3+num4+num5)
// document.write(`${num1}+${num2}+${num3}+${num4}+${num5}=${sum}입니다.`);

//문제2
// let gender = prompt("성별입력!<남자1 , 여성 2>:",1);
// let weight = prompt("체중을 입력하세요",50);
// console.log(typeof gender);
// if(gender === "1"){
//     if(weight >= 85){
//         document.write("괴체중 입니다. 운동하세요");
//     }else if((50 <= weight)&&(weight < 85)){ // and 사용해서 false가 하나라도 존재하면 false
//         document.write("표준체중입니다. 현 페이스 유지하세요.");
//     }else{
//         document.write("표준체중이하입니다. 고기드세요.");
//     }
// }if(gender === "2"){
//     if(weight >= 68){
//         document.write("괴체중 입니다. 운동하세요");
//     }else if((40<= weight)&&(weight < 68)){
//         document.write("표준체중입니다. 현 페이스 유지하세요.");
//     }else{
//         document.write("표준체중이하입니다. 고기드세요.");
//     }
        
// }

//문제3
let grade = prompt("성적을 입력하세요",1);
if (isNaN(grade) || grade > 100){ // isNaN : 숫자가 아니면 true
    location.reload();
}else{
    if(grade >= 95){
        document.write(`축하합니다 A+ 입니다.`);
    }else if(grade >= 90){
        document.write(`축하합니다 A 입니다.`);
    }else if(grade >= 85){
        document.write(`축하합니다 B+ 입니다.`);
    }else if(grade >= 80){
        document.write(`축하합니다 B 입니다.`);
    }else if(grade >= 75){
        document.write(`축하합니다 C+ 입니다.`);
    }else if(grade >= 70){
        document.write(`축하합니다 C 입니다.`);
    }else if(grade >= 65){
        document.write(`축하합니다 D+ 입니다.`);
    }else if(grade >= 60){
        document.write(`축하합니다 D 입니다.`);
    }else{
        document.write(`F입니다.`);
    }

}
