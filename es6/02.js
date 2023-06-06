// map함수 for 문처럼 배열 안에 원소를 한개씩 순회하면서 한번씩 리턴해줌

const numbers = [1,2,3,4,6];
const double = numbers.map((x)=> {
    return x*2;
});
console.log(double);
// map은 .map 작성 후 소괄호 안에 다시 함수를 작성해준다
// 매개변수를 만들어주면 매개변수가 numbers 원소들을 *2 해서 double에 새배열을 만들어줌