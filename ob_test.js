let addNum=0;
let subNum=1000;

let auto_1 = setInterval(function(){
    addNum++;
    console.log("addNum:"+addNum);
},3000);
let auto_2 = setInterval(function(){
    subNum++;
    console.log("subNum:"+subNum);
},3000);