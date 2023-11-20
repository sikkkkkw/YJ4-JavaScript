// 요일을 확인하고 싶은 날짜를 입력해주세여(2023-11-20)
let promptDay = prompt("날짜를 입력해주세요(2023-11-20)","2023-11-20"); //날짜를 입력 받는다.
let tempData = new Date(promptDay); //tempData의 promptDay입력받은 값을 Date 객체 메서드로 들어간다.
let day = tempData.getDay(); //getDay() 사용하면 0~6 사이의 숫자로 요일을 표시한다.

document.write(tempData.getDay()," 받아옴 <br>");
switch(day){
    case 0 :
        document.write(`${promptDay} 일요일입니다.`);
        break;
    case 1 :
        document.write(`${promptDay} 월요일입니다.`);
        break;
    case 2 :
        document.write(`${promptDay} 화요일입니다.`);
        break;
    case 3 :
        document.write(`${promptDay} 수요일입니다.`);
        break;
    case 4 :
        document.write(`${promptDay} 목요일입니다.`);
        break;
    case 5 :
        document.write(`${promptDay} 금요일입니다.`);
        break;
    case 6 :
        document.write(`${promptDay} 토요일입니다.`);
        break;
    default :alert(`다시 입력하세요.`);
    location.reload();   
}









