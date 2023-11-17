//confirm
let result = confirm(`정말로 회원을 탈퇴하시겠습니까?`);
document.write(result+"<br>");
if(result){
    document.write("탈퇴 처리되었습니다."); //확인을 누르면 ture 값
}else {
    document.write("탈퇴가 취소되었습니다."); // 취소를 누르면 false 값
}