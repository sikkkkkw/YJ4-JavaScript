let arr = [30,"따르릉", true];

document.write("<h3>배열값 가져오기-1</h3>");
document.write(arr[0],"<br>");
document.write(arr[1],"<br>");
document.write(arr[2],"<br>");

document.write("<h3>배열값 가져오기-2</h3>");
for(let i = 0; i < arr.length; i++){
    document.write(arr[i],"<br>");
}
document.write("<h3>배열값 가져오기-3</h3>");
for(i in arr){
    document.write(arr[i],"<br>");
}
let arr_1 = ["사당","교대","방배","강남"];
let arr_2 = ["신사","압구정","옥수"];

let result =arr_1.join("-"); //배열에 저장된 값을 지정한 문자로 연결하여 하나의 문자열을 반환합니다.
console.log(result);

result = arr_1.concat(arr_2); //2개의 배열을 하나의 배열로 만들어 반환합니다.
console.log(result);

result = arr_1.slice(1,3); //배열의 1번 이전의 인덱스 요소를 잘라냅니다. 그리고 남은 값을반환합니다.
console.log(result);

arr_1.sort(); //배열의 값을 오름차순으로 정렬합니다.
console.log(arr_1);

arr_2.reverse(); //배열 순서를 거꾸로 뒤집습니다.
console.log(arr_2);

let greenArr = ["교대","방배","강남"];
let yellowArr = ["미금","정자","수서"];

greenArr.splice(2,1,"서초","역삼"); //2번 인덱스부터 1개의 데이터를 삭제합니다. 그런 다음 "서초","역삼"을 삽입합니다.
console.log(greenArr); //"교대""방배""서초""역삼"

let data1 = yellowArr.pop(); //yellowArr 배열 마지막 인덱스의 데이터를 data1에 저장합니다.
let data2 = yellowArr.shift(); // yellowArr 배열 가장 앞쪽 인덱스의 데이터를 data2에 저장합니다. 

yellowArr.push(data2); //data2에 저장된 데이터를 yellowArr 배열의 마지막 인덱스에 밀어넣습니다.
console.log(greenArr);

yellowArr.unshift(data1); //data1에 저장된 데이터를 yellowArr 배열의 가장 앞쪽 인덱스에 밀어 넣습니다.
console.log(yellowArr);


