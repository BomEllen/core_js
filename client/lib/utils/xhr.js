

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete  => 성공 | 실패


const xhr = new XMLHttpRequest();


xhr.open('GET',END_POINT);


xhr.addEventListener('readystatechange',()=>{

  if(xhr.readyState === 4){

    if(xhr.status >= 200 && xhr.status < 400){

      console.log(xhr.response);

    }else{

      console.error('실패ㅜㅜ');
      
    }

  }

})






xhr.send();







