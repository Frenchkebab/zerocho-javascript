// 원소가 9개인 텅 빈 배열 생성
Array(9);

// undefined 9개가 있는 배열 생성
Array(9).fill();

// 0이 9개가 들어있는 배열 생성
Array(9).fill(0);

// [1, 2, 3, ... 7, 8, 9] 배열 생성
Array(9)
    .fill()
    .map((el, idx) => {
        return idx + 1;
    });
