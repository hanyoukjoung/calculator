const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let numbers = []
for (let n = 0; n <= 9; n += 1){
    numbers.push(n)
}

//let numbers = Array(10).fill().map((v,i) => i)

let answer = []
let n = 0
while (n <= 3){
    const index = Math.floor(Math.random()*numbers.length) //0 ~9
    answer.push(numbers[index])
    numbers.splice(index, 1)
    n += 1
} 
console.log(answer)
// '3046', '4316'



let count = 0
check.addEventListener('click',() => {
    const value = input.value //문자열 ex) '3046'
    if (value && value.length === 4) { // 엔퍼센트 AND 연산자 보호 연산자 
        if(answer.join('') === value){
           // console.log('같다'+value.split(''));
           logs.appendChild(document.createTextNode('HR'))
        } else {
            console.log('다르다');
            let strike = 0;
            let ball = 0;
            for (const [aIndex,anumber] of answer.entries()) {
               // console.log(number)
                for (const [iIndex,iString] of input.value.split('').entries()) {
                    if (anumber === Number(iString)) {
                        if(aIndex === iIndex){
                            strike += 1
                        }else{
                            ball += 1
                        }
                    }
                }

            }
           
            if (count > 10) {
               // logs.appendChild(document.createTextNode(`Ganme Over : ${answer.join('')}`))
               logs.append(`Ganme Over : ${answer.join('')}`,document.createElement('br'))
            } else {
                 logs.append(`${input.value} : ${strike} strike ${ball} ball`,document.createElement('br'))
                count += 1
            }

        }
    }
});


