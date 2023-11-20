let a = 200;
switch(a % 2){
    case 0:
        document.write("a는 짝수입니다.");
        break;
    case 1:
        document.write("a는 홀수입니다.");
        break;
}

// let site = prompt("즐겨 찾는 포털 사이트는?(네이버,다음,네이트,구글)","네이버");
// let url;
// switch(site){
//     case "구글": url = "www.google.com";
//     break;
//     case "다음": url = "www.daum.net";
//     break;
//     case "네이버": url = "www.naver.com";
//     break;
//     case "네이트": url = "www.nate.com";
//     break;
//     default:alert("보기 중에 없는 사이트입니다.");
// }
// if(url)location.href = "http://" + url;//location.href 내장함수

// let x = prompt("타입을 입력하세요","문자열");
// let y;
// switch(typeof x){
//     case "number":
//         document.write("변수 x의 타입은 숫자입니다.<br>");
//         break;
//     case "string":
//         document.write("변수 x의 타입은 문자열입니다.<br>");
//         break;
//     case "object":
//         document.write("변수 x의 타입은 객체입니다.<br>");
//         break;
//     default:
//         document.write("변수 x의 타입을 잘 모르겟어요...<br>");
//         break; 
// }






let date = new Date();
switch (date.getMonth()+1){
    case 12:
    case 1:
    case 2:
        document.write("겨울입니다.");
        break;
    case 3:
    case 4:
    case 5:
        document.write("봄입니다.");
        break;
    case 6:
    case 7:
    case 8:
        document.write("여름입니다.");
        break;
    case 9:
    case 10:
    case 11:
        document.write("가을입니다.");
        break;
    default:
        document.write("해당사항없음");
        break;
}

let site1 = prompt("네이버, 다음, 네이트 ,구글 중 \ 즐겨 사용하는 포털 검색 사이트는?","");
let url1;

switch(site1){
    case "구글" : url1 = "www.google.com";
    break;
    case "다음": url1 = "www.daum.net";
    break;
    case "네이버": url1 = "www.naver.com";
    break;
    case "네이트": url1 = "www.nate.com";
    break;
    default:alert("보기 중에 없는 사이트입니다.");
    location.reload();

}if(url1)location.href = "http://" +url1;
