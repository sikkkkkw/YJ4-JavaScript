fetch('https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=ZXfWv8aizBtm6uHE%2Fvofrjzz2FMfm3%2FxOxLeB%2FfInDyPgt%2BEgUWDfh0EfQc%2F%2B15He2qdhbBN9vAEc5vTgtkYLw%3D%3D')
      .then(response => response.json())
      .then(json => {
        const foods = document.querySelector("#foods"); //html id:foods가져옴
        const ul = document.createElement("ul"); 
        for(let i = 0; i< json.data.length;i++){
            const li = document.createElement("li");
            li.innerHTML = json.data[i].상호; //li에 데이터를 넣어라
            ul.appendChild(li); //ul 밑에 li 넣어라
        }
        foods.appendChild(ul) //반복문 끝나고 foods 밑에 ul 넣어라 
      })
      // Fetch API로부터 반환된 HTTP 응답 객체를 JSON 형식으로 변환합니다. 이 부분은 첫 번째 Promise에서 성공적으로 반환된 경우 실행됩니다.
      fetch('https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=ZXfWv8aizBtm6uHE%2Fvofrjzz2FMfm3%2FxOxLeB%2FfInDyPgt%2BEgUWDfh0EfQc%2F%2B15He2qdhbBN9vAEc5vTgtkYLw%3D%3D')
      //JSON 형식으로 변환된 데이터를 가지고 특정 작업을 수행하는 블록입니다. 이 부분은 두 번째 Promise에서 성공적으로 반환된 경우 실행됩니다.   
      .then(response => response.json())
      .then(json => {
        // HTML 테이블 엘리먼트를 생성하고 foodsTable 변수에 할당합니다.
        const foodsTable = document.createElement("table");
        //  "foods-table"이라는 클래스를 추가합니다.
        foodsTable.classList.add("foods-table"); // 테이블에 클래스 추가
    
        // 테이블 헤더 생성
        const headerRow = document.createElement("tr");
        
        const headerCell0 = document.createElement("th");
        headerCell0.textContent = "번호"; // 일련 번호 헤더 추가
        // HTML <tr> (테이블 행) 엘리먼트를 생성하고 headerRow 변수에 할당합니다.
        headerRow.appendChild(headerCell0);
    
        const headerCell1 = document.createElement("th");
        headerCell1.textContent = "상호"; 
        headerRow.appendChild(headerCell1);
    
        const headerCell2 = document.createElement("th");
        headerCell2.textContent = "전화번호";
        headerRow.appendChild(headerCell2);
    
        const headerCell3 = document.createElement("th");
        headerCell3.textContent = "위치"; // 주소를 위치로 변경
        headerRow.appendChild(headerCell3);
    
        const headerCell4 = document.createElement("th");
        headerCell4.textContent = "업태";
        headerRow.appendChild(headerCell4);
    
        foodsTable.appendChild(headerRow);
    
        // 데이터 행 생성
        for(let i = 0; i < json.data.length; i++) {
          const dataRow = document.createElement("tr");
    
          const dataCell0 = document.createElement("td");
          dataCell0.textContent = (i + 1).toString(); // 일련 번호 추가
          dataRow.appendChild(dataCell0);
    
          const dataCell1 = document.createElement("td");
          dataCell1.textContent = json.data[i].상호;
          dataRow.appendChild(dataCell1);
    
          const dataCell2 = document.createElement("td");
          dataCell2.textContent = json.data[i].전화번호;
          dataRow.appendChild(dataCell2);
    
          const dataCell3 = document.createElement("td");
          dataCell3.textContent = json.data[i].위치; // 주소를 위치로 변경
          dataRow.appendChild(dataCell3);
    
          const dataCell4 = document.createElement("td");
          dataCell4.textContent = json.data[i].업태;
          dataRow.appendChild(dataCell4);
    
          foodsTable.appendChild(dataRow);
        }
    
        // 테이블을 #foods에 추가
        const foods = document.querySelector("#foods");
        foods.appendChild(foodsTable);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    
// fetch('https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=ZXfWv8aizBtm6uHE%2Fvofrjzz2FMfm3%2FxOxLeB%2FfInDyPgt%2BEgUWDfh0EfQc%2F%2B15He2qdhbBN9vAEc5vTgtkYLw%3D%3D')
//   .then(response => response.json())
//   .then(json => {
//     const ul = document.createElement("ul");
//     const foods = document.querySelector("#foods");
//     foods.appendChild(ul);
//     for (let i = 0; i < json.data.length; i++) {
//       const li = document.createElement("li");
//       li.innerHTML = json.data[i].상호;
//       ul.appendChild(li);
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
