function getClock() {
    // 현재의 시, 분, 초 가져오기
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // HTML태그에 넣어주기
    $clock.innerText = `${hours}:${minutes}:${seconds}`;
  } 
  // 웹페이지 열자마자 시계를 볼 수 있도록
  getClock(); 
  // 1초 간격으로 getClock 함수 실행
  setInterval(getClock, 1000); 