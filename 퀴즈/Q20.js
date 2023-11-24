// 직업학교 종료일 구하기
let today = new Date();
let theDate = new Date("2024-5-30"); //let theDate = new Date(2024,4,30); 넣어도됨
let diffDate = theDate.getTime() - today.getTime();

let result = Math.ceil(diffDate/(60*1000*60*24)); //Math.ceil = 올림한다.
document.write("종료일은"+result+"일 남았습니다.");
let dday = new Date("2045-5-30");
let result2 = new Date(dday.setDate(dday.getDate()+7));
document.write(result2);
