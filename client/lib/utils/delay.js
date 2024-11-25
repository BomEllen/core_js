import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./type.js";




// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }



// const first = getNode(".first");
// const second = getNode(".second");



// // delay(() => {
  
// //   first.style.top = '-100px';

// //   delay(() => {

// //     first.style.transform = "rotate(360deg)"
// //   })

// //   delay(() => {
// //     first.style.top = "0px";
// //   })
// // })


// const shouldRejected = false;

// const p = new Promise((성공, 실패) => {
  
//   if (!shouldRejected) {
//     성공("성공")
//   } else {
//     실패("실패")
//   }


// })


// p.then((res) => {
//   // console.log(res);
// })




// // promise 객체를 반환하는 함수 => 재사용

// const defaultOptions = {
//   shouldRejected: false,
//   data: '성공',
//   errorMessage: '알 수 없는 오류',
//   timeout: 1000,
// };



// function delayP(options) {

//   let config = { ...defaultOptions, ...options }


//   if (inNumber(options)) {

//   }

//   if (isObject)




//   isNumber
  
//   const {shouldRejected, data, errorMessage, timeout} = config

//   return new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//       if (!shouldRejected) {
//         resolve('성공');
//       } else {
//         reject('실패');
//       }
      
//     })

//   })



// }


// delayP()



// console.log("res.website");



// document.body.insertAdjacentElement("beforeend", tag)











async function d() {
  return 1;
}

const _d = d();



console.log();



async function delayA() {
  
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve('성공')
    }, 2000)
  });
  
  const result = await p
  
  return result;
}


console.log(delayA());



















