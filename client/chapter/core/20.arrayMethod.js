/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray


const people = [
  {
    id:0,
    name:'MJ',
    age:37,
    job:'음악하는 재미교포',
    imgSrc:'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt:'대체 텍스트입니다..'
  },
  {
    id:1,
    name:'이성우',
    age:13,
    job: '모집운동가',
    imgSrc:'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt:'대체 텍스트입니다..'
  },
  {
    id:2,
    name:'윤헌주',
    age: 43,
    job: '물음표살인마',
    imgSrc:'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt:'대체 텍스트입니다..'
  },
  {
    id:3,
    name:'김미리',
    age: 36,
    job: '얼리버드',
    imgSrc:'https://randomuser.me/api/portraits/med/women/30.jpg',
    imgAlt:'대체 텍스트입니다..'
  }
]

/* 요소 순환 ---------------------------- */

// forEach

function user(user){
  // console.log( user );
}

people.forEach(user);


// delegation ->  위임 

const span = document.querySelectorAll('span');

span.forEach((elem,index)=>{

  elem.addEventListener('click',function() {
    
    this.style.color = 'orange';

    console.log( index );
    
  })
  
})



/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
const reverse = people.toReversed();

// console.log( reverse );


// splice
const splice = people.toSpliced(2,1,{name:'선범'})


// sort

const arr = [5,4,2,7,5,1]

function compare(a,b){
  if(a > b) return 1;
  if(a == b) return 0;
  if(a < b) return -1;
}

const sort = people.sort(compare)

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join