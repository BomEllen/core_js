
// named export        => import { } from '..'
// 얘도 알리하스로 이름 바꿀 수 있긴 함.

// default export      => export default로 내보내서 중괄호 없이 받을 수 있다. import ... from '..'
// 내보내는게 하나밖에 없을 때 내가 원하는 이름으로 받을 수 있다. 어차피 그 파일에서 내보내는건 하나니까.


// import {getNode, getNodes} from './lib/dom/getNode.js';
// import {insertLast} from './lib/dom/insert.js'
// import clearContents from './lib/dom/clearContents.js';


import { getNode, getNodes, typeError, insertLast, clearContents } from "./lib/index.js";






// 1. input 선택하기
// 2. input 이벤트 바인딩
// 3. input의 value 값 가져오기
// 4. 숫자 더하기
// 5. result에 출력하기

/* global clearContents */

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

function handleInput() {
  const firstValue = Number(first.value);
  const secondValue = +second.value;
  const total = firstValue + secondValue;

  clearContents(result);
  insertLast(result, total);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
