document.write(`<h2>컴퓨터랑 가위 바위 보 이기기</h2>`);
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
    document.write(`<img src = "${gameNum}.jpg">`); // 1이면 가위.jpg 2이면 바위.jpg 3이면 보.jpg
    let com = Math.ceil(Math.random()*3);
    document.write(`<img src = "${com}.jpg">`);
    document.write("<br>");
    if(gameNum == com){ // 같은 숫자이면 정답출력 다르면 틀렸습니다. 출력
        document.write("<h2>비겼습니다.</h2>");
        // user가 이기는 경우의 수
    }else if((gameNum === 1 && com === 3)/* 가위 vs 보 */ || (gameNum === 2 && com === 1)/* 바위 vs 가위 */ || (gameNum === 3 && com === 2)/* 보 vs 바위 */){ 
        document.write("<h2>이겼습니다.</h2>");
        // user가 지는 경우의 수
    }else if((gameNum === 3 && com === 1)/* 보 vs 가위 */ || (gameNum === 1 && com === 2)/* 가위 vs 바위 */ || (gameNum === 2 && com === 3)/* 바위 vs 보 */){ 
        document.write("<h2>졌습니다.</h2>");
    }
