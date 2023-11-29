var t = "Hello Thank you good luck to you";
//인덱스 16에 저장된 문자를 불러옵니다. -> "g"
document.write(t.charAt(16),"<br>");

// 문자열 왼쪽에서부터 제일 먼저 발견된 "you"의 인덱스 값을 반환합니다.->12
document.write(t.indexOf("you"),"<br>");

//문자열 인덱스 16위치부터 제일 먼저 발견된 "you"의 인덱스 값을 반환합니다. ->29
document.write(t.indexOf("you",16),"<br>");

//문자열 오른쪽에서부터 왼쪽 방향으로 제일먼저 발견된"you"의 인덱스 값을 반환합니다. ->29
document.write(t.lastIndexOf("you"),"<br>");

//문자열 인덱스 25부터 왼쪽 방향으로 제일 먼저 발견된 "you"의 인덱스값을 반환합니다  ->12
document.write(t.lastIndexOf("you",25),"<br>");

//문자열 왼쪽에서부터 제일 먼저 발견된 "luck"과 일치되는 문자를 찾아 반환합니다.
document.write(t.match("luck"),"<br>");

//문자열 왼쪽에서부터 제일 먼저 발견된 "you"의 인덱스 값을 반환합니다. ->12
document.write(t.search("you"),"<br>");

//문자열 인덱스 21부터 네 글자를 가져옵니다. ->"luck"
document.write(t.substr(21,4),"<br>");

//문자열 인덱스 6부터 12 이전까지의 문자를 가져옵니다. ->"Thank"
document.write(t.substring(6,12),"<br>");

//문자열 왼쪽에서부터 제일 먼저 발견된 "you"를 "me"로 치환합니다.
document.write(t.replace("you","me"),"<br>");

//문자열 영문자가 모두 소문자로 바뀐 문자열을 반환합니다.
document.write(t.toLowerCase(),"<br>");

//문자열 영문자가 모두 대문자로 바뀐 문자열을 반환합니다.
document.write(t.toUpperCase(),"<br>");

//문자열의 문자 총 개수를 반환합니다<공백도 문자로 취급> ->32
document.write(t.length,"<br>");

//공백 문자를 기준으로 문자를 분리합니다. 분리된 문자열을 배열에 저장되어 s에 할당합니다.
let s = t.split(" ");

//s의 인덱스 0에 저장된 문자열을 출력합니다. ->"Hello"
document.write(s[0],"<br>");
//s의 인덱스 4에 저장된 문자열을 출력합니다. ->"luck"
document.write(s[4],"<br>");

let str ="A";

//변수에 저장된 문자열 중 0번 인덱스의 문자 "A"의 아스키 코드값을 반환 합니다.
var t = str.charCodeAt(0);

//"A"의 아스키 코드값 65를 출력합니다.
document.write(t,"<br>");

//코드값 65에 해당하는 문자를 반환합니다.
document.write(String.fromCharCode(65),"<br>");

let userName = prompt("당신의 영문 이름은?","");

let upperName = userName.toUpperCase();
document.write(upperName,"<br>");

let userNum = prompt("당신의 연락처는?","");
let result = userNum.substring(0,userNum.length - 4)+"****";
document.write(result,"<br>");

let userEmail = prompt("당신의 이메일 주소는?","");
let arrUrl =[".co.kr",".com",".net",".or.kr","go.kr"];

let check1 = false;
let check2 = false;

if(userEmail.includes("@")) {check1 = true;}

for(let i =0; i <arrUrl.length; i++){
    if(userEmail.includes(arrUrl[i])){
        check2=true;
    }
}
if(check1 && check2){
    document.write(userEmail);
}else{
    alert("이메일 형식이 잘못되었습니다.");
}
