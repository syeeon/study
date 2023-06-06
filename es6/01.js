// 원시형 타입 : number, string, boolean, null, undefined, simbol


//number

let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
console.log("sum", sum, ":자료형?-", typeof sum);
// cd 해당 폴더 이름 -> node 파일명
// 터미널 내 cd es6 -> node 01.js -> 결과값 1  터미널 내 출력 


//string
let str1 = "1";
let str2 = "2";
let para = str1 + str2;
console.log("para", para, ":자료형?-", typeof para);
// 12 출력, 타입 string

//boolean
let fact = true;
console.log(typeof fact);

//null
let temp = null;
console.log("null", typeof tepm);
// 빈 값

//undefined
let noName;
console.log("noName", typeof noName);
// 아직 정의되지 않은, 미정이라고 읽기


// -------------------


//참조형 타입 (reference type) : object(객체), array(배열), function(함수)

//object 
let person = {
    name : '승연',
    age : 27,
};
console.log("person", person.name, typeof person);
//식별자 내 키로 출력하기

//array
let array = [1,2,3];
console.log("array", array[0]);
//식별자[대괄호]로 출력하고 싶은 순서 입력하기

//function
function addNum(num1, num2){
    return num1 + num2;
};
console.log("addNum", typeof addNum, addNum(10, 50));


// ------------------
//참조형 (객체/비원시타입) 의 비교 == 얕은 비교라고 함

let a = {
     count : 1 
    };
let b = {
     count : 1 
    };
//let b = a; a를 b에 집어 넣는다, 할당한다 // b와 a가 동일하다가 아님!!
if ( a === b){ //같지 않다
    console.log("같다");
} else {
    console.log("같지않다");
};

// 객체를 비교하는 방법은 값을 보지 않고 메모리 주소값을 비교하기 때문에 결과값 같지 않다임 : 이런걸 얕은 비교라고 한다
// 자바스크립트에서 비원시 타입은 모두 얕은 비교를 함 ( 주소가 동일한지 )
