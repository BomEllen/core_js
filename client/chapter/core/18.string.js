/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);

// 부분 문자열 추출
let slice = message.slice();
let subString = message.substring(2, 5);

// let subStr = message.substr();



// 문자열 포함 여부 확인

// 확인하고 인덱스 번호 반환  근데 없는 값을 찾으면 음수 값을 반환.
let indexOf = message.indexOf('has');

// 이런식으로 사용자의 브라우저를 확인하는 방법으로 쓸 수 있음. (아래 코드 참고)

let indexOf = message.indexOf('has');

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Apple Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'FireFox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
    default:
      browserName = '무슨 브라우저에요..?';
  }

  return browserName;
}





let lastIndexOf; // 뒤에서 부터 탐색해서 찾아내어, 순서 반환하는 애

// 포함하는지
let includes = message.includes('Less');

// 어떤 단어로 시작하는지 구분
let startsWith = message.startsWith('Less');

// 어떤 단어로 끝나는지
let endsWith = message.endsWith('more.');




let str = '             a              b          c  d          ';

// 공백 잘라내기
let trimLeft = str.trimLeft();
let trimRight;
let trim = str.trim();
let replaceAll = str.replaceAll(' ', '');
let replace = str.replace(/\s*/g, '');

// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
