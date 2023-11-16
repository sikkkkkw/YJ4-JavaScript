let s = "javascript";
let num = "100";
let tag = "<h1>String</h1>"
let j = 100;
let t = Number("500");
let f = true;
let h  = 10 >= 100;
let k = Boolean("Hello");
let k1 = Boolean(0);
let k2 = Boolean(undefined);
const numA = "300";
const numB = "200";
let aaa;
bbb = null;

// 문자형
document.write("<br>");
document.write(s, num, tag); //javascript100 String
document.write("<br>");
console.log(typeof s); // 문자형
console.log(typeof num); // 문자형
console.log(typeof tag); // 문자형

// 숫자형
document.write(j); //100
document.write("<br>");
console.log(typeof j); //숫자형
document.write(t); //500
document.write("<br>");
console.log(typeof t); //숫자형
document.write(j+t); //600
document.write("<br>");
document.write(num+numA); //100300
document.write("<br>");
console.log(typeof num+numA); //문자형300
document.write(numA+numB); //300200
document.write("<br>");
console.log(typeof numA+numB); //문자형200

// 논리형
document.write(h); //false
document.write("<br>");
console.log(typeof h); //논리형
document.write(k); //true
document.write("<br>");
console.log(typeof k); //논리형
document.write(k1); //false
document.write("<br>");
document.write(k2); //false
document.write("<br>");

// null&undefined 데이터
document.write(typeof aaa); //aaa는 아무것도 없어서 undefined
document.write("<br>");
document.write(typeof bbb); //object로 나온다]
document.write(Boolean(null == undefined));