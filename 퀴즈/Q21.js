let arr1 = ["사과","배","포도","귤"];
let arr2 = ["밤","오이","상추"];
//문제1
arr1.push("수박");
document.write(arr1,"<br>");
//문제2
arr1 =arr1.concat(arr2)
document.write(arr1,"<br>");
//문제3
arr1.sort();
document.write(arr1,"<br>");
//문제4
arr1.pop();
document.write(arr1,"<br>");
//문제5
arr1.splice(4,1,"치킨","피자");
document.write(arr1,"<br>")

//map(),foreach(),filter(),reduce()
//map과 foreach의 다른점?
//callback함수가 무엇인지?
