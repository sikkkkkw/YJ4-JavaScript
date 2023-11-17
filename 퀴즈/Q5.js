let cof = prompt("어떤 종류의 커피를 주문하시겠습니까?(에스프레소,아메리카노,카페라떼)","아메리카노");
let size = prompt("작은사이즈,중간사이즈,큰사이즈","중간사이즈");
if(cof==="에스프레소"){
    if(size === "작은사이즈"){
        document.write("에스프레소의 작은사이즈는 2000원 입니다.");
    }else if(size === "중간사이즈"){
        document.write("에스프레소의 중간사이즈는 2500원 입니다.");
    }else if(size === "큰사이즈"){
        document.write("에스프레소의 큰사이즈는 3000원 입니다.");
    }else{
        alert("없는 사이즈입니다.");
        location.reload();
    }
    
}else if(cof==="아메리카노"){
    if(size === "작은사이즈"){
        document.write(`${cof}의 ${size}는 2500원 입니다.`);
    }else if(size === "중간사이즈"){
        document.write(`${cof}의 ${size}는 3000원 입니다.`);
    }else if(size === "큰사이즈"){
        document.write(`${cof}의 ${size}는 3500원 입니다.`);
    }else{
        alert("없는 사이즈입니다.");
        location.reload();
    }
    
}else if(cof==="카페라떼"){
    if(size === "작은사이즈"){
        document.write("카페라떼의 작은사이즈는 3000원 입니다.");
    }else if(size === "중간사이즈"){
        document.write("카페라떼의 중간사이즈는 3500원 입니다.");
    }else if(size === "큰사이즈"){
        document.write("카페라떼의 큰사이즈는 4000원 입니다.");
    }else{
        alert("없는 사이즈입니다.");
        location.reload();
    }
    
}else{
    alert("없는 메뉴입니다.");
    location.reload();
}