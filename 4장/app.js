let numOne = "";
let operator = "";
let numTwo = "";

// 태그선택
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNumber = (number) => () => {
  // return undefined;

  // 두 번째 자리는 '함수' 자리!

  //   return () =>
  {
    if (operator) {
      numTwo += number;
    } else {
      // 비어있다
      numOne += number;
    }
    $result.value += number;
  } // 고차 함수 (high order function)
};

// 버튼 하나하나를 자바스크립트 동작으로 정의함
document.querySelector("#num-0").addEventListener("click", onClickNumber("0"));
document.querySelector("#num-0").addEventListener("click", onClickNumber("1"));
document.querySelector("#num-0").addEventListener("click", onClickNumber("2"));
document.querySelector("#num-0").addEventListener("click", onClickNumber("3"));
document.querySelector("#num-0").addEventListener("click", onClickNumber("4"));
document.querySelector("#num-0").addEventListener("click", onClickNumber("5"));
document.querySelector("#num-0").addEventListener("click", onClickNumber("6"));
document.querySelector("#num-0").addEventListener("click", onClickNumber("7"));
document.querySelector("#num-0").addEventListener("click", onClickNumber("8"));
document.querySelector("#num-0").addEventListener("click", onClickNumber("9"));

document.querySelector("#plus").addEventListener("click", () => {});
document.querySelector("#divide").addEventListener("click", () => {});
document.querySelector("#multiply").addEventListener("click", () => {});
document.querySelector("#calculate").addEventListener("click", () => {});
document.querySelector("#clear").addEventListener("click", () => {});
