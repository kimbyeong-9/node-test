

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

// ** prototype **

// 설명 
// 1. 자바스크립트는 정확하게 클래스 기반 언어가 아니고 프로토타입 기반 언어다.
// 2. prototype은 new 키워드로 만들어진 생성자 함수에서 반환된 결과, 즉 instance에서 쓸  수 있는 별도의 속성이나 메소드를 등록하는 객체를 말한다.


// const fruits = [ ‘Apple’, ‘Banana’, ‘Cherry’ ]

// const fruits = new Array ( ‘Apple’, ‘Banana’, ‘Cherry’ )  ->결과적으로 생성자함수에서 반환된 하나의
//                                                                                                                 instance라고 볼 수 있다.

// console.log( fruits )                                              //  [ ‘Apple’, ‘Banana’, ‘Cherry’ ]
// console.log( fruits.length )                                //  3
// console.log( fruits.includes ( ‘Banana’ ) )    // true
// console.log( fruits.includes ( ‘Orange’ ) )    // false


// includes : 데이터 중에 찾고자 하는 데이터가 있는지 확인 할 수 있는 키워드함수




//  instance : new 키워드로 생성자 함수로서 실행되고 반환이 되는 결과를 instance라고 부른다.



// @ 위 코드 prototype 예제

// Array.prototype.heropy = function ( ) {
//    console.log( this )
//  }


// fruits.heropy ( )                                               //  [ ‘Apple’, ‘Banana’, ‘Cherry’ ]


// const arr = [ ]
// arr.heropy ( )


// -prototype 속성에서 인위적으로 만드는 어떠한 메소드는 기본적으로 펑션 키워드를 일반 함수로 써주면 된다.



// @ prototype 2번째 예제


// const heropy = {
//    firstName: ‘Heropy’ ,
//    lastName: ‘Park’ ,
//    getFullName ( ) { 
//        return ` ${ this. firstName }  ${ this . lastName }` - - - - - - > 프로토타입 메소드
//    } 
// }
// const neo = {
//       firstName: ’Neo’ ,
//       lastName: ‘Anderson’,
//       getFullName ( ) { 
//        return ` ${ this. firstName }  ${ this . lastName }`    - - - - - - > 프로토타입 메소드
//    } 
// }
// console.log( heropy.getFullName ( ) )                                         // Heropy Park
// console.log( heropy.getFullName.call ( neo ) )                        // Neo Anderson




// @ 위 코드 2번째 prototype 타입 변경


// function User ( first, last ) {
//     this.firstName = first
//     this.lastName = last
// }
// User.prototype. getFullName = function ( ) { 
//    return ` ${ this. firstName }  ${ this . lastName }`  - - - - - - > 프로토타입 메소드
// }


// const heropy = new User ( ‘ Heropy ‘, ‘Park’ )
// const heropy = new User ( ‘ Neo ‘, ‘Anderson’ )

// console.log( heropy )                                      //  해당 객체 데이터 새로 생성 후 출력
// console.log( neo )                                             //  해당 객체 데이터 새로 생성 후 출력
// console.log( heropy.getFullName ( ) )        //  Heropy Park
// console.log( neo.getFullName ( ) )              //  Neo Anderson






// ** ES6 Classes **

// 설명 : 2015년도에 새롭게 나온 자바스크립트 문법으로 클래스 방식이며 일반적으로 많이 쓰인다. 
//            프로토타입과 기능이 비슷하다.



// @ prototype 문법

// function User ( first, last ) {        -> User는 대문자로 시작하는 파스칼케이스라고 한다.
//          this.firstName = first
//          this.lastName = last
// }
// User .prototype. getFullName = function ( ) { 
//           reutrn ` ${ this.firstName }  ${ this.lastName } `   - - - - - - > 프로토타입 메소드
// }


// const heropy = new User ( ‘Heropy’ , ‘Park’ )
// const neo = new User ( ‘Neo’ , ‘Anderson’ )

// console.log( heropy.getFullName ( ) )                   //  Heropy Park
// console.log( neo.getFullName ( ) )                         //   Neo Anderson
    


// @ 위 코드 class 문법으로 작성


// class User {  
//   constructor ( first, last ) {            -> constructor 부분은 위에 작성한 함수 부분과 동일
//          this.firstName = first
//          this.lastName = last
//    }
//   getFullName ( ) { 
//       reutrn ` ${ this.firstName }  ${ this.lastName } `   - - - - - - > 프로토타입 메소드
//    }
// }


// const heropy = new User ( ‘Heropy’ , ‘Park’ )
// const neo = new User ( ‘Neo’ , ‘Anderson’ )

// console.log( heropy.getFullName ( ) )                   //  Heropy Park
// console.log( neo.getFullName ( ) )                         //   Neo Anderson





// ** Getter , Setter **

// Getter : 어떤 값을 얻는 용도의 메소드 ( 속성에 붙이지 않고 함수테이터 즉 메소드에 붙여서 사용해야 한다. )
//        = 값을 조회 할 때 사용하는 메소드

// Setter : 어떤 값을 지정하는 용도의 메소드
//        = 값을 할당 할 때 사용하는 메소드

// class User {
//      constructor ( first , last ) {
//         this.firstName = first
//         this.lastName = last
//    }
//   get fullName  ( ) {                    - - - - - - - - - - - - - - - - - - > get 키워드 사용 !
//        return ` ${ this.firstName } ${ this.lastName } `
//   }
//   set fullName ( value ) {         - - - - - - - - - - - - - - - - - - > set 키워드 사용 !
//      console.log( value )
//      ; [  this.firstName, thislastName  ] = value.split ( ‘ ‘ )    - - - - > split 메소드 호출 
//    }
// }

// const heropy = new User ( ‘Heropy’ , ‘Park’ )

// console.log ( heropy.fullName ( ) )                       //  Heropy Park

// heropy.firstName = ’Neo’

// console.log ( heropy.fullName ( )  )                       //  Neo Park


// heropy.fullName = ‘ Neo Anderson ’      - - - - - > set 키워드를 지정해준 후 호출한다.    // Neo Anderson
// console.log( heropy )              // Neo Anderson


// split : 한 문장에서 띄어쓰기가 된 부분을 각 나눠서 배열데이터로 출력 시킬 수 있는 메소드이다.







// ** 정적 메소드 ( Static methods ) **
//   (보조 함수)

// Arrary.isArray ( )  : 인수로 들어온 데이터가 배열데이터인지 아닌지 확인 후 불린데이터를 반환 해주는 메소드

// 예시 )

// Arrary.isArray ( [ 1, 2, 3 ] )    //  true

// Arrary.isArray ( ‘ abc ‘ )    //  false





// @ 정적 메소드 코드 예시 )


// class User {
//   constructor ( first , last ) {
//         this.firstName = first
//         this.lastName = last
//    }
// getFullName ( ) {
//     return. ` ${ this.firstName } ${ this.lastName } `
//   }
// static isUser ( user ) {                 - - - > 정적 메소드
//      if ( user.firstName && user.lastName ) { 
//           return true
//     }
//   }
// }

// const heropy = new User ( ‘Heropy’ , ‘Park’ )
// const neo = new User ( ‘Neo’ , ‘Anderson’ )
// const lewis = {
//         name: ‘Lewis Tang’ ,
//         age: 85
// }


// console.log( heropy.getFullName ( ) )             // Heropy Park
// console.log( neo.getFullName ( ) )                   // Neo Anderson
// console.log( User.isUser ( heropy ) )                             // true
// console.log( User.isUser ( neo ) )                                   // true
// console.log( User.isUser ( lewis ) )                                // false






// ** 상속 Inheritance **



// instanceof : 해당 키워드 앞쪽에 있는 데이터가 키워드 뒤쪽에 있는 클래스에서 인스턴스로 생성되있는지 확인여부

//           ( 예시 : console.log( bicycle instanceof Bicycle )   )

// ** 운송수단


// class Vehicle {
//   constructor ( acceleration = 1 ) {
//     this.speed = 0
//     this.acceleration = acceleration
//   }
// accelerate ( ) { 
//     this.speed += this.acceleration
//   }
// decelerate ( ) { 
//     if ( this.speed <= 0 ) { 
//     console.og( ‘정지!’ )
//       return
//     }
//     this.speed -= this.acceleration
//   }
// }

// extends : 만들어준 클래스 전체 속성을 다른 클래스로 상속하여 사용하려하여 연결하여 쓸 수 있다.



// ** 자전거


// class Bicycle extends Vehicle {      - - - - - - - - - ->  운송수단을 상속하여 연결
//    constructor ( price = 100, acceleration ) {
//        super ( acceleration )
//        this.price = price
//        this.wheel = 2
//    } 
// }

// const bicycle = new Bicycle ( 300 )
// bicycle.accelerate ( )
// bicycle.accelerate ( )
// console.log( bicycle )   - - - - - - - - ->   //   acceleration : 1
//                                                                                   speed : 0
//                                                                                   price : 300
//                                                                                   wheel : 2
 


// ** 자동차



// class Car extends Bicycle {      - - - - - - - - - ->  자전거를 상속하여 연결
//    constructor ( license, price, acceleration ) {
//        super ( price, acceleration )
//        this.license = license
//        this.wheel = 4
//    } 
// accelerate ( ) {
//      if ( !this.license ) { 
//          console.error ( ‘무면허!’ )
//         return
//      }
//     this.speed += this.acceleration
//     Console.log( ‘가속!’ , this.speed )
//   }
// }

// const carA = new Car( true, 7000, 10 )
// const carB = new Car( false, 4000, 6 )
// carA.accelerate ( )
// carA.accelerate ( )
// console.log( carA )                            - ->      //acceleration: 10, license: true,
// console.log( carB )                                            price: 7000, speed: 0, wheel: 4

// //acceleration: 6, license: false,
//   price: 4000, speed: 0, wheel: 4



// ** 보트

// class Boat extends Vehicle {
//   constructor ( price , acceleration ) { 
//        super ( acceleration )
//        this.price = price
//        this.moter = 1
//    }
// }


// const boat = new Boat ( 1000, 5 )
// console.log( boat )                             // acceleration: 5, moter: 1, price: 10000, speed: 0






// ** 상속 instanceof 축소버전 **

// @ 기본적인 상속 코드

// super ( ) : extends 통하여 상속 코드를 만들 때 무조건 super ( )를 사용하여 호출을 해줘야 한다.

// instanceof : 해당 키워드 앞쪽에 있는 데이터가 키워드 뒤쪽에 있는 클래스에서 인스턴스로 생성되있는지 확인여부

//           ( 예시 : console.log( bicycle instanceof Bicycle )   )


// extends : 만들어준 클래스 전체 속성을 다른 클래스로 상속하여 사용하려하여 연결하여 쓸 수 있다.

// 예시 )

// class A {
//    constructor ( ) { }
// }
// class B extends A {
//    constructor ( ) { }
//        super ( )
// }
// class C extends B {
//    constructor ( ) { }
//        super ( )
// }

// const a = new A ( )               
// const a = new B ( )              
// const a = new C ( ) 


// console.log ( a instanceof A )           //  true    -> a가 A의 인스턴스인지 확인하는 방법 !
// console.log ( a instanceof B )           //  false   -> a는 A의 인스턴스이기 때문에 자식 B와는 상관이 없다 
// console.log ( a instanceof C )           //  false   -> a는 A의 인스턴스이기 때문에 자식 C와도 상관이 없다 


// console.log ( b instanceof A )           //  true     -> b 는 B의 인스턴스지만 B 가 A에게 상속받아서 true
// console.log ( b instanceof B )           //  true     -> b 는 B의 인스턴스
// console.log ( b instanceof C )           //  false   -> b 는 B의 인스턴스이기 때문에 자식 C와 상관이 없다

// ** constructor **

// 설명 : 클래스를 만들 때 컨스트럭터 함수를 만들 때 사용하는 이름

// console. log ( c. constructor === A )           //  false   이유 : 해당 데이터는 A 내부에 데이터가 아니기 때문
// console. log ( c. constructor === B )           //  false   이유 : 해당 데이터는 B 내부에 데이터가 아니기 때문
// console. log ( c. constructor === C )           //  true    이유 : 해당 데이터는 C 내부에 존재한다.


// const fruits = [ ‘Apple’ , ‘Banana’ ]
// const fruits = new Array ( ‘Apple’ , ‘Banana’ )


// console.log( fruits. constructor === Array )    // true
// console.log( fruits. Instanceof Array )    // true

// 표준 내장 객체 ( 숫자 및 수학 )





// 숫자

// ** .toFixed ( ) **

// 설명 : 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환합니다.


// const num = 3.1415926535

// console.log( num.toFixed ( 2 ) )                                    // 3.14   문자데이터
// console.log( parseFloat ( num.toFixed ( 2 ) ) )        // 3.14   숫자데이터



// parseFloat ( ) : .toFixed ( ) 함수를 사용하게 되면 출력할 때 문자로 반환된 데이터를 숫자 데이터로 바꿔주는 메소드



 



// ** .toLocaleString ( ) **


// 설명 : 숫자를 현지 언어 형식의 문자로 반환한다.



// const num = 1000000

// console.log( num.toLocaleString(  ) )                                    //  1,000,000
// console.log( ` $ { num.toLocaleString(  ) } 원` )                  //  1,000,000원  

// # 단위를 적을 시 백틱기호 내부에 호출할 데이터를 작성하고 바로 뒤에 단위를 적을 수 있다.





// ** Number.isInteger ( ) **


// 설명 : 숫자가 정수 ( integer )인지 확인할 수 있다.
//          앞에 클래스 필수



// const num = 123
// const pi = 3.14

// console.log( Number.isInteger( num ) )                  //  true
// console.log( Number.isInteger( pi ) )                       //  false  
 

// # 메소드 앞에 클래스가 붙어있으면 정적메소드로 위 메소드는 넘버클래스 뒤에 붙여서 사용할 수 있다.





// ** Number.isNaN ( ) **

// 설명 : 주어진 값이 Not a Number 인지 확인하는 메소드이다.
//          앞에 클래스 필수


// const num 1 = NaN
// const num 2 = 123
// const str  = ‘Hello world’
// const url  = null

// console.log( Number.isNaN( num 1 ) )                   //  true
// console.log( Number.isNaN( num 2 ) )                  //  false 
// console.log( Number.isNaN( str ) )                        //  false 
// console.log( Number.isNaN( url ) )                        //  false 


// # 메소드 앞에 클래스가 붙어있으면 정적메소드로 위 메소드는 넘버클래스 뒤에 붙여서 사용할 수 있다.





// ** Number.parseInt ( ) 또는 parseInt ( ) **

// 설명 : 주어진 값( 숫자, 문자 )을 파싱( 분석 )해 특정 진수( radix )의 정수로 반환해준다. ( 모든 소수점 없이 출력 )
//            앞에 클래스를 붙이지 않고 전역함수로도 사용 가능

// parse : 분석하다
// Int : 정수( 약어 )


// const str = ‘3.1415926535’
// const num = 3.1415926535


// console.log( Number.parseInt ( str, 10 ) )           // 3         -> str의 데이터를 10진수로 만들어준다.
// console.log( Number.parseInt ( num, 10 ) )        // 3         -> num의 데이터를 10진수로 만들어준다.
//              ( Number 클래스가 없이 parseInt 함수만 만들어도 똑같다. )




// ** Number.parseFloat ( ) 또는 parseFloat ( ) **


// 설명 : 주어진 값( 숫자, 문자 )을 파싱( 분석 )해 부동소수점을 실수로 반환(숫자)한다. ( 소수점 모두 반환 )
//            앞에 클래스를 붙이지 않고 전역함수로도 사용 가능



// const str = ‘3.1415926535’
// const num = 3.1415926535


// console.log( Number.parseInt ( str ) )           // 3.1415926535         ->진수 표시 없이 데이터만 작성
// console.log( Number.parseInt ( num ) )        // 3.1415926535\
//              ( Number 클래스가 없이 parseInt 함수만 만들어도 똑같다. )







// 수학


// ** Math.abs ( ) **

// Math : 수학적인 상수와 함수를 위한 속성 메소드를 가진 내장 객체이다.


// 설명 : 주어진 숫자의 절댓값을 반환해준다.



// console.log( Math.abs ( 2 ) )                   // 2
// console.log( Math.abs ( -2 ) )                   // 2




// ** Math.ceil ( ) **

// 설명 : 주어진 숫자를 올림하여 정수를 반환해준다.



// console. log( Math. ceil ( 3.1415926535 ) )                   // 4







// ** Math.floor ( ) **

// 설명 : 주어진 숫자를 내림하여 정수를 반환해준다.



// console. log( Math. floor ( 3.1415926535 ) )                   // 3





// ** Math.max ( ) **

// 설명 : 주어진 숫자 중 음수를 포함하여 가장 큰 숫자를 반환해준다.



// console. log( Math. max ( 1, 22, 38, 192 ) )                   // 192





// ** Math.min ( ) **

// 설명 : 주어진 숫자 중 음수를 포함하여 가장 작은 숫자를 반환해준다.



// console. log( Math. min ( 1, 22, 38, 192 ) )                   // 1







// ** Math.pow ( ) **

// 설명 : 주어진 숫자의 거듭제곱한 값을 반환해준다.

// pow : 거듭제곱


// console. log( Math. pow ( 4, 2 ) )                   // 16                    4 * 4
// console. log( Math. pow ( 7, 2 ) )                   // 49                    7 * 7
// console. log( Math. pow ( 10, 3 ) )                   // 1000              10 * 10 = 100 _  100 * 10 = 1000






// ** Math.random ( ) **

// 설명 : 랜덤으로 숫자 0 이상, 1 미만의 난수를 반환해준다.



// console. log( Math. random ( ) )                   // 0 과 1 사이의 소수점 결과 출력


// @ 특정 범위의 랜덤 정수를 얻는 함수

// function random ( min = 0, max = 10 ) {           - - - - - - - - - - -> 0 부터 10 까지를 기준으로 잡아준다.
//       return Math.floor ( Math.random ( ) * ( max - min ) ) + min
// }

// console.log( random ( ) )                                  // 0과 10 사이의 랜덤 숫자 출력
// console.log( random ( 11, 20 ) )                       // 11과 20 사이의 랜덤 숫자 출력
// console.log( random ( 101, 999 ) )                  // 101과 999 사이의 랜덤 숫자 출력





// ** Math.round ( ) **

// 설명 : 주어진 숫자를 반올림해서 정수를 반환해준다.


// const num 1 = 3.141
// const num 2 = 3.768



// console. log( Math. Sound ( num 1 ) )                   // 3
// console. log( Math. Sound ( num 2 ) )                   // 4




// 표준 내장 객체 ( 배열과 객체 )



// ** .length **

// 설명 : 배열의 길이(숫자)를 반환해준다.



// const arr = [ ‘A’ , ‘B’ , ‘C’ ]


// console.log( arr.length )                                 // 3


// ** .at ( ) **

// 설명 : 해당 대상 배열을 인덱싱해준다.  ( 음수 값을 사용하면 뒤에서부터 인덱싱합니다. )


// const arr = [ ‘A’ , ‘B’ , ‘C’ ]


// console.log( arr [ 0 ] )                                 // A
// console.log( arr.st ( 0 ) )                            // A

// console.log( arr [ arr.length -1  ] )          // C
// console.log( arr.at ( -2 ) )                          // B    

// ( 위 콜손코드처럼 작성할 내용이 많다면 .at 을 사용하면 유용하다 )




// ** .concat ( ) **

// 설명 : 해당 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환해준다.


// const arr 1 = [ ‘A’ , ‘B’ , ‘C’ ]
// const arr 2 = [ ‘D’ , ‘E’ , ‘F’ ]
// const arr 3 = arr1.concat ( arr2 )   -> 대상배열.concat ( 주어진 배열 )
// const arr 4 = [ …arr1, …arr2 ]
// const arr 5 = [ …[ ‘A’ , ‘B’ , ‘C’ ], …[ ‘D’ , ‘E’ , ‘F’ ] ]


// console.log( arr 1 )                                  // [ ‘A’ , ‘B’ , ‘C’ ]
// console.log( arr 2 )                                  // [ ‘D’ , ‘E’ , ‘F’ ]
// console.log( arr 3 )                                  // [ ‘A’ , ‘B’ , ‘C’ , ‘D’ , ‘E’ , ‘F’ ]
// console.log( arr 4 )                                  // [ ‘A’ , ‘B’ , ‘C’ , ‘D’ , ‘E’ , ‘F’ ]
// console.log( arr 5 )                                  // [ ‘A’ , ‘B’ , ‘C’ , ‘D’ , ‘E’ , ‘F’ ]




// ** .every ( ) **

// 설명 : 해당 대상 배열의 모든 요소가 콜백 테스트에서 참( Truthy )을 반환하는지 확인해준다.


// const arr = [ 1, 2, 3, 4 ]
// const isValid = arr. every ( item => item < 5 )

// console.log( isValid )                  // true


// . every ( ) 메소드 : 데이터 모두가 참 데이터를 반환되는지 확인해준다 ( 하나라도 거짓일 시 false값이 나온다. )





// ** .fillter ( ) **

// 설명 : 주어진 콜백 테스트를 통과 ( 참 ( Truthy )을 반환 )하는 모든 요소를 새로운 배열로 반환합니다.
//         모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환해준다.

// const numbers = [ 1, 20, 7, 9, 104, 0, 58 ]
// const filteredNumbers = numbers. fillter ( number => number < 30 )

// console.log( filteredNumbers )                  // [ 1, 20, 7, 9, 0 ]



// @ .fillter( ) 2번째 예제


// const user =  [
//     { name: ’Neo’ , age: 85 },
//     { name: ’Amy’ , age: 22 },
//     { name: ’Lewis’ , age: 11 }
// ]
// const adults = users.fillter (user => user.age >=19 ) 
// console.log( adults )                      // [ { name: ’Neo’ , age: 85 }, { name: ’Amy’ , age: 22 } ]






// ** .find ( ) **

// 설명 : 대상 배열에서 콜백 테스트를 통과하는 첫 번째만 요소를 반환해준다.

// const arr = [ 5, 8, 130, 12, 44 ]
// const foundItem = arr. find ( item => item < 10 )

// console.log( foundItem )                  // [ 130 ]



// @ .find ( ) 2번째 예제


// const users = [ 
// { name: ’Neo’, age: 85 },
// { name: ’Amy’, age: 22 },
// { name: ’Lewis’, age: 11 }
// ]
// const foundUser = users. find ( user => user. name === ‘Amy’ )

// console.log( foundUser )                  // { name: ’Neo’, age: 85 }





// ** .findIndex ( ) **

// 설명 : 대상 배열에서 콜백 테스트를 통과하는 첫 번째만 요소의 인덱스를 반환해준다.

// const arr = [ 5, 8, 130, 12, 44 ]
// const index = arr. findIndex ( item => item > 10 )

// console.log( index )                  // [ 2 ]






// ** .flat ( ) **

// 설명 : 대상 배열의 모든 하위 배열을 지정한 깊이( Depth )까지 이어붙인 새로운 배열을 생성해준다.
//           ( 깊이의 기본값은 1이다)

// const arr = [ 1, 2, [ 3, 4, [ 5, 6 ] ] ]

// console.log( arr.flat ( ) )                  // [ 1, 2, 3, 4, Array(2) ]
// console.log( arr )                               // [ 1, 2, Array(3) ]
// console.log( arr.flat( 2 ) )               // [ 1, 2, 3, 4, 5, 6 ]
// console.log( arr.flat( Infinity ) )               // [ 1, 2, 3, 4, 5, 6 ]

// @ 기본값이 1 이므로 배열안에 또 다른 배열을 한 배열로 출력하고 싶다면 인수로 하위 배열 개수만큼의 숫자를 적어준다.


// Infinity : 무한이라는 의미로, 하위 배열의 개념 상관없이 한 배열로 묶어서 반환해주는 메소드이다.






// ** .forEach ( ) **

// 설명 : 대상 배열의 길이만큼 주어진 콜백을 실행해준다.
//            작성하기는 편리하지만 반복을 종료시킬 수 없다.
//           ( 깊이의 기본값은 1이다)


// const arr = [ ‘A’ , ‘B’ , ‘C’  ]

// arr.forEach ( item => console.log( item )       // A, B, C 


// for ( let i = 0; i < arr.length; i += 1 ) {
// console.log( arr[ i ] )               // A, B, C 







// ** .includes ( ) **

// 설명 : 대상 배열이 특정 요소를 포함하고 있는지 확인해준다.


// const arr = [ 1, 2, 3 ]

// console.log( arr.includes ( 7 ) )     // false
// console.log( arr.includes ( 2 ) )     // true



// @ .includes ( ) 2번째 예제

// const fruits = [ ‘Apple’ , ‘Banana’ , ‘Cherry’ ]

// console.log( fruits.includes ( ‘Apple’ ) )      // true
// console.log( fruits.includes ( ‘cherry’ ) )     // false    -> 첫 알파벳이 소문자 즉, 대문자와 소문자는 다르다.



// @ .includes ( ) 3번째 예제


// const users = [ 
//     { name: ’Neo’ , age: 85 },
//     { name: ’Amy’ , age: 22 },
//     { name: ’Lewis’ , age: 11 }
// ]
// console.log( users.includes ( { name: ’Neo’ , age: 85 } ) )    // flase 
//                                                                             ( users안에 객체메모리 주소와 콘솔 안에 주소가 다르게 나온다 ) 
//                                                                                          *참조형 영항


// const neo = users [ 0 ]
// console.log( users.includes( neo ) )           // true ( users 내부에 메모리 주소를 가져와 neo에 할당 )



// 참조형 : 데이터 생김새가 똑같아도 서로 충분히 다른 데이터일 수 있는 특징이 있다.
//                 ( 보기 : 객체데이터, 배열데이터, 함수데이터 ) 





// ** .join ( ) **

// 설명 : 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환해준다.


// const arr = [ ‘Apple’ , ‘Banana’ , ‘Cherry’ ]

// console.log( arr.join ( ‘,’ ) )       // Apple,Banana,Cherry
// console.log( arr.join ( ‘,  ‘ ) )     // Apple, Banana, Cherry   띄어쓰기도 적용
// console.log( arr.join ( ‘ / ‘ ) )     // Apple/Banana/Cherry




// ** .map ( ) **

// 설명 : 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환해준다.


// const numbers = [ 1, 2, 3, 4 ]
// const newNumbers = numbers.map ( item => item * 2 )


// console.log( newNumbers )       // [ 2, 4, 6, 8 ]
// console.log( numbers )               // [ 1, 2, 3, 4 ]



// @ .map ( ) 2번째 예제


// const users = [
//    { name: ’Neo’ , age: 85 },
//    { name: ’Amy’ , age: 22 },
//    { name: ’Lewis’ , age: 11 }
// ]
// const newUsers = users.map ( user => {
//    retrun {
//       …user,  - - - - - - - - > name과 age를 나타냄
//       isValid: true,     - - - > 기본 데이터에 추가
//       email: null    - - - - - > 기본 데이터에 추가
//     }
// } )

// console.log ( newUsers )                 //  0: { name: ’Neo’ , age: 85, isValid: true, email: null }
//                                                                   1: { name: ’Amy’ , age: 22, isValid: true, email: null }
//                                                                   2: { name: ’Lewis’ , age: 11, isValid: true, email: null }





// ** .pop ( ) **

// 설명 : 대상 배열에서 마지막 요소를 제거하고 제거한 요소를 반환해준다.
//           대상 배열 원본이 변경된다

// const fruits = [ ‘Apple’ , ‘Banana’ , ‘Cherry’ ]


// console.log( fruits.pop( ) )       //  Cherry 
// console.log( fruits )                   // [ ‘Apple’ , ‘Banana’ ] -> 체리 제거 후 반환





// ** .push ( ) **

// 설명 : 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환해준다.
//           대상 배열 원본이 변경된다

// const fruits = [ ‘Apple’ , ‘Banana’ , ‘Cherry’ ]

// const newLength = fruits.push ( ‘Orange’ )
// console.log( newLength )                           //4
// console.log( fruits )                                     // [ ‘Apple’ , ‘Banana’ , ‘Cherry’ , ‘Orange’ ]  
 
// fruits.push ( ‘Mango’ , ’Strawberry’ ) 
// console.log( fruits )                        // [ ‘Apple’ , ‘Banana’ , ‘Cherry’ , ‘Orange’, ’Mango’ , ’Strawberry’ ]  
  




// ** .reduce ( ) **

// 설명 : 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환해준다.
//           각 콜백의 반환 값은 다음 콜백으로 전달된다.

// const numbers = [ 1, 2, 3 ]
// const sum = numbers. reduce ( ( acc, cur ) => acc + cur, 0 )          -> 초기값
//                                                                             -> 0+1 =1, 1+2=3, 3+3=6
// console.log( sum )                            // 6



// accumulator ( acc ) : 누적되는 값

// currentValue ( cur ) : 반복되는 각각의 배열 아이템




// @ .reduce ( ) 2번째 예제

// const users = [
//     { name: ’Neo’ , age: 85 },
//     { name: ’Amy’ , age: 22 },
//     { name: ’Lewis’ , age: 11 }
// ]

// # 총 나이 계산

// const totalAge = users.reduce ( ( acc, cur ) => acc + cur.age, 0 ) 

// console.log( totalAge )                       // 118
// console.log( ` 평균나이: $ { ( totalAge / users.length ) . toFixed ( 1 ) ) } 세 ` )   // 평균나이: 39.3세


// # 모든 이름 추출

// const names = users
// . reduce ( ( acc, cur ) => {
//       acc.push ( cur.name )
//       retrurn acc
// }, [ ] )
// .join ( ‘ ,   ’ )

// console.log( names )                              // Neo, Amy, Lewis




// ** .reverse ( ) **

// 설명 : 대상 배열의 순서를 반전한다
//          ( 대상 배열 원본이 변경됩니다 )

// const arr = [ 'A' , ‘B’ , ‘C’ ]
// const reversed = arr.reverse ( )

// console.log( reversed )                  // [ ‘C’ , ‘B’ , ‘A’ ]
// console.log( arr )                            // [ ‘C’ , ‘B’ , ‘A’ ]  -> reverse 한 후 결과가 변경된 데이터값으로 유지된다.





// ** .shift ( ) **

// 설명 : 대상 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다.
//          ( 대상 배열 원본이 변경됩니다 )

// const arr = [ 'A' , ‘B’ , ‘C’ ]
// const reversed = arr. reverse ( )

// console.log( arr.shift )                  // [ A ]
// console.log( arr )                           // [ ‘B’ , ‘C’ ]


// ** .slice ( ) **

// 설명 : 대상 배열의 일부를 추출해 새로운 배열을 반환합니다.
//            두번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 배열의 끝까지 추출합니다.

// const arr = [ 'A' , ‘B’ , ‘C’ , ‘D’ , ‘E’ , ‘F’ , ‘G’ ]
// const reversed = arr. reverse ( )

// console.log( arr.slice ( 0, 3 ) )                          // [ 'A' , ‘B’ , ‘C’ ]
// console.log( arr.slice ( 4, -1 ) )                         // [ ‘E’ , ‘F’ ]
// console.log( arr.slice ( 4 ) )                               // [ ‘E’, ‘F’, ‘G’ ]
// console.log( arr )                                                 // [ 'A' , ‘B’ , ‘C’ , ‘D’ , ‘E’ , ‘F’ , ‘G’ ]





// ** .some ( ) **

// 설명 : 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인합니다.


// const arr = [ 1, 2, 3, 4 ]
// const isValid = arr.some ( item => item > 3  )

// console.log( isValid )                          // true






// ** .sort ( ) **

// 설명 : 대상 배열을 콜백의 반환 값( 음수, 양수, 0 )에 따라 정렬해준다.
//           콜백을 제공하지 않으면, 요소를 문자열로 반환하고 유니코드 코드 포인트 순서로 정렬해준다.
//            ( 대상 배열의 원본이 변경됩니다. )
 

// const numbers = [ 4, 17, 2, 103, 3, 1, 0 ]

// numbers.sort ( )
// console.log( numbers )                          // [ 0, 1, 103, 17, 2, 3, 4 ]

// numbers.sort ( ( a, b ) => a - b )
// console.log( numbers )                          // [ 0, 1, 2, 3, 4, 17, 103 ]

// numbers.sort ( ( a, b ) => b - a )
// console.log( numbers )                          // [ 103, 17, 4, 3, 2, 1, 0 ]




// @ .sort ( ) 2번째 예제


// const users = [
//   { name: ’Neo’ , age: 85 },
//   { name: ’Amy’ , age: 22 },
//   { name: ’Lewis’ , age: 11 }
// ]

// users.sort ( ( a, b ) => a.age - b.age )
// console.log ( users )                                 // 나이가 적은 순부터 정렬된다.

// ( 매개변수를 순서대로 빼기 연산자를 통해 계산하게 되면 숫자가 더 작은 대상부터먼저 정렬이 된다. )


// users.sort ( ( a, b ) => b.age - a.age )
// console.log ( users )                                 // b로 시작하면 나이가 큰 순서로 정렬된다.

// ( 매개변수를 순서대로 빼기 연산자를 통해 계산하게 되면 숫자가 더 작은 대상부터먼저 정렬이 된다. )





// ** .splice ( ) **

// 설명 : 대상 배열에 요소를 추가하거나 삭제하거나 교체해준다.
//           ( 대상 배열의 원본이 변경됩니다. )


// const arr = [ 'A' , ‘B’ , ‘C’ ]
// arr.splice ( 2, 0, ‘X’ )

// console.log( arr )                          //  [ 'A' , ‘B’ , ’X’ , ‘C’ ]


// const arr = [ 'A' , ‘B’ , ‘C’ ]
// arr.splice ( 1, 1 )

// console.log( arr )                          //  [ 'A' , ‘C’ ]


// const arr = [ 'A' , ‘B’ , ‘C’ ]
// arr.splice ( 1, 2 )

// console.log( arr )                          //  [ 'A' ]



// 1. 첫 번째 인수는 추가, 삭제, 교체하고자 하는 인덱스 번호이다.
// 2. 두 번째 인수는 원하는 곳부터 아이템을 삭제하고자 하는 갯수이다.
// 3. 세 번째 인수는 그 삭제한 자리에 추가 할 내용을 적을 수 있다.




// ** .unshift ( ) **

// 설명 : 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환합니다.
//           ( 대상 배열의 원본이 변경됩니다. )


// const arr = [ 'A' , ‘B’ , ‘C’ ]


// console.log( arr.unshift ( ‘X’ ) )           //  4     -> 길이를 반환
// console.log( arr )                                    //  [ ’X’ , 'A' , ‘B’ , ‘C’ ]






// ** Array.from ( ) **

// 설명 : 유사 배열 ( Array - like )을 실제 배열로 반환해준다.
//          1.  배열과 유사하게 작성한 객체 데이터를 유사배열이라고 부른다 
//          2. 사용 시 length 값을 꼭 넣어줘야한다.




// const arraylike = {
//    0: ‘A’ ,
//    1: ‘B’ ,
//    2: ‘C’ ,
//    length: 3       -> 유사 배열을 사용할 때에는 랭스 속성을 꼭 같이 사용해야한다.
// }


// console.log( arraylike. constructor === Array )                               //  false    
// console.log( arraylike. constructor === Object )                                // true


// arraylike.forEach ( item => console.log( item ))
// -> forEach는 객체 데이터에서 사용하는 메소드가 아니기 때문에 언디파운드 값이 나온다.

// Array.from( arraylike ).forEach( item => console.log( item ) )        // A B C
// -> Array.from 을 사용해 객체데이터를 배열데이터로 바꿔주고 사용하면 출력 잘 됨





// ** Array.isArray ( ) **

// 설명 : 배열 데이터인지 확인합니다.



// const array = [ ‘A’ , ‘B’ , ‘C’ ]
// const arraylike = {
//      0: ‘A’,
//      1: ‘B’,
//      2: ‘C’,
//      length: 3
// }


// console.log( Array.isArray ( array ) )                // true      
// console.log( Array.isArray ( arraylike ) )          // flase    -> 객체 데이터이기 때문







// ** Object.assign ( ) **

// 설명 : 하나 이상의 출처( Source ) 객체로부터 대상( Target ) 객체로 속성을 복사하고 대상 객체를 반환해준다.



// const target = { a: 1, b: 2 }
// const source1 = { b: 3, c: 4 }
// const source2 = { c: 5, d: 6 }
// const result = Objeact.assign ( target, source1, source2 )
// const result = {
// …target ,
// …source1 ,
// …source2 
// }    -> 전개 연산자도 가능



// console.log( target )                // { a: 1, b: 3, c: 5, d: 6 }    -> 같은 속성은 나중의 값이 순서대로 덮어쓰여 출력

// console.log( result )                 // { a: 1, b: 3, c: 5, d: 6 }  



// @ 객체 데이터를 수정하지 않고 새로운 객체 데이터를 반환하도록 만드는 법 

// const result = Objeact.assign ( {}, target, source1, source2 )  -> 오브젝.어싸인의 첫 인수로 { } 작성






// ** Object.entries ( ) **

// 설명 : 주어진 객체의 각 속성과 값으로 하나의 배열 만들어 요소로 추가한 2차원 배열을 반환해준다.
//      하나의 객체데이터를 취급할 때 그 객체 데이터가 가지고 있는 속성이나 값을 모두 활용할 때 유용하다.


// const user = {
//    name: ‘Heropy’ ,
//    age: 85 , 
//    isValid: true , 
//    email: ‘asdasdasd@gmail.com’
// }
 
// console.log( Object.entries ( user ) )                          // 배열데이터 안에 속성과 값을 각각의 배열데이터로 출력                                                                                     ( 그것을 2차원 배열이라고 말한다. )

 
// for ( const [ key, value ] of Object.entries ( user ) ) {
//      console.log( key, value )                                             // 각각의 배열 아이템을 구조분해할당을 통해서 첫 
// }                                                                                               번째는 속성, 두번째는 값으로 출력







// ** Object.keys ( ) **

// 설명 : 주어진 객체의 각 속성 이름을 나열한 배열을 반환해준다.


// const user = {
//    name: ‘Heropy’ ,
//    age: 85 , 
//    isValid: true , 
//    email: ‘asdasdasd@gmail.com’
// }

// console.log ( Object.keys ( user ) )     // 모든 속성 이름이 배열 하나로 출력
 

// Object.keys 안에 key는 각각의 속성들을 의미한다.






// ** Object.values ( ) **

// 설명 : 주어진 객체의 속성 값을 나열한 배열을 반복해준다.


// const user = {
//    name: ‘Heropy’ ,
//    age: 85 , 
//    isValid: true , 
//    email: ‘asdasdasd@gmail.com’
// }

// console.log ( Object.vlaue ( user ) )     // 모든 속성 각각 값이 출력!
 


// 속성, 값 모두 반환 할 시 Object.entries 데이터값만 반환할 시 Object.vlaue




// ** JSON ( Javascript Object Notation ) **

// 설명
// 1. 데이터 전달을 위한 표준 포맷
// 2. 문자, 숫자, 불린, Null, 객체, 배열만 사용
// 3. 문자는 큰 따옴표만 사용하여 굳이 스스로 붙이지 않아도 출력 후 자동으로  큰따옴표가 묶여있다.
// 4. 후행 쉼표 사용 불가  -> 데이터 마지막 속성의 끝 부분에 쉼표를 추가할 수 없다 ( 자바스크립트에서는 가능 )
// 5. .json 확장자 사용


// JSON.stringity ( ) - 데이터를 JSON 문자로 변환한다.
// JSON.parse ( ) - JSON 문자를 분석해 데이터를 변환한다.



// console.log ( JSON,stringity ( ‘ Hello world! ’ ) )   // “ Hello world! ” -> 큰 따옴표가 들어가있지만 생략된 상태
// console.log ( JSON,stringity ( 123 ) )                       // 123       -> 문자 데이터로 출력
// console.log ( JSON,stringity ( false ) )                      // false
// console.log ( JSON,stringity ( null ) )                         // null
// console.log ( JSON,stringity ( { name : ‘Heropy’, age : 85 } ) )       //  { “name”: “Heropy”, “age”: 85  }
// console.log ( JSON,stringity ( [ 1, 2, 3 ] ) )               // [ 1, 2, 3 ]


// @ 위 코드 JSON의  path라는 메소드 예제

// console.log ( JSON,prase ( ‘“Hello world!”’ ) )    -> 큰 따옴표 사용시 작은 따옴표 작성해줘야한다.
// console.log ( JSON,prase ( ‘ 123 ‘ ) )
// console.log ( JSON,prase ( ‘ false ’ ) )
// console.log ( JSON,prase ( ‘ null ’ ) )
// console.log ( JSON,prase ( ’ { “name”: “Heropy”, “age”: 85  } ’ ) ) 
// console.log ( JSON,prase ( ‘[ 1, 2, 3 ]’ ) )                                                               // 모든 값이 문자데이터로 출력 !


// package.json : 제이슨 포맷으로 만들어진 하나의 데이터이다.




// 표준 내장 객체 ( 날짜 )



// ** Date ( Class ) **

// 설명 : 찾고자 하는 날짜의 데이터를 반환해주는 클래스이다.


// const date = new Date ( )
// console.log( date )                                    // Wed Sep 28 2022 15:09:22 GMT + 0900 ( 한국 표준시 )



// 타임스탬프 : 날짜 정보를 가지고 있는 문자 데이터라고 부른다 ( 예시: 위 출력 결과 )


// 1
// const d1 = new Date ( 2022, 11, 16, 12, 57, 30 )   - > 년, 월, 일, 시, 분, 초 순서로 작성 
// console.log( d1 )                        !@ 월 부분은 제로-베이스넘버링을 사용하게 되어 11을 작성하면 12월로 출력된다.
//  // Fri Dec 16 2022 12:57:30 GMT + 0900 ( 한국 표준시 )


// 2
// const d2 = new Date ( Fri Dec 16 2022 12:57:30 GMT + 0900 ( 한국 표준시 ) )   - > 타임스탬프 문자로도 출력 가능
// console.log( d2 )                      
//  // Fri Dec 16 2022 12:57:30 GMT + 0900 ( 한국 표준시 )

// console.log( d2.getFullYear ( ) )                // 2022






// ** .getFullYear ( ) 와 .setFullYear ( ) **


// 설명 : 날짜 인스턴스의 ‘ 연도 ’ 를 반환하거나 지정합니다.


// getFullYear ( ) : 연도 데이터를 반환해준다.

// setFullYear ( ) : 연도 데이터를 지정해서 반환해준다.


// const date = new Date ( )

// console.log( date.getFullYear ( ) )       // 2022


// date.setFullYear (2023)
// console.log( date.getFullYear ( ) )       // 2023
// console.log( date )                                    // Thu Sep 28 2023 15:20:23 GMT + 0900 ( 한국 표준시 )







// ** .getMonth ( ) 와 .setMonth ( ) **



// 설명 : 날짜 인스턴스의 ‘ 월 ’ 를 반환하거나 지정합니다.
//           ( 제로베이스넘버링 ( zero-based Numbering )  0부터 시작해야 한다 )


// getMonth ( ) : 월 데이터를 반환해준다.

// setMonth ( ) : 월 데이터를  지정해서 반환해준다.


// const date = new Date ( )

// console.log( date.getMonth ( ) )        // 8
// console.log( date )                                 // Wed Sep 28 2022 15:27:35 GMT + 0900 ( 한국 표준시 )


// date.setMonth (0)
// console.log( date.getMonth ( ) )        // 0
// console.log( date )                                 // Fri Jan 28 2022 15:27:35 GMT + 0900 ( 한국 표준시 )






// ** .getDate ( ) 와 .setDate ( ) **



// 설명 : 날짜 인스턴스의 ‘ 일 ’ 를 반환하거나 지정합니다.


// getDate ( ) : 일 데이터를 반환해준다.

// setDate ( ) : 일 데이터를  지정해서 반환해준다.


// const date = new Date ( )

// console.log( date.getDate ( ) )        // 8
// console.log( date )                              // Wed Sep 28 2022 15:27:35 GMT + 0900 ( 한국 표준시 )


// date.setDate (11)
// console.log( date.getDate ( ) )        // 0
// console.log( date )                              // Sun Sep 11 2022 15:27:35 GMT + 0900 ( 한국 표준시 )






// ** .getHours ( ) 와 .setHours ( ) **



// 설명 : 날짜 인스턴스의 ‘ 시간 ’ 를 반환하거나 지정합니다.


// getHours ( ) : 시간 데이터를 반환해준다.

// setHours ( ) : 시간 데이터를  지정해서 반환해준다.


// const date = new Date ( )

// console.log( date.getHours ( ) )        // 15
// console.log( date )                                 // Wed Sep 28 2022 15:27:35 GMT + 0900 ( 한국 표준시 )


// date.setHours (7)
// console.log( date.getHours ( ) )        // 7
// console.log( date )                                 // Sun Sep 11 2022 07:27:35 GMT + 0900 ( 한국 표준시 )
  




// ** .getMinutes ( ) 와 .setMinutes ( ) **



// 설명 : 날짜 인스턴스의 ‘ 분 ’ 을 반환하거나 지정합니다.


// getMinutes ( ) : 분 데이터를 반환해준다.

// setMinutes ( ) : 분 데이터를  지정해서 반환해준다.


// const date = new Date ( )

// console.log( date.getMinutes ( ) )        // 48
// console.log( date )                                     // Wed Sep 28 2022 15:48:35 GMT + 0900 ( 한국 표준시 )


// date.setMinutes (2)
// console.log( date.getMinutes ( ) )        // 2
// console.log( date )                                     // Sun Sep 11 2022 15:02:35 GMT + 0900 ( 한국 표준시 )
  




// ** .getSeconds ( ) 와 .setSeconds ( ) **



// 설명 : 날짜 인스턴스의 ‘ 초 ’ 을 반환하거나 지정합니다.


// getSeconds ( ) : 초 데이터를 반환해준다.

// setSeconds ( ) : 초 데이터를  지정해서 반환해준다.


// const date = new Date ( )

// console.log( date.getSeconds ( ) )        // 38
// console.log( date )                                      // Wed Sep 28 2022 15:48:38 GMT + 0900 ( 한국 표준시 )
 

// date.setSeconds (57)
// console.log( date.getSeconds ( ) )        // 57
// console.log( date )                                      // Sun Sep 11 2022 15:48:57 GMT + 0900 ( 한국 표준시 )
  





// ** .getDay ( )  **


// 설명 : 날짜 인스턴스의 ‘ 요일 ’ 를 지정할 수는 없고 반환만  할 수 있다.



// const date = new Date ( )
// const day = date,getDay ( )


// console.log( day )                                       // 3
// console.log( getDayKo ( day ) )             // 수요일
 

// function getDayKo ( day ) {
//     switch ( day ) {
//         case 0: return ‘일요일’
//         case 1: return ‘월요일’
//         case 2: return ‘화요일’
//         case 3: return ‘수요일’
//         case 4: return ‘목요일’
//         case 5: return ‘금요일’
//         case 6: return ‘토요일’
//    }
// }





// ** .getTime ( ) 와 .setTime ( ) **


// 설명 : 날짜 인스턴스의 ‘ 밀리초(ms) ’ 를 반환하거나 지정합니다.
//           ( `1970-01-01 00:00:00`( 유닉스타임 ) 부터 경과된 시간만 반환 가능하다. )


// .getTime ( ) : 밀리초 데이터를 반환해준다.


// .setTime ( ) : 밀리초 데이터를  지정해서 반환해준다.

 

// const date = new Date ( )

// console.log( date.getTime ( ) )                      // 1664348309502 ( 유닉스타임 후 경과된 시간이 출력 )
// console.log( date )                                            // Wed Sep 28 2022 15:58:29 GMT + 0900 ( 한국 표준시 )



// date.setTime ( 1700000000000 )
// console.log( date.getTime ( ) )                            // 1700000000000
// console.log( date )                                                 // Wed Nov 15 2023 07:13:20 GMT + 0900 ( 한국 표준시 )








// @ .getTime ( ) , .setTime ( ) 유용하게 쓰는 방법 예제



// Date.prototype.isAfter = function ( date ) {
//       const a = this.getTime ( )    -> this는 일반함수를 사용했기 때문에 호출되는 그 대상 객체를 의미한다.
//       const b = date.getTime ( )
//         return a > b
// }

// const d1 = new Date ( ’Sat Jan 01 2022 00:00:00 GMP + 0900 ( 한국 표준시 )’ )
// const d1 = new Date ( ’Sun Jan 01 2022 00:00:00 GMP + 0900 ( 한국 표준시 )’ )


// console.log( d1.isAfter ( d2 ) )           // false
// console.log( d2.isAfter ( d1 ) )          // true




// 코드 설명 : 현재 코드는 a와 b 중 어떤 속성이 더 오래된 시간인지 구분하는 로직이다.





// **  Date.now ( ) **


// 설명 : ` 1970-01-01 00:00:00 `( 유닉스타임 ) 부터 경과한 메소드가 호출될 때의 ‘밀리초( ms )’로 반환해준다.


 

// const time = new Date ( ).getTime ( )
// console.log( Date.now ( ) )                       // 1664349597861
// console.log( time )                                      // 1664349597861


// setTimeout ( ( ) => {
//     console.log( Date.now ( ) )                  // 1664349598861
//     console.log( time )                                  // 1664349597861
// }, 1000 )
// 표준 내장 객체 ( 문자 )


// ** .length **

// 설명 : 문자( 숫자 )의 길이를 반환한다.


// const str = ‘ Hello world! 

// console.log( str.length )             // 12  ( 문자 하나씩 개수 )




// ** .includes ( ) **

// 설명 : 해당 대상 문자에 주어진 문자가 포함되어 있는지 ( 불린 ) 확인합니다.

// const str = ‘ Hello world! ‘

// console.log( str.includes ( ‘ Hello ‘ ) )         // true
// console.log( str.includes ( ‘ hello ‘ ) )          // false
// console.log( str.includes ( ‘ hello ‘, 1 ) )      // false    (두번째 인수인 숫자의 의미는 패스할 칸 수이다.)

// if ( !str.includes( ‘HEROPY’ ) ) {
//     console.log( ‘HEROPY가 없습니다.’ )          // HEROPY가 없습니다.
// }




// ** .indexof ( ) **

// 설명 : 해당 대상 문자에 주어진 문자와 일치하는 첫 번째 인덱스( 숫자 )를 반환합니다.
//             ( 일치하는 문자가 없으면 ` -1 `을 반환합니다. )


// const str = ‘ Hello world! ‘

// console.log( str.indexof ( ‘ world ‘ ) )         // 6   ( world부분은 6번째알파벳부터 시작하기 때문 )
// console.log( str.indexof ( ‘ Heropy ‘ ) )      // -1  ( 해당 문자는 데이터 안에 없기 때문 )

// if (str.indexof( ‘HEROPY’ ) === -1 ) {
//     console.log( ‘HEROPY가 없습니다.’ )          // HEROPY가 없습니다.
// }




// ** .padEnd ( ) **

// 설명 : 해당 대상 문자 길이( length )가 지정된 길이보다 작으면,
//           주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환한다.


// const str = ‘1234567’

// console.log( str.padEnd ( 10, ‘0’ ) )     // 1234567000( 해당문자가10개까지 안되서 2번째 인수로 길이 채움 )
// console.log( str.padEnd ( 10, ‘!’ ) )      // 1234567!!!
// console.log( str )                                        // 1234567
 



// ** .padstart ( ) **

// 설명 : 해당 대상 문자 길이( length )가 지정된 길이보다 작으면,
//           주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환한다.


// const str = ‘1234567’

// console.log( str.padStart ( 10, ‘0’ ) )     // 0001234567( 해당문자가10개까지 안되서 2번째 인수로 길이 채
//                                                                          움 )
// console.log( str.padStart ( 10, ‘?’ ) )      // ???1234567
// console.log( str )                                           // 1234567



// ** .replace ( ) **

// 설명 : 해당 대상 문자에서 패턴 ( 문자, 정규식 )과 일치하는 부분을 교체한 새로운 문자를 반환한다.



// const str = ‘ Hello, Hello?! ’


// console.log( str.replace ( ‘Hello’ , ‘Hi’ ) )       // Hi, Hello?! ( 데이터 안에 Hello 부분을 2번째 인수로 교체 )
// console.log( str.replace ( /Hello/g , ‘Hi’ ) )  // Hi, Hi?!( 문자 데이터 안에 있는 모든 Hello 문자를 Hi로 교체 )
// console.log( str )                                                     // Hello, Hello?!
 
// /Hello/g : 문자 데이터 안에 있는 모든 Hello 문자를 Hi로 바꿔주는 정규식 방법이다. ( g는 글로벌 약자이다. )



// ** .slice ( ) **

// 설명 : 해당 대상 문자의 일부를 추출해 새로운 문자를 반환한다.
//          두번째 인수 직전까지 추출하고, 두번째 인수를 생략하면 대상 문자의 끝까지 추출한다.



// const str = ‘ Hello world! ’


// colsole.log( str.slice ( 0, 5 ) )      // Hello    ( 0~4 번째까지의 문자만 출력 )
// colsole.log( str.slice ( 6, -1 ) )     // world   ( 뒤에서 6~ -1 번째까지의 문자만 출력 ) -> -1은 마지막 문자이다.
// colsole.log( str.slice ( 6 ) )           // world!  ( 6번째~마지막까지 출력 )  -> 2번째 인수가 없으면 끝까지 출력함.
// colsole.log( str )                            // Hello world!   ( 0~4 번째까지의 문자만 출력 )




// ** .split ( ) **

// 설명 : 해당 대상 문자를 주어진 구분자로 나눠 배열로 반환합니다.


// const str = ‘Apple’ , ‘Banana’ , ‘Cherry’

// console.log( str.split ( ‘, ’ ) )        // [ ‘Apple’ , ‘Banana’ , ‘Cherry’ ] ->주어진 구분자 ‘, ’를 기준으로 나뉨
//                                                                                                                 (띄어쓰기를 포함한 상태)

// console.log( str.split ( ‘,’ ) )        // [ ‘Apple’ , ‘ Banana’ , ‘ Cherry’ ] ->주어진 구분자 ‘,’를 기준으로 나뉨
//                                                                                                                 (띄어쓰기를 포함 안 한 상태)

// console.log( str.split ( ‘ ’ ) )        // [ 모든 데이터 알파벳을 하나씩 나눈다 ]->빈배열은 기준이 전체로 잡힌다.


// console.log( str.split ( ‘ ’ ).reverse )        // [ 모든 데이터 알파벳을 하나씩 나눈 후 반대로 모두 뒤집어 출력 ]


// console.log( str.split ( ‘ ’ ).reverse.join ( ‘’ ) )   // [ yrrehC ,ananaB ,elppA ] ->전체 문자 데이터를 하나
//                                                                                                                                  의 문자데이터로 조인
//                                                                                                                                  ( 스플릿 반대 개념 )



// .reverse : 배열 데이터의 순서대로 들어있는 아이템을 전부 반대로 뒤집어주는 메소드이다.


// .join ( ‘’ ) : 배열의 아이템들을 전부 다 하나의 문자 데이터로 조인해주는 메소드이다.





// ** .toLowerCase ( ) **

// 설명 : 해당 대상 문자를 영어 소문자로 변환해 새로운 문자로 변환한다.
//           ( 한글 부분에는 영향이 없다 )


// const str = ‘ Apple, Banana, Cherry ’

// console.log( str.toLowerCase ( ) )           // apple, banana, cherry
// console.log( str )                                            // Apple, Banana, Cherry



// ** .toUpperCase ( ) **

// 설명 : 해당 대상 문자를 영어 대문자로 변환해 새로운 문자로 변환한다.
//           ( 한글 부분에는 영향이 없다 )


// const str = ‘ Apple, Banana, Cherry ’

// console.log( str.toUpperCase ( ) )           // APPLE, BANANA, CHERRY
// console.log( str )                                            // Apple, Banana, Cherry





// ** .trim ( ) **

// 설명 : 해당 대상 문자의 앞뒤 공백 문자 ( space, tab 등 )를 제거한 새로운 문자를 반환한다.
//            ( 공백 공간이 중간에 만든 것은 해당되지 않는다 )


// const str = ‘      HEROPY!      ’

// console.log( str.trim ( ) )           //  ‘HEROPY!’    -> 공백 없이 출력
// console.log( str )                          //  ‘      HEROPY!      ’
// 표준 내장 객체 ( 숫자 및 수학 )





// 숫자

// ** .toFixed ( ) **

// 설명 : 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환합니다.


// const num = 3.1415926535

// console.log( num.toFixed ( 2 ) )                                    // 3.14   문자데이터
// console.log( parseFloat ( num.toFixed ( 2 ) ) )        // 3.14   숫자데이터



// parseFloat ( ) : .toFixed ( ) 함수를 사용하게 되면 출력할 때 문자로 반환된 데이터를 숫자 데이터로 바꿔주는 메소드



 



// ** .toLocaleString ( ) **


// 설명 : 숫자를 현지 언어 형식의 문자로 반환한다.



// const num = 1000000

// console.log( num.toLocaleString(  ) )                                    //  1,000,000
// console.log( ` $ { num.toLocaleString(  ) } 원` )                  //  1,000,000원  

// # 단위를 적을 시 백틱기호 내부에 호출할 데이터를 작성하고 바로 뒤에 단위를 적을 수 있다.





// ** Number.isInteger ( ) **


// 설명 : 숫자가 정수 ( integer )인지 확인할 수 있다.
//          앞에 클래스 필수



// const num = 123
// const pi = 3.14

// console.log( Number.isInteger( num ) )                  //  true
// console.log( Number.isInteger( pi ) )                       //  false  
 

// # 메소드 앞에 클래스가 붙어있으면 정적메소드로 위 메소드는 넘버클래스 뒤에 붙여서 사용할 수 있다.





// ** Number.isNaN ( ) **

// 설명 : 주어진 값이 Not a Number 인지 확인하는 메소드이다.
//          앞에 클래스 필수


// const num 1 = NaN
// const num 2 = 123
// const str  = ‘Hello world’
// const url  = null

// console.log( Number.isNaN( num 1 ) )                   //  true
// console.log( Number.isNaN( num 2 ) )                  //  false 
// console.log( Number.isNaN( str ) )                        //  false 
// console.log( Number.isNaN( url ) )                        //  false 


// # 메소드 앞에 클래스가 붙어있으면 정적메소드로 위 메소드는 넘버클래스 뒤에 붙여서 사용할 수 있다.





// ** Number.parseInt ( ) 또는 parseInt ( ) **

// 설명 : 주어진 값( 숫자, 문자 )을 파싱( 분석 )해 특정 진수( radix )의 정수로 반환해준다. ( 모든 소수점 없이 출력 )
//            앞에 클래스를 붙이지 않고 전역함수로도 사용 가능

// parse : 분석하다
// Int : 정수( 약어 )


// const str = ‘3.1415926535’
// const num = 3.1415926535


// console.log( Number.parseInt ( str, 10 ) )           // 3         -> str의 데이터를 10진수로 만들어준다.
// console.log( Number.parseInt ( num, 10 ) )        // 3         -> num의 데이터를 10진수로 만들어준다.
//              ( Number 클래스가 없이 parseInt 함수만 만들어도 똑같다. )




// ** Number.parseFloat ( ) 또는 parseFloat ( ) **


// 설명 : 주어진 값( 숫자, 문자 )을 파싱( 분석 )해 부동소수점을 실수로 반환(숫자)한다. ( 소수점 모두 반환 )
//            앞에 클래스를 붙이지 않고 전역함수로도 사용 가능



// const str = ‘3.1415926535’
// const num = 3.1415926535


// console.log( Number.parseInt ( str ) )           // 3.1415926535         ->진수 표시 없이 데이터만 작성
// console.log( Number.parseInt ( num ) )        // 3.1415926535\
//              ( Number 클래스가 없이 parseInt 함수만 만들어도 똑같다. )







// 수학


// ** Math.abs ( ) **

// Math : 수학적인 상수와 함수를 위한 속성 메소드를 가진 내장 객체이다.


// 설명 : 주어진 숫자의 절댓값을 반환해준다.



// console.log( Math.abs ( 2 ) )                   // 2
// console.log( Math.abs ( -2 ) )                   // 2




// ** Math.ceil ( ) **

// 설명 : 주어진 숫자를 올림하여 정수를 반환해준다.



// console. log( Math. ceil ( 3.1415926535 ) )                   // 4







// ** Math.floor ( ) **

// 설명 : 주어진 숫자를 내림하여 정수를 반환해준다.



// console. log( Math. floor ( 3.1415926535 ) )                   // 3





// ** Math.max ( ) **

// 설명 : 주어진 숫자 중 음수를 포함하여 가장 큰 숫자를 반환해준다.



// console. log( Math. max ( 1, 22, 38, 192 ) )                   // 192





// ** Math.min ( ) **

// 설명 : 주어진 숫자 중 음수를 포함하여 가장 작은 숫자를 반환해준다.



// console. log( Math. min ( 1, 22, 38, 192 ) )                   // 1







// ** Math.pow ( ) **

// 설명 : 주어진 숫자의 거듭제곱한 값을 반환해준다.

// pow : 거듭제곱


// console. log( Math. pow ( 4, 2 ) )                   // 16                    4 * 4
// console. log( Math. pow ( 7, 2 ) )                   // 49                    7 * 7
// console. log( Math. pow ( 10, 3 ) )                   // 1000              10 * 10 = 100 _  100 * 10 = 1000






// ** Math.random ( ) **

// 설명 : 랜덤으로 숫자 0 이상, 1 미만의 난수를 반환해준다.



// console. log( Math. random ( ) )                   // 0 과 1 사이의 소수점 결과 출력


// @ 특정 범위의 랜덤 정수를 얻는 함수

// function random ( min = 0, max = 10 ) {           - - - - - - - - - - -> 0 부터 10 까지를 기준으로 잡아준다.
//       return Math.floor ( Math.random ( ) * ( max - min ) ) + min
// }

// console.log( random ( ) )                                  // 0과 10 사이의 랜덤 숫자 출력
// console.log( random ( 11, 20 ) )                       // 11과 20 사이의 랜덤 숫자 출력
// console.log( random ( 101, 999 ) )                  // 101과 999 사이의 랜덤 숫자 출력





// ** Math.round ( ) **

// 설명 : 주어진 숫자를 반올림해서 정수를 반환해준다.


// const num 1 = 3.141
// const num 2 = 3.768



// console. log( Math. Sound ( num 1 ) )                   // 3
// console. log( Math. Sound ( num 2 ) )                   // 4

 
// 크기와 좌표



// ** window.innerWidth / window.innerHeight **

// 설명 : 현재 화면( Viewport )의 크기를 알아낼 수 있다.



// <HTML파일>

// <style>
//     body {
//          height: 1000px;
//          padding: 500px 0;
//     }
//     .parent {
//          width: 300px;
//          height: 200px;
//          margin-top: 1000px;
//          padding: 20px;
//          overflow: auto;
//          border: 10px solid red;
//     }
//     .child {
//          height: 100px;
//          margin-top: 100px;
//          border: 10px solid red;
//     }
// </style>



// <JS파일>


// console.log( window.innerWidth )          //  <div></div>
// console.log( window.innerWidth )           //  <input>






// ** window.scrollX / window.scrollY **

// 설명 : 페이지의 좌상단 기준, 현재 화면( Viewport )의 수평 혹은 수직 스크롤 위치를 알아낼 수 있다.



// <JS파일>

// console.log( window.scrollX, window.scrollY )          //  스크롤 위치가 숫자로 나타냄





// ** window.scrollTo / E.scrollTo **

// 설명 : 지정된 좌표로 대상( 화면, 스크롤 요소 )을 스크롤해준다.
//           // 대상.scrollTo ( X좌표, Y좌표 )
//           // 대상.scrollTo ( { top: Y, left: X, behavior: ’smooth’ } )



// <JS파일>

// const parentEl = document.querySelector( ‘.parent’ )

// setTimeout ( ( ) => { 
//   window.scrollTo ( {
//        left: 0,
//        top: 500,
//        behavior: ’smooth’
// }, 1000 )

// console.log( window.scrollX, window.scrollY )          //  1초 뒤 smooth로 자연스럽게 지정한 위치로 스크롤 됨










// ** E.clienWidth / E.clienHeight **

// 설명 : 테두리 선 ( border )을 제외한 요소의 크기를 얻어준다.



// <JS파일>

// const parentEl = document.querySelector( ‘.parent’ )
// const childEl = document.querySelector( ‘.child’ )


// console.log( parentEl.clienWidth, parentEl.clienHeight )          //  325 240
// console.log( childEl.clienWidth, childEl.clienHeight )                 //  265 100  ( 스크롤바 15px 제외 )







// ** E.offsetWidth / E.offsetHeight **

// 설명 : 테두리 선 ( border )을 포함한 요소의 크기를 얻어준다.



// <JS파일>

// const parentEl = document.querySelector( ‘.parent’ )
// const childEl = document.querySelector( ‘.child’ )


// console.log( parentEl.offsetWidth, parentEl.offsetHeight )          //  360 260
// console.log( childEl.offsetWidth, childEl.offsetHeight )                 //  285 120  ( 스크롤바 15px 제외 )







// ** E.scrollLeft / E.scrollTop **

// 설명 : 스크롤 요소의 좌상단 기준, 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치를 얻어준다.



// <JS파일>

// window.parentEl = document.querySelector ( ‘.parent’ )

// console.log( parentEl.scrollLeft, parentEl.scrollTop )          //  스크롤 위치를 숫자로 나타냄








// ** E.offsetLeft / E.offsetTop **

// 설명 : 페이지의 좌상단 기준, 요소의 위치를 얻어준다.



// <JS파일>

// const parentEl = document.querySelector( ‘.parent’ )
// const childEl = document.querySelector( ‘.child’ )


// console.log( parentEl.offsetLeft, parentEl.offsetTop )   // 전체 페이지 기준 요소의 위치가 출력
// console.log( childEl.offsetLeft, childEl.offsetTop )        //  가장 위부터 요소의 위치가 출력 ( 마진과 테두리 제외 )







// ** E.getBoundingClientRect **

// 설명 : 테두리 선( border )을 포함한 요소의 크기와 화면에서의 상대 위치 정보를 얻어준다.



// <JS파일>

// const parentEl = document.querySelector( ‘.parent’ )
// const childEl = document.querySelector( ‘.child’ )


// console.log( parentEl.getBoundingClientRect( ) )     // 요소 크기와 전체 페이지 기준 위치정보 출력 
// console.log( childEl.getBoundingClientRect( ) )        //                        ‘’

// 모듈 (Mobule)

// 모듈 ( Module ) : 모듈이란 특정 데이터들의 집합(파일)이다.



// 모듈 가져오기 및 모듈 내보내기

// …자바스크립트 파일 내부…
// export const hello = ‘Hello world!’;              -> export라는 키워드로 데이터를 내보낸다.



// …다른 파일과 위 파일 연결 시 다른 파일 내부 …
// import { hello } from ‘./module.js’                 -> import는 데이터를 가져오는 역할을 한다.

// console.log(hello)                //  Hello world!


// * 모듈을 사용하여 연결하고 싶을 땐 앞에 ‘ type= ‘을 부인 후 모듈이라 적어야한다.



//  기본 내보내기


// default : export 키워드로 데이터를 내보낼 때 디폴트를 사용할 수 있으며, 이를 우리는 기본 내보내기라고 말한다.
//                   ( 내보내기를 한개만 가능하다 )


// 예시 ) export default 123




//  이름 내보내기

// 설명 : 데이터들을 하나의 속성이름을 만들어 넣어주고 그 이름을 내보내서 여러개를 내보내준다.


// export const str = ‘ABC’
// export const arr = ‘[ ]’
// export const function  hello ( ) { }


// 가져오기


// @위 코드 파일과 연결되어 있는 파일 내부
// 1. 기본 내보내기 가져오기
// import abc from ‘ . / 위 코드 파일 이름 ’

// console.log( abc )                              //A B C  -> 다른이름( abc )을 지정하여 데이터( ABC )를 불러온다.


// 2. 여러개를 가져오는 경우

// 내보내기를 통하여 가져오기를 했을 때 가져올 속성 이름을  중괄호 안에 정확하게 적어서 가져와야한다.

// import { str, arr, hello } from ‘ . / 위 코드 파일 이름 ’


// console.log( str )                         // ABC
// console.log( arr )                         // [ ] 
// console.log( hello )                     // f hello  ( ) { }

// 예시 ) import number, { str, arr, hello } from ‘ /. module.js ’
//           ( 필요한 데이터만 가지고 올 수 있다.)



// 3. 여러개를 가져올 때 속성 이름 바꾸는 방법

// as : 가지고 올때는 가지고 오지만 사용할 때에는 이름을 바꿔서 쓸 수 있다.



// import { str as xyz, arr, hello } from ‘ . / 위 코드 파일 이름 ’


// console.log( str )                         // ABC  X

// console.log( xyz )                         // ABC O




// 4. 모듈 자바스크립트 파일에서 나오는 모든 테이터를 하나의 변수로 할당하여 사용하는 방법


// import *as abc from ‘ . / 위 코드 파일 이름 ’


// console.log( abc )                         // 모든 내용을 별표시를 사용해 출력


// *(와일드카드): 여러개를 한번에 지정한다는 의미가 있는 기호다.





// 동적으로 모듈 가져오기

// import : import는 최상단에서만 불러올 수 있다( 최상단을 제외한 곳에서 부를 시 에러나옴 )



// 중간에서 import하여 가져오는 방법

// 예시)
// import * as abc from ‘ ./ 불러올 파일이름’


// setTimeout ( ( ) => {
//     import ( ‘ ./ 불러올 파일이름’ ).then( abc  => {
//       console.log( abc )
//     } )
//  }, 1000 )



// acync, await


// setTimeout ( acync ( ) => {
//      const abc = await import ( ‘ ./ 불러올 파일이름’ )
//      console.log( abc )
// }, 1000 )

// # 어씽크와 어웨잇으로도 위 코드와 같은 값으로 데이터를 가지고 올 수 있다.





// 모듈 가져온 후 바로 내보내는 방법

// 헌재 다른 이름의 a,b 파일이 존재하는 중

// export { a } from ‘./ 불러올 파일이름’
// export { b } from ‘./ 불러올 파일이름’       // a,b 에 적힌 값들이 출력

// 설명 : 다른 데이터를 가지고 오자마자 바로 호출을 해주는 코드이다.

// 이벤트 ( Events )


// <HTML파일>

// <style>
//     .parent {
//          width: 300px;
//          height: 200px;
//          padding: 20px;
//          overflow: auto;
//          border: 10px solid;
//          background-color: red;
//     }
//     .child {
//          width: 200px;
//          height: 1000px;
//          background-color: orange;
//          border: 10px solid;
//          font-size: 40px;
//     }
// </style>

// <body>
//      <div class = "parent” >
//          <div class = "child” >
//                  <a href = "http://heropy.blog” target= “_”blank >
//                   HEROPY!
//                  </a>
//          </div>
//      </div>
//  <input  />
// </body>

// ” target= “_”blank : 해당 블로그 주소 페이지를 새 탭으로 오픈할때 사용한다.


// 이벤트 추가 및 제거 


// ** .addEventListener ( ) **

// 설명 : 대상의 이벤트 청취 ( Listen )를 등록해준다.
//           대상에 지정한 이벤트가 발생했을 때 지정한 함수 ( Handler )가 호출된다.




// <JS파일>

// const parentEl = document.querySelector ( ‘.parent’ )
// const childEl = document.querySelector ( ‘.child’ )

// parentEl.addEventListener ( ‘click’, ( ) => { 
//    console.log( ‘Parent!’ )
// } )                                                                                          //  해당 요소 클릭 시 ‘Parent!’ 출력
// childEl.addEventListener ( ‘click’, ( ) => { 
//    console.log( ‘Child!’ )
// } )                                                                                          //  해당 요소 클릭 시 ‘Child!’ ,  ‘Parent!’ 출력
//                                                                                          ( 위 코드 내부에 해당 요소가 들어있으므로 둘다 출력  )






// ** .removeEventListener ( ) **

// 설명 : 대상에 등록했던 이벤트 청취 ( Listen )를 제거해준다.
//           메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있다.




// <JS파일>

// const parentEl = document.querySelector ( ‘.parent’ )
// const childEl = document.querySelector ( ‘.child’ )

// const handler = ( ) => {   
//    console.log( ‘Parent!’ )                          //  제거 !!
// }

// parentEl.addEventListener ( ‘click’, handler )
// childEl.addEventListener ( ‘click’, ( ) => { 
//    parentEl.removeEventListener ( ‘click’, handler )
// } ) 





// 이벤트 객체



// ** 이벤트 객체**

// 설명 : 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있다.




// <JS파일>

// const parentEl = document.querySelector ( ‘.parent’ )


// parentEl.addEventListener ( ‘click’, event => {
//        console.log( event.target, event.currentTarget )            // <div class = "parent”></div>
//                                                                                                                      <div class = "parent”></div>

//                                                                                                                      <div class = "child”></div>
//                                                                                                                      <div class = "parent”></div>

//        console.log( event )
//  } )
//  parentEl.addEventListener ( ‘wheel’, event => {
//         console.log( event )                                                          //  다양한 휠 이벤트 출력
// } )

// const inputEl = document.querySelector ( ‘keydown’, event => {
//      Console.log( event.key )                                                          //  검색창에 커서를 두고 키보드 클릭시 해당 키 명 출력
// } )


// .target : 이벤트가 발생한 해당 요소를 의미


// .currentTarget : 이벤트가 등록된 요소를 의미


// wheel : 마우스의 가운데 버튼을 움직이면 나타나는 이벤트이다.


// keydown : 키보드 버튼을 클릭하면 다운되는 이벤트이다.






// 기본 동작 방지



// ** 기본 동작 방지 **

// 설명 : 브라우저에 제공이 되며, 위아래 스크롤 하거나 a 태그를 클릭 시 페이지 이동하는것들을 기본 동작이라 하며,
//            그것을 방지해주는 역할이 .preventDefalit ( )이다.




// <JS파일>


// // 마우스 휠의 스크롤 동작 방지!
// const parentEl = document.querySelector ( ‘.parent’ )
// parentEl.addEventListener ( ‘wheel’, event => {
//   event.preventDefalit ( )                                              // 요소에 스크롤 시 문자는 출력되지만 실제화면은 안움직인다.
//   console.log ( ‘wheel!’ )                                                        // 해당 요소에 스크롤을 하면 스크롤 횟수와 wheel! 출력
// } )


// // <a>태그에서 페이지 이동 방지!
// const anchorEl = document.querySelector ( ‘a’ )
// anchorEl.addEventListener ( ‘click’, event => {
//     event.preventDefalit ( )                                              //  요소에 클릭 시 문자는 출력되지만 실제화면은 안움직인다.
//     console.log ( ‘Click!!’ )                                               // 요소 클릭 시  Click!! 출력
// } )


// .preventDefalit ( ) : 실제 동작을 없애는 것이 아니라 보여지는 화면에서만 동작을 하지 않게 만들어주는 메소드이다.



// 이벤트 전파(버블 ) 정지



// ** 이벤트 전파( 버블 ) 정지 **

// 설명 : 이벤트를 전파할 때는 가장 자식 요소부터 출력되며 그것을 버블링이라고 부르며, 이벤트 버블링을 
//           멈춰주는 ‘.stopPropagation ( )’ 가 있다.




// <JS파일>


// const parentEl = document.querySelector ( ‘.parent’ )
// const childEl = document.querySelector ( ‘.child’ )
// const anchorEl = document.querySelector ( ‘.a’ )

// window.addEventListener ( ‘click’, event => {
//    console.log ( ‘Window!’ )                                      //  버블링 기능으로 출력 안됨
// } )
// document.body.addEventListener ( ‘click’, event => {
//    console.log ( ‘Body!’ )                                            // 버블링 기능으로 출력 안됨
// },{ capture: true } )    -> 먼저 출력 !
// parentEl.body.addEventListener ( ‘click’, event => {
//    console.log ( ‘Parent!’ )                                         // 이어서 Parent! 출력
//    event.stopPropagation ( )  -> 버블링!
// } )
// childEl.body.addEventListener ( ‘click’, event => {
//    console.log ( ‘Child!’ )                                             // 이어서 Child! 출력 ( 해당 요소 클릭 시 이 요소부터 출력 시작 )
// } )
// anchorEl.body.addEventListener ( ‘click’, event => {
//    console.log ( ‘Anchor!’ )                                         // 요소 클릭 시 Anchor! 출력
// } )

// 이벤트 버블링 : 점점 넓어지는 범위 순으로 출력된다.( 가장 자식 요소부터 출력되는 개념  )
//                          만약 중간쯤 위치에 있는 요소를 클릭 한다면 그 요소부터 출력 시작


// .stopPropagation ( ) : 이벤트가 상위요소로 전파( 버블링 )되는 것을 정지 시키는 메소드이다.


// capture: true : 해당 요소 먼저 동작하게 해준 후 남은 요소들을 순서대로 출력해준다.
//                              이 메소드가 2개를 사용할 경우 큰 요소부터 먼저 출력된다.



// @ 이벤트 전파 ( 버블 ) 정지 2번째 예제

// const parentEl = document.querySelector ( ‘.parent’ )

// const handler = ( ) => {
//   console.log( ‘Parent!’ )                                      // Parent!!
//  }

// parentEl.addEventListener ( ‘click’, handler,
    
// { capture: true
//  } )
// parentEl.removeEventListener ( ‘click’, handler )

// ( remove를 통해 해당 요소를 제거해도 제거’할 요소에capture: true’가 있으면 제거되지 않는다. )






// 핸들러 한 번만 실행



// ** 핸들러 한 번만 실행 **

// 설명 : once: true 메소드로 한번만 실행하고 더 이상 실행되지 않게 해준다. 클릭 이벤트로는 두 번째 클릭 시 실행 안 됨




// <JS파일>


// const parentEl = document.querySelector ( ‘.parent’ )


// parentEl.addEventListener ( ‘click’, event => {
//    console.log ( ‘Parent!’ )                                      // 
// }, {
//    once: true   -> 딱 한번 실행! ( 더 클릭해도 실행 안됨 )
// } )


// once: true : 두 번째 인수로 들어가는 콜백함수, 즉 핸들러 함수를 한 딱 번만 실행하게 해준다.







// 기본 동작과 핸들러 실행 분리



// ** 기본 동작과 핸들러 실행 분리 **

// 설명 :  passive: true를 통해 요소 동작과 핸들러 실행을 분리하여 보이는 화면 기능을 더 부드럽게 나타낼 수 있다.




// <JS파일>


// const parentEl = document.querySelector ( ‘.parent’ )


// parentEl.addEventListener ( ‘wheel’, ( ) => {
//     for ( let I = 0; i < 10000; i += 1 ) {
//    console.log ( i )                                      // 
//   }
// }, {
//    passive: true   -> 천 번째 인수, 두 번째 인수 분리!
// } )


// passive: true : 요소의 동작과 핸들러의 실행을 분리해준다.







// 이벤트 위임 ( Delegation )



// ** 이벤트 위임( Delegation ) **

// 설명 :  비슷한 패턴의 여러 요소에서 이벤트를 핸들링해야 하는 경우,
//            단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있다.




// <HTML파일>


// <div class = "parent” >
//       <div class="child”>1</div>
//       <div class="child”>2</div>
//       <div class="child”>3</div>
//       <div class="child”>4</div>
// </div>



// <JS파일>


// const parentEl = document.querySelector ( ‘.parent’ )
// const childEls = document.querySelectorAll ( ‘.child’ )

// // 모든 대상 요소에서 이벤트 등록!

// childEls.forEach ( el => {
//    El.addEventListener ( ‘click’, event => {
//       console.log( event.target.textContent )                   // 클릭 시 1 2 3 4 순서대로 출력
//    } )
// } )


// // 조상 요소에 이벤트 위임!

//  parentEl.addEventListener ( ‘click’, event => {
//      const childEl = event.target.closest ( ‘.child’ )
//          if ( childEl ) {
//        console.log( childEl.textContent )                          //  클릭 시 1 2 3 4 순서대로 출력
//      }
// } )


// .closest ( ) : 대상 요소의 선택자와 일치하는 가장 가까운 조상 요소를 찾는다.  










// Mouse & pointer Events



// ** Mouse & pointer Events **



// <HTML파일>

// <style>
//     .parent {
//          width: 300px;
//          height: 200px;
//          padding: 20px;
//          overflow: auto;
//          border: 10px solid;
//          background-color: red;
//     }
//     .child {
//          width: 200px;
//          height: 1000px;
//          background-color: orange;
//          border: 10px solid;
//     }
// .child.active {
//          background-color: yellowgreen;
//     }
// </style>

// <body>
//      <div class = "parent” >
//           <div class = "child” ></div>
//      </div>
// </body>



// <JS파일>



// const parentEl = document.querySelector ( ‘.parent’ )
// const childEl = document.querySelectorAll ( ‘.child’ )

// // click                                     | 클릭했을 때
// childEl.addEventListener ( ‘click’, ( ) => { 
//       childEl.classList.toggle ( ‘active’ )   -> child부분을 클릭 시 지정한 active( 옐로우그린 )색상으로 바뀜
// } )                                                                                         ( 다시 누를 시 원상 복구 )


// // dblclick                               | 더블 클릭했을 때
// childEl.addEventListener ( ‘dblclick’, ( ) => { 
//       childEl.classList.toggle ( ‘active’ )   -> child부분을 더블 클릭 시 지정한 active( 옐로우그린 )색상으로 바뀜
// } )                                                                                         ( 다시 누를 시 원상 복구 )

// // mousedown                       | 버튼을 누를 때
// childEl.addEventListener ( ‘mousedown’, ( ) => { 
//       childEl.classList.add ( ‘active’ )   -> child부분을 누르고 있을 때 지정한 active( 옐로우그린 )색상으로 바뀜
// } )    

// // mouseup                             | 버튼을 뗄 때
// childEl.addEventListener ( ‘mouseup’, ( ) => { 
//       childEl.classList.remove ( ‘active’ )   -> child부분을 뗄 때 지정한 오랜지색상으로 돌아옴


// // mouseenter                       | 포인터가 요소 위로 들어갈 때
// childEl.addEventListener ( ‘mouseenter’, ( ) => { 
//       childEl.classList.add ( ‘active’ )   
//      } )           -> child부분에 마우스커서가 들어가 있을 때 지정한 active( 옐로우그린 )색상으로 바뀜
   

// // mouseleave                       | 포인터가 요소 밖으로 나올 때
// childEl.addEventListener ( ‘mouseleave’, ( ) => { 
//       childEl.classList.remove ( ‘active’ )   
//      } )           -> child부분에 마우스커서가 밖에 나갈 때 지정한 오렌지색상으로 돌아옴

// // mousemove                        | 포인터가 움직일 때

// childEl.addEventListener ( ‘mousemove’, event => { 
//     console.log( event )          -> child부분에 마우스커서가 움직일 때 마우스 이벤트 객체가 출력됨
//      } ) 

// // contextmenu                      | 우클릭 했을 때

// childEl.addEventListener ( ‘contextmenu’, event => { 
//     console.log( event )          -> child부분에 마우스 우클릭 시 특정한 메뉴가 나오며 마우스 이벤트 객체가 출력됨
//      } ) 

// // wheel                                    | 휠 버튼이 회전할 때

// parentEl.addEventListener ( ‘wheel’, event => { 
//     console.log( event )          -> parenr요소 위에서 마우스 휠을 움직일 때 마우스 휠 이벤트 객체가 출력됨
//      } ) 

// window.addEventListener ( ‘wheel’, event => { 
//     console.log( event )          -> 윈도우에서 마우스 휠을 움직일 때 마우스 휠 이벤트 객체가 출력됨
//      } ) 





// Keyboard Event



// ** Keyboard Event **




// <HTML파일>

// <body>
//      <input type ="text” />
// </body>



// <JS파일>


// // keydown                                   | 키를 뗄 때
// const inputEl = document.querySelector ( ‘input’ )

// inputEl.addEventListener ( ‘ketdown’, event => {
//    console.log( event, key )                                          // 키보드를 클릭 시 해당 키네임 출력
// } )

// // keyup                                        | 키를 누를 때
// const inputEl = document.querySelector ( ‘input’ )

// inputEl.addEventListener ( ‘ketup’, event => {
//    console.log( event, key )                                          // 키보드를 뗄 때 해당 키네임 출력
// } )

// // 내용을 적어 엔터를 때
// const inputEl = document.querySelector ( ‘input’ )

// inputEl.addEventListener ( ‘ketup’, event => {
//    if( event.key === ‘Enter’ && !event.isComposing ) { 
//        console.log ( event.isComposing )                // 검색창에 적은 내용이 한 번만 출력
//        console.log ( event.target.value )                  // 검색창에 적은 내용을 적은 뒤 엔터를 누르면 출력
//     }
// } )

//  CJK문자 : 중국어, 일본어, 한국어 통틀어 이르는 말이다

// isComposing : CJK문자를 처리하는 과정인지 블린데이터로 가지고 있는 속성이다







// Focus & Form Events



// ** Focus & Form Events **




// <HTML파일>


// < style >
//      form {
//           padding: 10px;
//           border: 4px solid transparent;
//           display: flex;
//           flex-wrap: wrap;
//           gap: 6px;
// }
// form.active {
//      Border-color: orange;
// }
// < /style >



// <body>
//     <form>
//           <input type = "text” placeholder = "ID” />
//           <input type = "password” placeholder = “PW” />
//           <button type = “submit”>제출</button>
//           <button type = “reset”>초기화</button>
//    </form>
// </body>



// <JS파일>


// // focus                                   | 요소가 포커스를 얻었을 때
// // blur                                      | 요소가 포커스를 잃었을 때
// // input                                    | 값이 변경되었을 때
// // change                               | 상태가 변경되었을 때
// // submit                                | 제출 버튼을 선택했을 때
// // reset                                   | 리셋 버튼을 선택했을 때






// const formEl = document.querySelector ( ‘form’ )
// const inputEl = document.querySelectorAll ( ‘input’ )

// inputEls.forEach ( el => {
//    el.addEventListener ( ‘focus’, ( ) => { 
//        formEl.classList.add ( ‘active’ )
//    } )
// el.addEventListener ( ‘blur’, ( ) => { 
//        formEl.classList.remove ( ‘active’ )
//    } )
// el.addEventListener ( ‘input’, event => {                                     <연속으로 1 2 3 을 클릭 시>
//        console.log ( event.target.value )                                 // 1, 12, 123 (값이 입력 될 때마다 출력)
//    } )
// } )

// el.addEventListener ( ‘change’, event => { 
//        console.log ( event.target.value )                                 // 123 ( 내용을 변경 후 엔터를 누르면 출력)
//    } )
// } )

// formEl.addEventListener( ‘submit’, event => {
//      event.preventDefault ( )
//      const data = {
//             id: evnet.target [0].value,
//             pw: evnet.target [1].value
//     }
//   console.log( ‘제출!’, data )                                 // 123 ( 내용을 변경 후 엔터를 누르면 출력)
// } )

// ( submit이벤트가 발생되면 새로 고침이 기본동작이다. )

// .preventDefault ( ) : 서브밋에 새로고침 되는 것을 동작하지 않도록 만들어주는 메소드이다.


// formEl.addEventListener( ‘reset’, event => {
//      console.log( ‘리셋!’ )                                 // 초기화 버튼 누를 시 input창 안에 적힌 내용을 지워주며 ‘리셋!’이 출력됨
// } )







// 커스텀 이벤트와 디스패치



// ** 커스텀 이벤트와 디스패치 **


// 디스패치

// <HTML파일>

// <body>
//     <div class = "parent”>
//           <div class = “child”>1</div>
//           <div class = "child”>2</div>
//    </div>
// </body>


// <JS파일>


// const child1 = document.querySelector ( ‘.child:nth-child ( 1 ) ’ )
// const child2 = document.querySelector ( ‘.child:nth-child ( 2 ) ’ )

// child1.addEventListener( ‘click’, event => {
// // 강제로 이벤트 발생!
//    child2.dispatchEvent ( new Event ( ‘click’ ) )
//    child2.dispatchEvent ( new Event ( ‘wheel’ ) )
//    child2.dispatchEvent ( new Event ( ‘keydown’ ) )
// } )
// child2.addEventListener( ‘click’, event => {                                                 < 클릭 시 >
//      console.log( ‘child2 Click!’ )                                     // child2 Click!, child2 Wheel!, child2 Keydown! 출력
// } )
// child2.addEventListener( ‘wheel’, event => { 
//      console.log( ‘child2 Wheel!’ )
// } )
// child2.addEventListener( ‘keydown’, event => { 
//      console.log( ‘child2 Keydown!’ )
// } )


// dispatchEvent : 인수로 생성자 함수(new)를 만들어 해당 이름을 적어주면 강제로 이벤트를 동작시킬 수 있다.



// 커스텀



// <JS파일>


// const child1 = document.querySelector ( ‘.child:nth-child ( 1 ) ’ )
// const child2 = document.querySelector ( ‘.child:nth-child ( 2 ) ’ )

// child1.addEventListener( ‘hello-world’, event => {
//  console.log( ‘커스텀 이벤트 발생!’ )
//  console.log( event.detail )
// } )
// child2.addEventListener( ‘click’, ( ) => {
//      child1.dispatchEvent( new CustomEvent( ‘hello-world’ {       
//                                 // 2번 클릭 시 1번에 적용된 커스텀 이벤트 발생! 출력
//                  detail: 123                                             // 123 (디테일 값 출력)
// } ) )
// } )

// CustomEvent 생성자함수 : 두 번째 인수에 객체 데이터로 해당 속성을 적은 뒤 그 속성에 원하는 데이터를 추가할 수 있다.

// 생성, 조회, 수정 


// ** document.createElement ( ) **

// 설명 :메모리에만 존재하는 새로운 HTML 요소를 생성해 반환합니다.



// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>



// <JS파일>

// const divEl = document.createElement ( ‘div’ )
// console.log( divEl )                                                    //  <div></div>

// const inputEl = document.createElement ( ‘input’ )
// console.log( inputEl )                                                    //  <input>






// ** E.prepend ( ),E.append ( ) **

// 설명 : 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입해준다.



// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>



// <JS파일>

// const parentEl = document.querySelector ( ‘.parent’ )

// const el = document.createElement ( ‘div’ )
// el.textContent = ‘Hello~’

// parentEl.prepend ( new Comment ( ‘ 주석 ’ ) )                      < - - 주석 - ->
// parentEl.append ( el,  Text!! ’)                                             //   <div class="parent">
//                                                                                                     <div class="child">1</div>
//                                                                                                     <div class="child">2</div>
//                                                                                                     <div> Hello~ </div>
//                                                                                                     “Text!!”
//                                                                                                     </div>
   


// ** E.remove ( ) **

// 설명 : 요소를 제거합니다.



// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>

// const el = document.querySelector ( ‘.child’ )

// el.remove ( )                                                        //   <div class="parent">
//                                                                                <div class="child">2</div>
//                                                                                </div>
//                                                                                                    (   <div class="child">1</div> 부분 사라짐 )






// ** E.insertAdjacentElement ( ) **

// 설명 : ‘대상 요소’의 지정한 위치에 ‘새로운 요소’ 를 삽입해준다.
//            ( 대상_요소.insertAdjacentElement ( 위치, 새로운_요소 )



// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>

// /* html */ `
// <!- - ‘beforebegin’ - ->
// <div class = 'target’ >

// <!- - ‘afterbegin’ - ->
// Content !

// <!- - ‘beforeend’ - ->
// </div>

// <!- - ‘afterend’ - ->`

// const childEl = document.querySelector ( ‘.child’ )
// const newEl = document.createElement ( ‘.child’ )
// newEl.textContent = ‘Hello~’

// childEl.insertAdjacentElement ( ‘beforebegin’, newEl )               //  <div class="parent">
//                                                                                                                                <span>Hello~</span>
//                                                                                                                     <div class="child">1</div>
//                                                                                                                     <div class="child">2</div>
//                                                                                                                     </div>





// ** N.insertBefore ( ) **

// 설명 : ‘부모 노드’의 자식인 ‘참조 노드’의 이전 형제로 ‘노드’를 삽입해준다.
//            ( 부모_노드.insertBefore ( 노드, 참조_노드 ) )



// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const parentEl = document.querySelector ( ‘.parent’ )
// const childEl = document.querySelector ( ‘.child’ )
// const newEl = document.createElement ( ‘span’ )
// newEl.textContent = ‘Hello~’

// parentEl.insertBefore ( newEl, childEl )               //  <div class="parent">





// ** N.contains ( ) **

// 설명 : ‘주어진 노드’가 ‘노드’의 자신을 포함한 후손인지 확인해준다.
//            ( 노드.contains ( 주어진_노드 ) )



// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const parentEl = document.querySelector ( ‘.parent’ )
// const childEl = document.querySelector ( ‘.child’ )

// console.log( parentEl.contains ( childEl ) )                                      // true       -> 후손 요소
// console.log( document.body.contains ( parentEl ) )                     // true               ‘’
// console.log( document.body.contains ( childEl ) )                         // true               ‘’
// console.log( document.body.contains ( document.body ) )       // true       -> 자신
// console.log( parentEl.contains ( parentEl ) )                                    // true       -> 자신
// console.log( parentEl.contains ( document.body ) )                      // false     -> 자식 요소 아님
// console.log( childEl.contains ( document.body ) )                          // false     -> 자식 요소 아님






// ** N.textContent **

// 설명 : 노드의 모든 텍스트를 얻거나 변경해준다.




// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const el = document.querySelector ( ‘.child’ )
// console.log( el.textContent )                                         //  1


// el.textContent = ‘7’
// console.log( el.textContent )                                        //  7






// ** E.innerHTML**

// 설명 : 요소의 모든 HTML 내용을 하나의 문자로 얻거나, 새로운 HTML을 지정해준다.




// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const el = document.querySelector ( ‘.parent’ )
// console.log( el.innerHTML )                                         // <div class="child">1</div>
//                                                                                            <div class="child">2</div>

// el.innerHTML = ‘< span style = "color: red;”>Hello~</span >’

// el.innerHTML = /* html */
// `<div style = "border: 4px solid;” >
//      < span style = "color: red;”>Hello~</span >
//      < span style = "color: red;”>Hello~</span >
// </div>`

// @ innerHTML속성을 사용하면 document.crearteElement 을 사용 안해도 해당 요소의 내용으로 삽입을 할 수 있다.
//     (많이 사용함)




// ** E.dataset **

// 설명 : 요소의 각 `data-` 속성 값을 얻거나 지정해준다.




// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const el = document.querySelector ( ‘.child’ )
// const str = ‘ Hello world! ’
// const obj = { a: 1, b: 2 }

// el.dataset.helloWorld = str
// el.dataset.object = JSON.stringify( obj )

// console.log( el.dataset.helloWorld )
// console.log( el.dataset.object )
// console.log( JSON.parse ( el.dataset.helloWorld ) )   


// JSON.stringify( obj ) : 인수로 들어오는 데이터를 전부 다 문자화 변경해준다.

// JSON.parse ( ) 메소드 : 문자화된 데이터를 실제 자바스크립트 데이터로 다시 변환해준다.


// //    Hello world!
//       { “a”: 1, “b”: 2 }  -> 문자화된 객체데이터
//       { a: 1, b: 2 }        -> 객체로 변경된 객체 데이터



// //    <div class="parent">
//       <div class="child" data-hello-world = “Hello world”  data-object = “{ a: 1, b: 2 }” >1</div>
//       <div class="child">2</div>
//       </div>






// ** E.tagName **

// 설명 : 요소의 태그 이름을 반환해준다.




// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const parentEl = document.querySelector ( ‘.parent’ )
// const childEl =  document.querySelector ( ‘.child’ )
// const el =  document.crearteElement ( ‘ span ’ )

// console.log( parentEl.tagName )                             //  DIV
// console.log( childEl.tagName )                                 //  DIV
// console.log( el.tagName )                                           //  SPAN
// console.log( document.body.tagName )               //  BODY





// ** E.id **

// 설명 : 요소의 `id` 속성 값을 얻거나 지정해준다.




// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const el =  document.querySelector ( ‘ .child ’ )
// console.log( el.id )                       //  빈문자 출력

// el.id = ‘child1’
// console.log( el.id )                        //  child1
// console.log( el )                             //  DIV


// HTML 파일 내부

//  //   <div class="child" id = "child1” >1</div>





// ** E.className **

// 설명 : 요소의 `class` 속성 값을 얻거나 지정해준다.




// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const el =  document.querySelector ( ‘ .child ’ )
// console.log( el.className )                       //  child

// el.className += ‘child1 active’
// console.log( el.className )                       //  child child1 active
// console.log( el )                                              //  <div class="child child1 active">1</div>






// ** E.classList **

// 설명 : 요소의 `class` 속성 값을 제어해준다.

// - `.add ( )`: 새로운 값을 추가
// - `.remove ( )`: 기존 값을 제거
// - `.toggle ( )`: 값을 토글
// - `.contains ( )`: 값을 확인



// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const el =  document.querySelector ( ‘ .child ’ )

// el.classList.add ( ‘active’ )
// console.log( el.classList.contains ( ‘active’ ) )                       // true  <div class="child active”>1</div>

// el.classList.remove ( ‘active’ )
// console.log( el.classList.contains ( ‘active’ ) )                       // false  <div class="child”>1</div> (삭제됨)

// el.addEventListener ( ‘click’, ( ) => { 
//   el.classList.toggle ( ‘active’ )
//    console.log( el.classList.contains ( ‘active’ ) )                     //  child
// } )





// ** E.style **

// 설명 : 요소의 `style` 속성( 인라인 스타일 )의 CSS 속성 값을 얻거나 지정해준다.



// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const el =  document.querySelector ( ‘ .child ’ )


// 개별 지정!
// el.style.width = ‘100px’
// el.style.width.fontSize = ‘20px’
// el.style.width.backgroundColor = ‘green’
// el.style.width.psition = ‘absolute’


// 한 번에 지정!
// Object.assign( el.style, {
//      width: ‘100px’,
//      fontSize: ‘20px’,
//      backgroundColor: ‘green’,
//      position: ‘absolute’
// })


// ( 위 코드 중 한 두개만 스타일 지정을 할때는 개별이 편하지만 여러개가 있다면 한번에 지정하는 방법이 유용하다)


// console.log( el.style )                                                // 
// console.log( el.style.width )                                    // 100px
// console.log( el.style.fontSize )                               // 20px
// console.log( el.style.backgroundColor )             // green
// console.log( el.style.position )                               // absolute






// ** window.getComputedStyle ( ) **

// 설명 : 요소에 적용된 스타일 객체를 반환해준다.



// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const el =  document.querySelector ( ‘ .child ’ )
// const styles =  window.getComputedStyle ( el )

// console.log( styles.width )                                     // 100px
// console.log( styles.fontSize )                                // 20px
// console.log( styles.backgroundColor )              // rgb( 0, 128, 0 )
// console.log( styles.position )                                // absolute









// ** E.getAttribute ( ) / E.setAttribute ( ) **

// 설명 : 요소에서 특정 속성 값을 얻거나 지정해준다.

// Attribute : HTML 속성을 지정할 때 사용하는 영어단어

// property : CSS 혹은 자바스크립트 속성을 지정할 때 사용하는 영어단어



// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const el =  document.querySelector ( ‘ .child ’ )


// el.setAttribute ( ‘title’ , ‘Hello World!’ )
// console.log( el.getAttribute( ‘title’ ) )                                // Hello World! 








// ** E.hasAttribute ( ) / E.removeAttribute ( ) **

// 설명 : 요소에서 특정 속성을 확인하거나 제거해준다.


// has : HTML 속성이 들어있는지 않은지 확인하는 영어단어

// property : 속성을 제거할 때 사용하는 영어단어





// <HTML파일>
//     <div class="parent">
//         <div class="child">1</div>
//         <div class="child">2</div>
//     </div>


// <JS파일>


// const el =  document.querySelector ( ‘ .child ’ )

// console.log( el.hasAttribute( ‘class’ ) )                                // true

// el.removeAttribute ( ‘class’ )    -> 속성 제거
// console.log( el.hasAttribute( ‘class’ ) )                                // false


// console.log( el )                                                                           // <div>1</div>

// DOM( Document Object Model )
// 검색과 탐색



// DOM이란? : HTML 문서를 객체로 표현한 것, JS에서 HTML을 제어할 수 있게 해줍니다.
// DOM API : 사용할 수 있는 다양한 명령들



// const element = document.querySelector( ‘h1’ )
// console.log( element.textContent )      // Hello world!






// ** Node vs Element **

// 설명 :  노드(Node)라는 것은  요소(Element)라는 객체에서 상속되어 만들어진 개념이다.
//            결국 하나의 요소는 하나의 노드이고, 그 노드에서 상속(파생)된 객체이다. 즉 노드가 요소보다 더 상위 개념이다.

//  노드(Node) : HTML 요소, 텍스트, 주석 등 모든 것을 의미
//  요소(Element): HTML 요소를 의미



// <HTML파일>
//  <div class="parent">
//         <!-- 주석 -->
//     <div class="child">1</div>
//     텍스트1
//     <div class="child">2</div>
//     텍스트2
//     </div>


// <JS파일>

// const parent = document.querySelector('./parent')

// ( 부모 요소의 모든 자식 노드 확인! )
// console.log(parent.childNodes)              // 모든 노드 요소가 출력 ( 노드 )

// ( 부모 요소의 모든 자식 요소 확인! )
// console.log(parent.children)                   // 



// @ Node vs Element 2번째 예제


// class N { }
// class E extends N { }  -> N 상속 받는 E

// console.dir( E )                                            // class E
// console.dir( N )                                           // class N
// console.dir( E.__proto__ )                        // class N

// console.dir( Element )                               // f Element ( )
// console.dir( Node )                                    // f Node ( )
// console.dir( Element.__proto__ )           // f Node ( )





// 검색과 탐색


// ** document.getElementById ( ) **

// 설명 : HTML `id` 속성( Attributes )값으로 검색한 요소를 반환해준다.
//            여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환해준다.
//            검색 결과가 없으면, `null`을 반환한다.



// <HTML파일>
//  <div class="parent">
//         <!-- 주석 -->
//     <div class="child">1</div>
//     텍스트1
//     <div id = "child2" class="child">2</div>
//     텍스트2
//     </div>


// <JS파일>

// const el = document.getElementById ( ‘child2’ )
// console.log( el )                                                   //   < div id = "child2" class="child" >2</div>







// ** document.querySelector ( ) **

// 설명 : ‘CSS 선택자’로 검색한 요소를 하나 반환해준다.
//            여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환해준다.
//            검색 결과가 없으면, `null`을 반환한다.



// <HTML파일>
//  <div class="parent">
//         <!-- 주석 -->
//     <div class="child">1</div>
//     텍스트1
//     <div id = "child2" class="child">2</div>
//     텍스트2
//     </div>


// <JS파일>

// const el = document.querySelector ( ‘ .child:first-child ’ )
// console.log( el )                                                   //  <div class="child">1</div>






// ** document.querySelectorAll ( ) **

// 설명 : ‘CSS 선택자’로 검색한 모든 요소를 `NodeList`로 반환해준다.
//            `NodeList` 객체는 `.forEach`를 사용할 수 있습니다.

// NodeList : node가 여러 개 들어있는 하나의 객체이다.
         



// <HTML파일>
//  <div class="parent">
//         <!-- 주석 -->
//     <div class="child">1</div>
//     텍스트1
//     <div id = "child2" class="child">2</div>
//     텍스트2
//     </div>


// <JS파일>

// const nodeList = document.querySelectorAll ( ‘ .child ’ )
// console.log( nodeList )                                                        // child클래스가 들어있는 모든 요소를 노드리스트로 출력
// nodeList.forEach ( el => console.log( el.textContent ) )              // 1 2 순서대로 출력


// 예시 ) console.log( Array.from( nodeList ).reverse ( ) )  
//                             // child클래스가 들어있는 모든 요소를 반전 시켜 노드리스트로 출력



// 유사 배열 ( array-like ) : 콘솔에 출력된 객체데이터를  배열데이터처럼 만들 때 사용

// Array.from : nodeList에서 forEach 메소드를 제외하고 배열데이터에서 여러 가지 메소드를 쓰고 싶을 때 사용

// .reverse ( ) : 코드 내용을 반전 시킬 때 사용한다.







// ** N.parentElement **

// 설명 : 노드의 부모를 반환해준다.
         



// <HTML파일>
//  <div class="parent">
//         <!-- 주석 -->
//     <div class="child">1</div>
//     텍스트1
//     <div id = "child2" class="child">2</div>
//     텍스트2
//     </div>


// <JS파일>

// const el = document.querySelector ( ‘ .child ’ )
// console.log( el.parentElement )                                      // <div class="parent"> ( child의 부모 태그를 출력 )








// ** E.closest 메소드 **

// 설명 : 자신을 포함한 조상 요소 중 ‘CSS 선택자’와 일치하는 가장 가까운 요소를 반환해준다
//           요소를 찾지 못하면, `null`을 반환한다.
         



// <HTML파일>
//  <div class="parent">
//         <!-- 주석 -->
//     <div class="child">1</div>
//     텍스트1
//     <div id = "child2" class="child">2</div>
//     텍스트2
//     </div>


// <JS파일>

// const el = document.querySelector ( ‘ .child ’ )

// console.log( el.closest ( ‘div’ ) )                                         // <div>태그 중 가장 가까운 자기자신이 출력
// console.log( el.closest ( ‘body’ ) )                                      // <body>태그가 출력
// console.log( el.closest ( ‘.hello’ ) )                                      // null (hello가 없음)








// ** N.previousSibling / N.nextSibling **

// 설명 : 노드의 이전 형제 혹은 다음 형제 노드를 반환해준다.
//          ( 노드에서만 사용 가능 )
         



// <HTML파일>
//  <div class="parent">
//         <!-- 주석 -->
//     <div class="child">1</div>
//     텍스트1
//     <div id = "child2" class="child">2</div>
//     텍스트2
//     </div>


// <JS파일>

// const el = document.querySelector ( ‘ .child ’ )
// console.log( el.previousSibling )                              //  # text ( 이전 코드에 줄바꿈된 부분이 출력 )
// console.log( el.nextSibling )                                      // “ 텍스트1 ”



// previous : 이전을 뜻한다.


// next : 다음을 뜻한다.


// Sibling : 형제 자매를 뜻한다.







// ** E.previousElementSibling / E.nextElementSibling **

// 설명 : 요소의 이전 형제 혹은 다음 형제 요소를 반환해준다.
        
         



// <HTML파일>
//  <div class="parent">
//         <!-- 주석 -->
//     <div class="child">1</div>
//     텍스트1
//     <div id = "child2" class="child">2</div>
//     텍스트2
//     </div>


// <JS파일>

// const el = document.querySelector ( ‘ .child ’ )
// console.log( el.previousElementSibling )                              // null  ( 다음이 없음 )
// console.log( el.nextElementSibling )                                      //  <div id = "child2" class="child">2</div>







// ** E.children **

// 설명 : 요소의 모든 자식 요소를 반환해준다.
         
         



// <HTML파일>
//  <div class="parent">
//         <!-- 주석 -->
//     <div class="child">1</div>
//     텍스트1
//     <div id = "child2" class="child">2</div>
//     텍스트2
//     </div>


// <JS파일>

// const el = document.querySelector ( ‘ .parent ’ )
// console.log( el.children )                              // parent의 모든 자식 요소들이 출력 

// console.log ( Array.from ( el.children ) )             // 위 코드가 출력 시 객체데이터로 반환되기 때문에 
//                                                                                               그 유사배열을 배열데이터로 바꿔서 출력함






// ** E.firstElementChild / E.lastElementChild **

// 설명 : 요소의 첫 번째 자식 혹은 마지막 자식 요소를 반환해준다.
         
         



// <HTML파일>
//  <div class="parent">
//         <!-- 주석 -->
//     <div class="child">1</div>
//     텍스트1
//     <div id = "child2" class="child">2</div>
//     텍스트2
//     </div>


// <JS파일>

// const el = document.querySelector ( ‘ .parent ’ )
// console.log( el.firstElementChild )                    //  <div class="child">1</div> ( 첫 번째 child부분 출력 )
// console.log( el.lastElementChild )                             
//  //  <div id = "child2" class="child">2</div> ( 마지막 child부분 출력 )
































































































//Node vs Element

// - 노드(Node) : HTML 요소, 텍스트, 주석 등 모든 것을 의미
// - 요소(Element): HTML 요소를 의미

const parent = document.querySelector('.parent')

// 부모 요소의 모든 자식 노드 확인!
console.log(parent.childNodes)

// 부모 요소의 모든 자식 요소 확인!
console.log(parent.children)

console.log(parent)