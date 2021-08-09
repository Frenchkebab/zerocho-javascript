let numOne = "";
let operator = "";
let numTwo = "";

// 태그선택
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNumber = (event) => {
  if (operator) {
    numTwo += event.target.textContent;
  } else {
    numOne += event.target.textContent;
  }
};

// 버튼 하나하나를 자바스크립트 동작으로 정의함
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-0").addEventListener("click", onClickNumber);

document.querySelector("#plus").addEventListener("click", () => {});
document.querySelector("#divide").addEventListener("click", () => {});
document.querySelector("#multiply").addEventListener("click", () => {});
document.querySelector("#calculate").addEventListener("click", () => {});
document.querySelector("#clear").addEventListener("click", () => {});
