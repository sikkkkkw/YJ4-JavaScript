// 변수 const = 상수
const name = "최재식"
// 변수 let = 변할 수 있는 수
let hobby= "잠자기"
hobby = "게임"
console.log(hobby)
// 변수 var = 값이 두개면 새로운 값 덮어쓰기 됨(에러x)
var address ="대구"
var address = "붓산"
console.log(address)
//
const a ="10"
const b ="20"
console.log(a+b)
const a1 =10
const b1 =20
console.log(a1+b1)
// 숫자 배열
const arr =[1,2,3,4]
const arr2=["최재식","최현기","바보"]
const arr3 =["최재식",1,2,"최현기"]
console.log(arr)
console.log(arr2)
console.log(arr3)
console.log(arr[0])
// 객체
const obj={name : "최재식",hobby:"달리기"}
const obj1={name : "최재식",hobby:"달리기"}
const obj2=[
    {name : "최재식",hobby:"달리기"}
    ,{name : "최현기",hobby:"유튜브시청"}
]
console.log(obj)
console.log(obj2[0])// 배열에서 원하는 객체 가져오기
console.log(obj2[0].hobby) //객체 안의 원하는 값 하나 가져오기





console.log(name+hobby+address)
// typeof = 변수 형식 확인
console.log(typeof name)
console.log(typeof a)

// ""와``(백틱)의 차이
console.log("나의 이름은 "+name+"이고,"+" 취미는 "+hobby+ " 입니다.")
console.log(`나의 이름은 ${name}이고, 취미는 ${hobby} 입니다. `)
