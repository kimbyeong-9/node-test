

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


// let a = 10;
// let b = 10000;
// let nice = ''

// if ( a > b) {
//     nice = '>'
// }else if ( a < b ) {
//     nice = '<'
// }else {
//     nice = '='
// }

// console.log(nice)



// function price ( fruit ) {


//    switch ( fruit ) {
//         case ‘Apple’ :
//           return 1000원

//         case ‘Banana’ :
//            return 1500원

//         case ‘Cherry’ :
//            return 2000원

//        default :
//           return 0
//     }
// }

// console.log( Price ( ‘Apple’ ) )         //  1000원
// console.log( Price ( ‘Banana’ ) )     //  1500원
// console.log( Price ( ‘Cherry’ ) )       //  2000원
// console.log( Price ( ‘Hello’ ) )          //  0

// @ break를 사용하지만, return키워드를 사용해주면 break를 사용할 필요가 없다.


// **  위 코드를  if 문으로 작성할 때 

// function price ( fruit ) {
//     if ( fruit === ‘Apple’ ) {
//         return 1000원

//     } else if ( fruit === ‘Banana’ ) {
//         return 1500원

//     } else if ( fruit === ‘Cherry’ ) {
//         return 2000원

//     } else {
//         return 0

//     }
// }

// console.log( Price ( ‘Apple’ ) )         //  1000원
// console.log( Price ( ‘Banana’ ) )     //  1500원
// console.log( Price ( ‘Cherry’ ) )       //  2000원
// console.log( Price ( ‘Hello’ ) )          //  0


// @ switch문은  if문으로 작성할 수 있지만, 반대로 
//      if문은 switch문을 바꿔서 사용할 수 없는 상황도 있다.




// ** For 반복문 **

// < 예시 >

// for ( 초기화 ; 조건 ; 증감 ) {
//       // 반복 실행할 코드
// }


// for ( let i = 0; i < 10; i += 1  ) {
//        console.log ( i )                            // 0~1 까지 반복해서 출력된다.
// }



// for ( let i = 9; i > -1; i -= 1  ) {
//    if ( i < 4 ) {
//        break
//    }
//        console.log ( i )                            // 9~0 까지 반복해서 출력된다.
// }

// @ for문 내부에 if문을 작성하여 중간에 멈추어 로직을 종료 시킬 수 있다.




// for ( let i = 9; i > -1; i -= 1  ) {
//    if ( i % 2 === 0 ) { 
//          continue
//    }
//        console.log ( i )                            // 
// }

// continue : 현재 반복을 종료하고 다음 반복으로 넘어가는 기능이다.





// ** For of 반복문 **


// const fruits = [ ‘Apple’, ‘Banana’, ‘Cherry’ ]

// for (let i = 0; i < fruits.length; i += 1 ) {
//    console.log(fruits[ i ] )                                //.   Apple 
//   }                                                                           Banana
//                                                                                Cherry


// @ 위 내용을 of 반복문을 통해 작성하는 법


// for ( const fruit of fruits ) {
//      console.log(fruit )                                       //    Apple 
//    }                                                                          Banana
//                                                                                Cherry


// ( for 문 옆에 소괄호 안에 변수를 지정하고 변수명 옆에 of를 붙여 그 내부에 간단하게 호출해준다. )




// ** For of 반복문 2번째 예제
 
// const users = [
//   {
//       name: ‘Heropy’ ,
//       age: 85
//   },
// {
//       name: ‘Neo’ ,
//       age: 22
//   },
// {
//       name: ‘Lewis’ ,
//       age: 34
//   }
// ]

// for ( let q = 0; q < users. length; q += 1) {
//     console.log(users [ q ].name )                            // 각 배열데이터 이름 출력
// }


// for (const user of users ) {
//     console.log (user.name)                                      // 각 배열데이터 이름 출력
// }


// ( 기본적인 for문을 작성해도 되지만 긴 코드를 간소화하고 싶을 땐 of키워드를 사용하여 코드를 간소화 시킬 수 있다.)



// ** For in 반복문 ( 객체 )**


// const user = {
//   name: ‘Heropy’ ,
//   age: 85 ,
//   isValid: true ,
//   email: ‘qweqwe@naver.com’
// }

// for ( const key in user ) {
//    console.log ( key )                     // user가 가지고 있는 데이터 출력
//    console.log ( user [ key ] )      // 각 데이터와 속성 값이 순서대로 출력
// }

// console.log( user.name )         // Heropy
// console.log( user[ ‘age’ ] )         // 85



// ** while 반복문 **

// 설명 : 조건이 참이면 계속 반복되는 간단한 구문이다.
// 주의사항 : 참일 경우 무한대로 반복을 하며 콘솔 과부화로 브라우저가 멈출 수 있으니
//                   언제 조건이 거짓이 될 지 명확하게 작성해줘야 한다.

// let n = 0

// while ( n < 4 ) {
//    console log( n )               // 0~4까지 순서대로 출력
//     n +‎ =  1                               -> 명확히 작성
// }




// ** Do while 반복문 **
// 설명 : 기존 while문은 조건이 거짓이면 실행하지 않지만 do while문은 do 내부에 있
//           는 조건을 먼저 실행하고 호출하기 때문에 조건이 거짓이라도 최초 한번은 출력을
//           한다.


// let n = 0
// while ( n ) {
//   console.log( n )                     // 0
// }

// @ 위 내용을 Do while문으로 작성하는 법

// let n = 0
// do {
//   console.log( n )                   // 0~3 순서대로 출력
//   n +‎ =  1
//  } while ( n < 4 ) 	



// ** 함수 ( Function ) **

// ** 함수 선언문 ( Declaration ) 

// 설명 : 펑션 키워드로 시작하며, 함수명( 이름 )이 있어야 한다.

// 예시 )
// function hello ( )  { }



// ** 함수 표현식 ( Expression ) 

// 설명 : const나 let 키워드를 통해서 만들어진 어떠한 변수에 할당 연산자를 통해서 함
//           수를 넣어준다.

// 예시 )
// const hello = function ( ) { }

// hello ( )



// ** 호이스팅( Hoisting ) **

// 호이스팅이란 ? : 함수가 선언되어져 있는 해당 코드를 선언된 부분 내에서 유효한 범위
//                            안에서 최상단으로 끌어올려서 동작하는 개념을 말한다.
//            1. 밑에 함수 선언은 자바스크립트를 통해 최상단으로 올라가 동작한다
//            2. 호이스팅은 함수 선언문에서만 발생하고 함수 표현문에서는 발생하지 않는다.
                             


// function hello ( ) {
//        console.log( ‘Hello~’ )
// }

// hello ( )    -> 호출!                          // Hello~



// @위 코드 호이스팅 예시!!


// hello ( )    -> 선언문 상단에 호출!                          // Hello~

// function hello ( ) {
//        console.log( ‘Hello~’ )
// }




// ** 반환 및 종료 **


// function hello ( ) {
//     return ‘Hello~’
// }

//  console.log( ‘Hello~’ )                // Hello~
// console.log( hello )                // hello 함수 자체가 출력( 소괄호 없을 시 ) 
// console.log( hello ( ) )                // return값이 출력 



// ** 예제


// function plus(num) {
//    if ( type num !== ‘number’  ) {
//         console.log( ‘숫자를 입력해주세요!’ )
//           return 0
// }
//   return num + 1
// }

// console.log(plus( 2 ) )                 // 3
// console.log(plus( 7 ) )                 // 8
// console.log(plus(  ) )                    // 숫자를 입력해주세요!
//                                                            0




// ** 매개변수 패턴 ( Parameter pattern ) **

// 기본값(Default value )

// function sum ( a, b ) {             -> sum ( a, b = 1 )  이렇게 기본값 지정 가능!
//       return a + b
// }

// console.log ( sum(1, 2 ) )       // 3
// console.log ( sum( 7 ) )          // NaN (호출된 인수는 1개이고 다음 매개변수값은
//                                                                unedfined로 들어가므로 숫자와 더한 값)
 



// 구조 분해 할당 (Destructuring assignment ) 객체버전


// const user = {
//    name: ‘HEROPY’ , 
//    age: 85 
// }

// function getName ( { name } ) {               -> 매개변수 구조분해할당방법
//    return name
// }
// function getEmail ( { email = ‘이메일이 없습니다!’ } ) {          
//    return email
// }


// console.log(getName ( user ) )                  // HEROPY
// console.log(getEmail ( user ) )                  //  이메일이 없습니다!
//                                                                    ( 만약 email값이 있다면 이메일 출력)




// 구조 분해 할당 (Destructuring assignment ) 배열버전


// const fruits = [ ‘Apple’, ‘Banana’, ‘Cherry’ ]

// function getSecondItem( array ) {
//         return array[ 1 ]
// }

// console.log( getSecondItem( fruits ) )             // Banana



// @ 위 코드 배열 구조 분해 할당 하는 법


// const fruits = [ ‘Apple’, ‘Banana’, ‘Cherry’ ]
// const numbers = [ 1, 2, 3, 4, 5, 6, 7 ]

// function getSecondItem( [ , b ] ) {      -> 리턴 값은 2번째 값을 출력하고 싶기 때문에 b 앞에 쉼표 유지!!
//         return b
// }

// console.log( getSecondItem( fruits ) )                  // Banana
// console.log( getSecondItem( numbers ) )           // 2



// 나머지 매개변수 ( Rest parameter )


// function sum ( …rest ) {
//     console.log( rest )
//     console.log( arguments )
//        return rest.reduce ( function ( acc, cur ) {
//          return acc + cur
//   }, 0 )
// }
// console.log( sum( 1, 2 ) )      
// console.log( sum( 1, 2, 3, 4 ) )      
// console.log( sum( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ) )      // 각 값을 배열 대괄호로 묶여서 출력 된다.


// reduce 메소드 : 옆에 붙어 있는 배열 데이터의 개수만큼 콜백 함수를 실행시켜준다.



// function sum ( …rest ) {
//     console.log( rest )
// }
// console.log( sum( 1, 2 ) )      // 3
// console.log( sum( 1, 2, 3, 4 ) )      // 10
// console.log( sum( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ) )      // 55

// import number from './module.js'

// console.log(number)
// ** 화살표 함수 (Arrow function ) **

// 1. 펑션 키워드를 작성하지 않아도 된다.
// 2. return값을 생략할 수 있다.
// 3. 가운데 중괄호를 생략할 수 있다 ( 상황에 맞춰서 불가능할 수 있다. )
// 4. 화살표 함수는 함수 선언문이 아니고, 함수 표현문으로 분류된다.

// function sum ( )  { }
// const sum = function ( ) { }    -> 기존 함수 선언
// const sum =  ( ) => { }              -> 화살표 함수 선언 ( ES6 2015년도에 새롭게 나온 문법 )
 



// function sum( a, b ) { 
//     return a + b 
// }


// @ 위 코드 화살표 함수 변경 내용


// const sum = ( a, b ) =>  a + b 


// console.log( 1, 2 )                // 3
// console.log( 10, 20 )           // 30



// @ 화살표 함수 패턴 알아보기 


// const a = ( ) => { }

// const w =  x  => { }                 -> 매개변수가 1개일 경우 소괄호 생략 가능

// const r =  ( q, y )  => { }         -> 매개변수가 2개일 경우 소괄호 생략 불가!

// const a = x => x * x                -> 소괄호, 중괄호 둘 다 생략 가능

// const f = x => {
//   console.log( x * x )               -> 이렇게 중괄호 안에 다른 로직을 작성해야 한다면 중괄호 생략 불가
//     return y * y
// }

// const g = ( ) => { return { a: 1 } }  -> 위 코드는 리턴과 중괄호를 생략 후 작성하면 안에 속성값이 객체이기 때문에
// const g = ( ) => ( { a: 1 } )                    속성값에 있는 중괄호를 소괄호로 한번 더 감싸줘야 한다.


// const i = ( ) => { return[ 1, 2, 3 ] }     -> 배열데이터를 작성할 땐 리턴과 중괄호가 아래 코드처럼 생략 가능하다.
// const i = ( ) => [ 1, 2, 3 ]




// ** 즉시 실행 함수 ( IIFE , Immediately - Invoked Function Expression ) **

// 설명 : 즉시 실행이 되는 함수 표현식


// const a = 7

// const double = ( ) => {
//    console.log( a * 2 )
// }

// double ( )                           // 14



// @ 위 코드 즉시실행함수 사용 법

// 1. 즉시실행함수는 별도의 이름 없이 익명 함수로 내용을 만들고 바로 실행이 가능하다.

// const a = 7

// ( ( ) => {
//     console.log( a * 2 )        // 14
// } ) ( )                                    -> 먼저 소괄호 2개를 작성한 후 1번째 소괄호 안에 확인후 실행할 코드를 작성




// @ 즉시실행함수 패턴 알아보기

// 사용법 
// 중괄호 안에 실행하고 싶은 코드를 작성해주면 된다.


// ; ( ( ) => { } ) ( )                            //   ( F ) ( )

// ; ( function ( )  { } ) ( )                //   ( F ) ( )

// ; ( function ( )  { } ( ) )                //   ( F ( ) )

// ;  ! function ( )   { } ( )                 //    ! F ( )

// ;  + function ( )   { } ( )                //   + F ( )




// ;( ( a, b ) => {  
//   console.log( a )                         -> 2번째 소괄호에 새로운 값을 넣어주면 매개변수로 받을 수도 있다.
//   console.log( b ) 
//  } ) ( 1, 2 )                                         // 1, 2 




// ;( ( a, b ) => {  
//   console.log( a )                         -> 윈도우 객체와 도큐먼트 객체로 해석 가능
//   console.log( b ) 
//  } ) ( window, document )






// ** 콜백 ( Callback ) **

// 설명 : 함수가 실행될 때 인수로 들어가는 또 하나의 함수를 콜백이라고 부른다.




// const a =  callback  =>  { 
//     console.log( ‘A’ )
//        callback ( )
// }
// const w =  ( ) =>  { 
//     console.log( ‘W’ )
// }

           
// a ( w )                                 // A, W

// 위 코드 설명 : a 함수 안에 w 함수를 넣어주면 w 함수는 callback 매개변수로 들어가고 callback은 함수이기 때문에
//                      a 함수 내부에 callback ( ) 함수 호출을 해준다. 결과적으로 차례로  콜손로그 A, 콜백함수 W 가 출력
//                       ( callback함수가 먼저 작성되면 그에 맞게 위에서 아래로 순서대로 출력된다. )



// const sum = ( a, b, c ) => {
//    setTimeout ( ( ) => { 
//       c ( a + b )
//    }, 1000 ) 
// }

//  sum ( 1, 2, value => { 
//         console.log( value )          // 3
// } ) 
//  sum ( 3, 7, value => { 
//         console.log( value )          // 10
// } )




// ** 콜백을 사용하여 이미지를 로드해서 출력하는 방법 **


// const loadImage = ( url, cb ) => {
//   const imgEl = document . createElement ( ‘img’ );
//   imgEl . src = url
//   imgEl.addEventListener ( ‘load’ , ( ) => {
//    setTimeout ( ( ) => {
//         cb ( imgEl )   - - - - - - - - - - - - - - > setTimeout( )함수로 이미지 출력을 1 초 뒤 노출
//       }, 1000 )
//    } )
// }

// const containerEl = document.querySelector ( ‘.container’ )
// loadImage ( ‘사용할 이미지 주소 삽입’ , ( imgEl ) => { 
//     containerEl. innerHTML = ‘ ‘
//     containerEl. append ( imgEl )
// } )





// document.createElement 메소드 : 자바스크립트 상에서 이미지 태그를 만들 수 있다.

// load 이벤트 : src 속성에 부여가 되어져 있는 이미지의 주소를 실제로 로드해오는 이벤트이다.

// document.querySelector 메소드 : 실제 html 구조의 사용하는 클래스 요소를 찾아준다.
//                     ( HTML 내부에 태그가 있어야 한다.)






// ** 재귀 ( Recursive ) **

// 설명 : 하나의 함수에서 그 함수 자기 자신을 다시 자신 내부에서 호출하는 방법이다.
//          ( 자기 내부에 또 호출을 하고 있기 때문에 무한 반복 호출이 되므로, 조건 if 문을 사용해야 한다. )



// @ 재귀 if 조건문 예제

// let i = 0
// const a = ( ) => {
//    console.log( ‘A’ )
//  i += 1
// if ( i < 4 ) {
//       a ( )            -> 재귀!( 재호출 )
//    }
// }

// a ( )



// @ 재귀 2번째 예제 ( 반복 )


// const userA = { name: ‘A’, parent: null }
// const userB = { name: ‘B’, parent:  userA }
// const userC = { name: ‘C’, parent:  userB }
// const userD = { name: ‘D’, parent:  userC }

// const getRootUser = user => {
//   if ( user.parent )  {
//      return getRootUser ( user.parent )       -> 재귀!( 재호출 )
//   }
// return user
// }

// console.log( getRootUser ( userD ) )


// 코드 설명 :  코드 내에서 getRootUser 함수 안에 재귀호출이 되어 계속해서 반복하며 parent값으로 인해 점점
//                    userA에 가까워지며 결국 userA는  parent값이 null이므로, 결국 값이 없는 코드로 볼 수가 있다.






// ** 호출 스케줄링 ( Scheduling a function call ) **

// 설명 : 함수에 호출을 지연하거나 혹은 반복적으로 호출할 수 있도록 만들어준다.



// const hello = ( ) => { 
//     console.log( ‘Hello~’ )
// }
// const timeout = setTimeout ( hello, 2000 )           // 2초 후  Hello~  출력
// const h1El = document.querySelector ( ‘h1’ )   -> HTML 내부에 h1태그가 있다고 가정.
// h1El.addEventListener ( ‘ cilck ’ , ( ) => {
//      console.log( ‘Clear!’ )      - - - - - - - - - - ->  클릭 하면 클리어가 출력되고 멈춘다.
//     clearTimeout ( timeout )                    // h1 태그를 클릭하면 2초가 지나도 출력 안됨 || 클릭 안할 시 출력
//  } ) 


// setTimeout ( ) : 지정한 시간 초가 지나면 출력되게 해주는데 시간을 정할 수 있는 함수
 

// clearTimeout ( ) : 지정한 setTimeout( ) 타이머를 해제하여 종료시킨다.


// setInterval ( ) : 지정한 시간으로 일정하게 반복하며 출력시켜주는 함수


// clearInterval ( ) : 지정한 setInterval ( ) 타이머를 해제하여 종료시킨다.






// ** this **
// 설명 
// 1. 일반 함수의 this는 호출 위치에서 정의해준다.
// 2. 화살표 함수의 this는 자신이 선언된 함수 ( 렉시컬 ) 범위에서 정의해준다.
// 3.  this라는 키워드는 현재 가지고 있는 속성이 들어있는 해당 객체 데이터인 것이다.




// @ 일반함수 예제 

// const user = {
// firstName : ‘Heropy’ , 
// lastName : ‘Park’ ,
// age: 85 ,
// getFullName: function ( ) {
//   return `$ { this.firstName }  $ { this.lastName }`        -> 여기서 this는 user 객체 데이터가 되는 것이다.
//   }
// }

// console.log ( user.getFullName ( ) )            // Heropy Park






// function user ( ) {
//   this.firstName = ‘Neo'
//   this.lastName = ‘Anderson’

//    return {
// firstName: ‘Heropy’ , 
// lastName: ‘Park’ ,
// age: 85 ,
// getFullName ( )  {   -> 일반 함수 사용 시 뒤쪽에 있는 콜론기호와 function 키워드를 생략할 수 있다 ! !
//   return `$ { this.firstName }  $ { this.lastName }`        -> 여기서 this는 user 객체 데이터가 되는 것이다.
//      }
//   }
// }

// const u = user ( )
// console.log ( u.getFullName ( ) )            // Heropy Park



// @ 화살표함수 예제 

// function user ( ) {
//   this.firstName = ‘Neo'
//   this.lastName = ‘Anderson’

//    return {
// firstName: ‘Heropy’ , 
// lastName: ‘Park’ ,
// age: 85 ,
// getFullName: ( ) => {
//   return `$ { this.firstName }  $ { this.lastName }`        -> 여기서 this는 user 객체 데이터가 되는 것이다.
//      }
//   }
// }

// const lewis = {
//    firstName: ‘Lewis’ ,
//    lastName: ‘Yang’
// }


// const u = user ( )
// console.log ( u.getFullName ( ) )            // Neo Anderson
// console.log ( u.getFullName.call ( lewis ) )       // Lewis Yang

// ( 일반함수로 만들었을 땐 일반함수에서의 this라는 키워드는 호출위치에 정의되기 때문에 다른 객체를 붙여서 사용가능 )




// @ this 2번째 예제


// const timer = {
//     title: ’ TIMER! ’ ,
//    timeout ( ) {
//          console.log( this.title )
//           setTimeout ( ( ) =>  { 
//              console.log( this.title )                   //  1초 뒤 TIMER!
//      }, 1000)
//    }  
// }
// timer.timout ( )                     //  TIMER!

