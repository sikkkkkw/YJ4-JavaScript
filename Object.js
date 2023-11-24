//내장 객체 생성
// 기본형 : 참조 변수(인스턴스 이름) = new  생성함수()
// this는 인스턴스 자신(self)을 가리키는 참조변수
let tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function(){
    document.write(`tv 색상: ${this.color} <br>`);
    document.write(`tv 가격: ${this.price} <br>`);
}
let car ={
    color : "break",
    price : 500000,
    info : function(){ 
        document.write(`car 색상: ${this.color} <br>`); 
        document.write(`car 가격: ${this.price} <br>`);
    } 
};
document.write(`<h2>tv 객체 메서드 호출</h2>`);
tv.info(); //tv info 
document.write(`<h2>car 객체 메소드 호출</h2>`);
car.info();

// 월드컵 날짜 정보
let today = new Date();
let nowMonth = today.getMonth(); // 월 정보를 가져옴
let nowDate = today.getDate(); //일 정보를 가져옴
let nowDay = today.getDay(); // 요일 정보를 가져옴

document.write(`<h2>오늘 날짜 정보</h2>`);
document.write(`현재 월: ${nowMonth} <br>`);
document.write(`현재 일: ${nowDate} <br>`);
document.write(`현재 요일 : ${nowDay} <br>`);

let worldcup = new Date(2002,4,31); //new Date(객체 선언)
let theMonth = worldcup.getMonth();
let theDate = worldcup.getDate();
let theDay = worldcup.getDay();

document.write(`<h2>월드컵 날짜 정보</h2>`);
document.write(`2002월드컵 몇 월: ${theMonth} <br>`);
document.write(`2002월드컵 몇 일: ${theDate} <br>`);
document.write(`2002월드컵 무슨 요일 : ${theDay} <br>`);

let nowYear = today.getFullYear(); 
let theDate1 = new Date(nowYear,11,15); //
let diffDate = theDate1.getTime() - today.getTime();

let result = Math.ceil(diffDate/(60 * 1000 * 60 *24));//Math.ceil = 올림한다.
document.write(`<h2>오늘부터 올해 연말까지 남은 날짜</h2>`);
document.write(`연말 D-day : ${result}일 남았습니다.` );

let num = 2.1234;
let maxNum = Math.max(10,5,8,30);
let minNum = Math.min(10,5,8,30);
let roundNum = Math.round(num);
let floorNum = Math.floor(num);
let ceilNum = Math.ceil(num);
let rndNum = Math.random();
let piNum = Math.PI;

document.write(`<h2>수학 객체</h2>`);
document.write(`${maxNum}<br>`); // 숫자 중 가장 큰 값 반환 30
document.write(`${minNum}<br>`); // 숫자 중 가장 작은 값 반환 5
document.write(`${roundNum}<br>`); //0~1사이의 난수를 반환
document.write(`${floorNum}<br>`); //
document.write(`${ceilNum}<br>`);
document.write(`${rndNum}<br>`);
document.write(`${piNum}<br>`);

document.write((num).toFixed(2));

document.write(`<h2>컴퓨터 가위 바위 보 맞추기</h2>`);
let game = prompt("가위, 바위, 보 중 선택하세요?","가위");
let gameNum;
switch(game){
    case "가위":
        gameNum = 1;
        break;
    case "바위":
        gameNum = 2;
        break;
    case "보":
        gameNum = 3;
        break;
    default: alert("잘못 작성했습니다.");
        location.reload();
    }
    let com = Math.ceil(Math.random()*3);
    document.write(`<img src = "${com}.jpg">`);
    // 1이면 가위.jpg 2이면 바위.jpg 3이면 보.jpg
    if(gameNum === com){ // 같은 숫자이면 정답출력 다르면 틀렸습니다. 출력
        document.write("<h2>정답입니다!</h2>");
    }else{
        document.write("<h2>틀렸습니다.</h2>");
    }
