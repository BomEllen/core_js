/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(String(YEAR));
console.log(YEAR + '');

// undefined, null

let days = null;
console.log(days + '');

let undef = undefined;
console.log(undef + '');

// boolean
let isClicked = true;
console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null

let money = null;
console.log(money);

// boolean
let isActive = false;
console.log(isActive * 1);

// string
let num = '100';
console.log(num);

// numeric string
const width = '123.33px';
console.log(width * 1);

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
