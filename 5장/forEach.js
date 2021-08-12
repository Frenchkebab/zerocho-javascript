const answer = [3, 1, 4, 6];
const value = '3214';

let strike = 0;
let ball = 0;

answer.forEach((element, i) => {
    const index = value.indexOf(element);
    if (index > -1) {
        if (index === i) {
            strike += 1;
        } else {
            ball += 1;
        }
    }
});
