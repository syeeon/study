//class : 객체의 모양과 동작을 미리 정해놓은 틀 

class Breed {
    constructor() {
        this.kind =  "말티즈"
    }
    printKind() {
        console.log(this.kind);
    }
}
class Dog extends Breed { // 클래스 이름은 보통 앞 글자를 대문자로 씀 // extends : 상속하다 
    //생성자
    constructor() { // 객체가 태어남
        super(); // Breed 안에 있는 속성을 모두 가져올 수 있음
        this.name = "망고";
    } 
    
    //메서드
    method() {//메서드 이름은 따로 지을 수 있음
        console.log("강아지", this.name);
    } 
}
const dog = new Dog(); // 클래스인스턴드,  new 라는 키워드로 클래스 이름을 부름 
dog.method();
dog.printKind();