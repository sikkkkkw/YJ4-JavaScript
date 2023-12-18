// function addNum(x,y){
//     document.write(x+y,"<br>");
// }
// addNum("2.5",10);

// function multiNum(x,y){
//     return x*y;
// }
// let num = multiNum(3,5);
// document.write(num,"<br>");

// function aa(x){
//     if(x === 0){
//         document.write("하이");
//     }else{
//         document.write(x);
//         aa(x -1);
//     }
// }aa(10);

function Car(name,height,weight,color){
    this.carName=name;
    this.carHeight=height;
    this.carWeight=weight;
    this.carColor=color;

    this.getinfo = function(){
        let str = "";
        str+="이름"+this.carName+",";
        str+="높이"+this.carHeight+",";
        str+="무게"+this.carWeight+",";
        str+="색상"+this.carColor+",";
        return str;
    }
}
let car1 = new Car("소나타",149,3000,"RED");
console.log(car1);
document.write(car1.getinfo());
