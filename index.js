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
// 배열
const arr =[1,2,3]
console.log(arr)
console.log(arr[0])






console.log(name+hobby+address)
// typeof = 변수 형식 확인
console.log(typeof name)
console.log(typeof a)

// ""와``(백틱)의 차이
console.log("나의 이름은 "+name+"이고,"+" 취미는 "+hobby+ " 입니다.")
console.log(`나의 이름은 ${name}이고, 취미는 ${hobby} 입니다. `)
