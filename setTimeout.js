// 3초 후 변수 i의; 데이터를 단 한 번만 1만큼 증가시키고 콘솔창에 값을 출력
let addNum = 0;
let auto = setTimeout(function() {
    addNum++;
    console.log(addNum);
}, 5000);