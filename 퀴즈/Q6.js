let age = prompt("나이를 입력하세요.","18");
let gender = prompt("성별을 입력하세요<남,여>","남");

if(gender === "남"){
    document.write(`남자는 이용료가 20000 원입니다.<br>`);
    if(age >= 18){
        document.write(`입장이 가능합니다.`);
    }else{
        document.write(`입장이 불가합니다.`);
    }
}if(gender === "여"){
    document.write(`여자는 이용료가 10000원입니다.<br>`);
    if(age >= 18){
        document.write(`입장이 가능합니다.`);
    }else{
        document.write(`입장이 불가합니다.`);
    }
}
