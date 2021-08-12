const array = [1, 2, 3, 4];
// const result = [];
// for (let i = 0; i < 4; i++) {
//     result.push(array[i] * 2);
// }

const result = array.map((element, i) => {
    return element * 2;
});
