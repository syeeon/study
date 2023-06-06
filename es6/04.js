// sperad-operator 펼침 연산자 : 기존 배열을 유지하면서 요소 값의 추가, 수정을 할 때 쉽게 할 수 있음
// 반복할 수 있는 요소인 배열에만 사용이 가능함

//array
const arr1 =[1,2,5];
const arr2 =[1,2,5];
const arr3 = [...arr1, ...arr2]; // arr1 과 arr2 을 합친 125125 로 새배열을 만들어줌
console.log(arr3);

//object 
const obj1 = {a:1, b:2};
const obj2 = {a :1, b:2};
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);