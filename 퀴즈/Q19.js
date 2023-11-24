let hi = {
    name : "최재식",
    area : "대구 북구",
    age : "26",
    email : "ckc9292@naver.com",
    hobby : "게임",
    info : function(){
        document.write(`저의 이름은 ${this.name} <br>`);
        document.write(`사는 지역은 ${this.area} <br>`);
        document.write(`나이는 ${this.age} <br>`);
        document.write(`이메일주소는 ${this.email} <br>`);
        document.write(`취미는 ${this.hobby} <br>`);
    }
};
hi.info();

function Person(name,area,age,email,hobby){
    this.name = name;
    this.area = area;
    this.age =age;
    this.email= email;
    this.hobby = hobby;
    this.info = function(){
        document.write(`이름은${this.name}이고 나이는${this.age}이메일은${this.email}`);
        
    }
}
const jaesik = new Person("최재식",20,"ckc9292@naver.com");
jaesik.info();