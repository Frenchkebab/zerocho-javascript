const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let n = 1; n < 10; n++) {
    numbers.push(n);
}

const answer = [];
for (let n = 0; n < 4; n += 1) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}

console.log(answer);

const tries = [];

function checkInput(input) {
    // 검사하는 코드
    if (input.length !== 4) {
        return alert('4자리 숫자를 입력해 주세요.');
    }
    // Set을 만들어줌 (중복을 제거한 배열)
    if (new Set(input).size !== 4) {
        return alert('중복되지 않게 입력해 주세요.');
    }
    // 이미 시도한 값이 아닌지
    if (tries.includes(input)) {
        return alert('이미 시도한 값입니다.');
    }
    return true;
}

$form.addEventListener('submit', (event) => {
    event.preventDefault(); // 기본 동작 막기
    const value = $input.value;
    // const value = event.target.value 라고 해도 됨!
    $input.value = '';

    // 통과하지 않은 애들은 버려서 펴주는 테크닉
    // if(checkInput(value)){
    // }else{
    // }
    const valid = checkInput(value);
    if (!valid) return;

    // 입력값 문제 없음
    if (answer.join('') === value) {
        // [3, 1, 4, 6] -> '3146'
        $logs.textContent = '홈런!';
        return;
    }
    if (tries.length >= 9) {
        const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
        // 그냥 예시로 나온 것. 실제로는 append를 사용하면 된다!
        $logs.appendChild(message);
        return;
    }

    // 몇 스트라이크 몇 볼인지 검사
    let strike = 0;
    let ball = 0;
    // answer: 3146, value: 1234
    for (let i = 0; i < answer.length; i++) {
        const index = value.indexOf(answer[i]);
        // 일치하는 숫자 발견
        if (index > -1) {
            // index까지 같으면
            if (index === i) {
                strike += 1;
            } else {
                ball += 1;
            }
        }
    }
    $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
    tries.push(value);
});
