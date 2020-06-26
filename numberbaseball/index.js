const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let answer = []
let n = 0
while (n <= 3){
    //n자리 생성
    answer[n] = Math.floor(Math.random() * 10) //n번째 자리 생성 
    n = n + 1
    // n = n - 1  n-=1
    // n = n + 2  n+=2
    // n = n * 2  n*=2
} 

let count = 0
check.addEventListener('click',() => {
    const value = input.value //문자열 ex) '3046'
    if (value && value.length === 4) { // 엔퍼센트 AND 연산자 보호 연산자 
        
    }
});


