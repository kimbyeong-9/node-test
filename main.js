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



//데이터 타입 확인


console.log(typeof 'Hello' === 'string') //true
console.log(typeof 123 === 'number') //true
console.log(typeof false === 'boolean') //true
console.log(typeof undefined === 'undefined') //true
console.log(typeof null === 'object') //true
console.log(typeof [] === 'object') //true
console.log(typeof {} === 'object') //true
console.log(typeof function () {} === 'function') //true


//console.log(null.constructor)
console.log([].constructor === Array) //true
console.log({}.constructor === Object) //true

console.log(Object.prototype.toString.call(null).slice(8,-1) === 'Null') //true


function checkType (data) {
    return Object.prototype.toString.call(data).slice(8,-1)
}


console.log(checkType('Hello') === 'String')
console.log(checkType(undefined) === 'Undefined')
console.log(checkType(123) === 'Number')
console.log(checkType(null) === 'Null')
console.log(checkType(false) ==='Boolean')
console.log(checkType([]) === 'Array')
console.log(checkType({}) === 'Object')
console.log(checkType(function () {}) === 'Function')






