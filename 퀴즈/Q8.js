let s =prompt("좋아하는 과일을 선택해 주세요.","사과,바나나,오렌지 중 택 1");
switch(s){
    case "사과" :
        document.write(`${s}를 선택하셨습니다.`);
        break;
    case "바나나" :
        document.write(`${s}를 선택하셨습니다.`);
        break;
    case "오렌지" :
        document.write(`${s}를 선택하셨습니다.`);
        break;
    default : alert(`다른 과일을 선택하셨습니다.`);
    location.reload();

}