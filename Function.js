// 자바스크립트 내장함수
// parseInt() 문자열에서 정수형로 반환
// parseFloat() 문자열에서 실수형 반환
// String() 문자형으로 반환
// Number() 숫자형으로 반환
// Boolean() 논리형으로 반환


//기명 함수 선언식
function addNum(x,y){
    document.write(parseFloat(x) + y + "<br>");
    document.write(x - y + "<br>");
}
addNum("2.5",3);
addNum(10);//인자값이 1개라서 NaN
//화살표 함수(function 대신에 =>사용)
let addNum1 = (x,y)=>{
    return x + y;
}
document.write(addNum1(2,3)+"<br>");

let addNum2 = (x,y) => x + y;
document.write(addNum2(2,3)+"<br>");
//반환문(Return)과 매개변수(Parameter)
function multiNum(x,y){
    return x * y;
}
var num = multiNum(3,4);
document.write(num+"<br>");//변수 num 값 출력
document.write(multiNum(3)+"<br>");//인수로 3을 전달하여 함수를 호출함,->NaN
// 재귀함수 정의문
function count(x){
    if(x === 0){
        document.write("함수 실행 종료");
    }else{
        document.write("count x값:"+x+"<br>");
        count(x - 1);
    }
}count(5);

let count = 0;

myFnc();

function myFnc(){
    count++;
    document.write("hello"+count,"<br>");
}
myFnc();

let theFnc = function(){
    count++;
    document.write("bye"+count,"<br>");
}
theFnc();
// 즉시 실행 함수 
(function(){
    let num = 100;
    function menu(){
    num += 100;
    alert(num);
    }   
    menu();
}());
(function(){
    let num = 100;
    function menu(){
        alert(num);
    }
}());
// 재귀함수
let num = 0;
function testFnc(){
    num++;
    document.write(num,"<br>");
    if(num == 10)
        return;

        testFnc();
      
     
}
testFnc(); 
// 객체 생성자 함수
function CheckWeight(name,height,weight){
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;
    this.getinfo = function(){
        let str =""
        str+="이름:" +this.userName+",";
        str+="키:"+this.userHeight+",";
        str+="몸무게:"+this.userWeight+"<br>";
        return str;
    }
    this.getResult = function(){
        this.minWeight=(this.userHeight-100)*0.9-5;
        this.maxWeight=(this.userHeight-100)*0.9+5;

        if(this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight){
            return "정상 몸무게입니다.";
        }else if(this.userWeight < this.minWeight){
            return "정상 몸무게보다 미달입니다.";
        }else{
            return "정상 몸무게보다 초과입니다."
        }
    }
}

let jang = new CheckWeight("장보리",168,62);
let park = new CheckWeight("박박박",180,80);
console.log(jang);
console.log(park);

document.write(jang.getinfo());
document.write(jang.getResult());


function Car(name,height,weight,color){
    this.carName = name;
    this.carHeight = height;
    this.carWeight = weight;
    this.carColor = color;

    this.getinfo1 = function(){
        let str =""
        str+="이름"+this.carName+",";
        str+="높이"+this.carHeight+",";
        str+="무게"+this.carWeight+",";
        str+="색"+this.carColor+"<br>";
        return str;
    }
}
let car1 = new car("소나타",120,3000,"red");