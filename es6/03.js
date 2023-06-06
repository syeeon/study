//destructuring : 구조분해할당 -> 값을 쉽게 꺼내서 씀

//array
const arr = [1,2,3];
const a = arr[0]; //1
const b = arr[1]; //2
const c = arr[2]; //3
console.log(`a=${a} b=${b} c=${c}`);  // : 기존 할당 방식

const [f, d, e] = arr;
console.log(`d=${d} e=${e} f=${f}`); // 구조 분해 할당 방식 -> 새로운 식별자를 대괄호에 넣어서 바로 할당하기
// 배열의 경우 순서가 기준


//object
var obj = {
    x : 1,
    y : 2,
    z : 3
};
var x = obj.x
var y = obj.y
var z = obj.z
console.log(`x : ${x} \n y : ${y} \n z: ${z}`); 

var {z, x, y} = obj; 
//새 속성에 재할당
var {z:nz, x:nx, y:ny} = obj; 

console.log(`nx : ${nx} \n ny : ${ny} \n nz: ${nz} ${z===nz}`); 
// 객체의 경우 이름 식별자가 기준

