fetch('https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=ZXfWv8aizBtm6uHE%2Fvofrjzz2FMfm3%2FxOxLeB%2FfInDyPgt%2BEgUWDfh0EfQc%2F%2B15He2qdhbBN9vAEc5vTgtkYLw%3D%3D')
.then(response => response.json())
.then(json =>{
    const Table = document.createElement("table");
    Table.style.border="1px solid black";
    Table.style.textAlign="center";
    const Header = document.createElement("tr");
    Header.style.backgroundColor="red";
    
    const header1 = document.createElement("th");
    header1.textContent ="번호";
    Header.appendChild(header1);

    const header2 = document.createElement("th");
    header2.textContent="상호";
    Header.appendChild(header2);

    const header3 = document.createElement("th");
    header3.textContent="전화번호";
    Header.appendChild(header3);

    const header4 = document.createElement("th");
    header4.textContent="위치";
    Header.appendChild(header4);

    const header5 = document.createElement("th");
    header5.textContent="업태";
    Header.appendChild(header5);

    Table.appendChild(Header);

    for(let i = 0; i <json.data.length; i++){
        const Data = document.createElement("tr");

        const data0 = document.createElement("td");
        data0.style.border="1px solid black";
        data0.textContent = (i+1);
        Data.appendChild(data0);

        const data1 = document.createElement("td");
        data1.style.border="1px solid black";
        data1.textContent = json.data[i].상호;
        Data.appendChild(data1);

        const data2 = document.createElement("td");
        data2.style.border="1px solid black";
        data2.textContent = json.data[i].전화번호;
        Data.appendChild(data2);

        const data3 = document.createElement("td");
        data3.style.border="1px solid black";
        data3.textContent = json.data[i].위치;
        Data.appendChild(data3);

        const data4 = document.createElement("td");
        data4.style.border="1px solid black";
        data4.textContent = json.data[i].업태;
        Data.appendChild(data4);

        Table.appendChild(Data);
        foods.appendChild(Table);
    }
    

})