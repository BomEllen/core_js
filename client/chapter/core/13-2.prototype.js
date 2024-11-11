/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.



// class Animal {


//   legs = 4;    //private fild = 이 변수를 다른 곳에서 절대 사용하지 못하게. 이 클래스 안에서만 사용할 수 있게.
//   tail = true;
//   #name = 'unknown';

//   constructor(name) {   // 최초 1회만 실행됨. 그래서 초기화에 많이 씀.
//     this.#name = name
//     this.stomach = [];
//     // console.log(this.#name);
//   }

//   get eat() {
//     return this.stomach;
//   }

//   set eat(food) {
//     this.stomach.push(food);
//   }

// }



// class Tiger extends Animal {


//   static defaultProps = {
//     version: '1.0.0',
//     company: '8b-studio',
//     ceo: '심선범',
//   };


//   constructor(name) {
//     //전달할 내용이 없으면 cosntructor 꼭 안써도 괜찮음
//     super(name); //특정 메소드를 확장해오면 이걸 꼭 써야함. call과 같은 기능.
//     this.pattern = '호랑이 무늬';
//   }

//   hunt(target) {
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`;
//   }

//   static bark(sound) {
//     return sound + '🐯';
//   }
// }



// // const a = new Animal('주연');
// const 호랭이 = new Tiger('호돌이');

// const arr = new Array()


// arr.forEach()
// Array.isArray()

// class Array extends Object(){
  
//   forEach(){

//   }

//   reduce(){

//   }

//   static isArray(){

//   }
// }




/* 
1. 버튼 선택
2. 클릭 이벤트
3. 태그 만들기
4. 태그 화면에 랜더링 하기
*/


// class로 작성해보기

class Button{

  #value = 100;

  constructor(selector){
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
 
    
  }

  static showMessage(selector){
    console.log(document.querySelector(selector).textContent);
  }

  createTag(){
    return `<div>${++this.count + 'clicked'}</div>`
  }
  
  #render(){ // private field
    document.body.insertAdjacentHTML('beforeend',this.createTag())
  }

  handleClick(){
    this.#render()
  }
  
  attachEvent(){
    this.button.addEventListener('click',()=> this.handleClick())
  }

}

const button = new Button('.btn');


const button2 = new Button('.btn2');










// 버튼을 활용하여 클릭이벤트 주는 코드

// const _button = document.querySelector('.btn');

// let count = 0;

// function createTag() {
//   return `<div>${++count + 'clicked'}</div>`;
// }

// function render(data) {
//   document.body.insertAdjacentHTML('beforeend', data);
// }

// function handleClick() {
//   render(createTag());
// }

// _button.addEventListener('click', handleClick);





// 위와 같은 코드지만 함수가 분리가 안 된 버전 (한 함수에 너무 많은 역할을 하는 중)


// const button = document.querySelector('.btn');

// let count = 0;

// function handleClick() {
//   const tag = `
//     <div>${++count + 'clicked'}</div>
//   `;

//   document.body.insertAdjacentHTML('beforeend', tag);
// }

// button.addEventListener('click', handleClick);





// class 문법이 따로 있고,
// constructor를 정의한다.

class User {
  
  #password;

  constructor(userID,userPW){
    this.userID = userID;
    this.#password = this.hashPassword(userPW);
  }

  hashPassword(pw){
    return 'hashCODE' + pw + '소금챱챱';
  }

  checkPassword(pw){
    return this.#password === this.hashPassword(pw);
  }
}


const user = new User('tiger','hello123');



// class AdminUser extends User{

//   checkPassword(){
//     this.#password
//   }
// }






















