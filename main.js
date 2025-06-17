// const a = 0.1;
// const b = 0.2;

// console.log(Number((a + b).toFixed(1)));  //0.3


//Boolean(불린)

// const a = true
// const b = false

// if(b) {
//     console.log('Hello');
// }



// let age = undefined


// console.log(age)

// setTimeout (function () {
//     age = 85
//     console.log(age)
// },1000)


// 

//Array(배열)

// const fruits = ['apple', 'banana', 'cherry']



// console.log(fruits.length)
// console.log(fruits[fruits.length - 1])


//Object(객체)

// const user = new Object()
// user.name = 'Heropy'
// user.age = 85



// function User () {
//     this.name = 'Heropy'
//     this.age = 85
// }

// const user = new User()
// console.log(user)


// const user = {
//     name: 'Heropy',
//     age: 85
// }
// const key = 'name'

// console.log(user[key])
// console.log(user.name)

// console.log(user)




// const userA = {
//     name : 'Heropy',
//     age : 85
// }

// const userB = {
//     name : 'Neo',
//     age : 77,
//     parent : userA
// }

// console.log(userB.parent.age)
// console.log(userB['parent']['name'])


// const users = [userA, userB]

// console.log(users[1])


// function getNumber () {
//     return 123
// }

// const a = function () {
//     console.log('A')
// }

// const b = function (c) {
//     console.log(c)
//     c()
// }
// b(a)




//형 변환(Type Conversion)

// const a = true
// const b = 1

// console.log(a === b) //false // -> === 일치
// console.log(a == b) //true // -> == 동등


//참과 거짓(Truthy & Falsy)



// 거짓 데이터 종류
// 1) flase
// 2) 0
// 3) null
// 4) undefined
// 5) NaN
// 6) ''
// 7) 0n


// const fruits = ['Apple']

// if (fruits.length) {
//     console.log('아이템이 들어있음!')
// }




// 조건문(Conditionals)


// function isPositive(number) {
//     if (number > 0) {
//         return '양수'
//     }else if (number < 0) {
//         return '음수'
//     } else {
//         return '0'
//     }
// }


// console.log(isPositive(1))
// console.log(isPositive(10))
// console.log(isPositive(-1))
// console.log(isPositive(0))


//Switch 조건문 

// switch (조건) {
//     case 값1:
//         //  조건이 '값1'일 때 실행
//         breck
//         case 값2:
//             // 조건이 '값2'일 때 실행
//             break
//             default:
//                 // 조건이 '값1'도 '값2'도 아닐 때 실행
// }




// function price (fruit) {
//     // switch (fruit) {
//     //     case 'Apple':
//     //         return '1000원'
//     //     case 'Banana':
//     //         return'1500원'
//     //     case 'Cherry':
//     //         return '2000원'
//     //     default:
//     //         return '0원'
//     // }

//     if(fruit === 'Apple') {
//         return '1000원'
//     } else if (fruit === 'Banana') {
//         return '1500원'
//     } else if (fruit === 'Cherry') {
//         return '2000원'
//     } else {
//         return '0원'
//     }
// }

// console.log(price('Apple'))
// console.log(price('Banana'))
// console.log(price('Cherry'))
// console.log(price('Orange'))


// For 반복문

// for (초기화; 조건; 증감) {
//     //반복 실행할 코드
// }


// for (let i = 9; i > -1; i -= 1) {
//     if (i % 2 === 0 ) {
//         continue // 조건이 참이면 반복문의 처음으로 돌아감
//     }
//     console.log(i)
// }


// For of 반복문 (배열일 때만 사용 가능)

// const fruits = ['Apple', 'Banana', 'Cherry']

// // for (let i = 0; i < fruits.length; i += 1) {
// //     console.log(fruits[i])
// // }

// for (const fruit of fruits) {
//     console.log(fruit)
// }


// const users = [ 
//     {
//         name: 'Heropy',
//         age: 85
//     },
//     {
//         name: 'Neo',
//         age: 77
//     },
//     {
//         name: 'Taeho',
//         age: 36
//     }
// ]

// for ( let i = 0; i < users.length; i += 1) {
//     console.log(users[i].name)
// }

// for (const user of users ) {
//     console.log(user.age)
// }


// For in 반복문 (객체일 때만 사용 가능)

// const user = {
//     name: 'Heropy',
//     age: 22,
//     isValid: true,
//     email: 'test@test.com'
// }

// for (const key in user) {
//     console.log(key)
//     console.log(user[key])
// }


// While 반복문

// 조건이 참일 때 반복문 실행
// let n = 0
// while (n < 4) {
// console.log(n)
// n += 1
// }

// Do while 반복문 (조건이 거짓이어도 한 번은 실행)

// let n = 0
// // while (n) {
// //     console.log(n)
// // }

// do {
//     console.log(n)
//     n += 1
// } while (n < 4)



//함수 (Function)



// 함수 선언문 (Function Declaration)  -> 호이스팅 발생 가능 (선언 전에 호출 가능)
// function hello() {}


// // 함수 표현식 (Function Expression) -> 호이스팅 발생 불가능 (선언 전에 호출 불가능)

// const hello = function () {}
    
//     //호이스팅 (Hoisting) -> 호이스팅이란 변수를 선언하기 전에 사용할 수 있게 하는 것

//     hello()

//     function hello() {
//         console.log('Hello~')
//     }


    // 화살표 함수 (Arrow Function)

    // function sum() {}
    // const sum = function () {}
    // const sum = () => {}

        // const a = () => {} // 매개변수가 없을 때는 소괄호 생략 불가
        // const b = x => {}  // 매개변수가 하나일 때는 소괄호 생략 가능
        // const c = (x, y) => {} // 매개변수가 두 개 이상일 때는 소괄호 생략 불가

        // const d = x => { return x * x } // (아랫줄 예시)
        // const e = x => x * x // 한 줄일 때는 모든 괄호 생략 가능
        // const f = x => {
        //     console.log(x * x) //return 키워드를 제외한 다른 로직이 있으면 중괄호와 return 키워드를 생략 불가
        //     return x * x
        // }
        // const g = () => {return {a: 1}} // (아랫줄 예시)
        // const h = () => ({a: 1}) // 객체를 반환할 때는 중괄호 겉에 소괄호로 포장

        // const i  = () => { return [1, 2, 3] } // (아랫줄 예시)
        // const j = () => [1,2,3] // 배열을 반환할 때는 중괄호,return 키워드 생략 가능하고 대괄호만 남기기



// 즉시실행함수 (IIFE, Immediately Invoked Function Expression)

// const a = 7

// const double = () => {
//     console.log(a * 2)
// }
// double()

// ;(() => {
//     console.log(a * 2)
// }) ()

// ;(() => {})() // (F)()
// ;(function () {})() // (F)()
// ;(function () {}()) // (F())
// ;!function () {}() // !F()
// ;+function () {}() // +F()

// ;((a, b) => {
//     console.log(a.innerWidth)
//     console.log(b.body)
// }) (window, document)



// // 콜백함수 (Callback Function)

// const a = callback => {
//     callback()
//     console.log('A')
// }
// const b = () => {
//     console.log('B')
// }

// a(b)


// 재귀함수 (Recursive Function)

// const a = () => {
//     console.log('A')
//     a()
// }

// a()


// this 키워드
//// 일반 함수의 this는 호출 위치에서 정의
//// 화살표 함수의 this는 자신이 선언된 함수 ( 렉시컬 ) 범위에서 정의

// const user = {
//     firstName: 'Heropy',
//     lastName: 'Park',
//     age: 85,
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}` // this 키워드는 함수가 속한 객체를 가리킴
//     }
// }

// console.log(user.getFullName())



// function user() {
//     this.firstName = 'Neo'
//     this.lastName = 'Anderson'

// return {
//     firstName: 'Heropy',
//     lastName: 'Park',
//     age: 85,
//     getFullName: () => {
//         return `${this.firstName} ${this.lastName}` // this 키워드는 함수가 속한 객체를 가리킴
//     }
// }
// }

// const u = user()
// console.log(u.getFullName())


// const score = 100;


// if(score >= 90) {
//     console.log('A');
// } else if (score >= 80 && score < 90) {
//     console.log('B');
// } else if (score >= 70 && score < 80) {
//     console.log('C');
// } else if (score >= 60 && score < 70) {
//     console.log('D');
// } else { 
//     console.log('F');
// }
// console.log(score);




// let score = 100;
// let grade = '';

// if (90 <= score && score <= 100) {
//   grade = "A";
// } else if (80 <= score && score <= 89) {
//   grade = "B";
// } else if (70 <= score && score <= 79) {
//   grade = "C";
// } else if (60 <= score && score <= 69) {
//   grade = "D";
// } else {
//    console.log('F');
// }
// console.log(grade);



// score = int(input())

// if 90 <= score <= 100:
//     print("A")
// elif 80 <= score <= 89:
//     print("B")
// elif 70 <= score <= 79:
//     print("C")
// elif 60 <= score <= 69:
//     print("D")
// else:  # score < 60
//     print("F")


let a = 10;
let b = 10000;
let nice = ''

if ( a > b) {
    nice = '>'
}else if ( a < b ) {
    nice = '<'
}else {
    nice = '='
}

console.log(nice)

