let numOne = "";
let operator = "";
let numTwo = "";
// 태그선택
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNumber = (event) => {
  if (!operator) {
    // 비어있다
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  // 비어있지 않다
  if (!numTwo) {
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};

const onClickOperator = (op) => () => {
  if (numTwo) {
    operator = op;
    $operator.value = op;
    if (numTwo) {
      switch (operator) {
        case "+":
          $result.value = parseInt(numOne) + parseInt(numTwo);
          break;
        // 빼기, 곱하기, 나누기는 문자열이 숫자로 바뀐다!
        case "-":
          $result.value = numOne - numTwo;
          break;
        case "*":
          $result.value = numOne * numTwo;
          break;
        case "/":
          $result.value = numOne / numTwo;
          break;
        default:
          break;
      }
    } else {
      alert("숫자를 먼저 입력하세요.");
    }
    numOne = $result.value;
    numTwo = "";
  } else {
    if (numOne) {
      operator = op;
      $operator.value = op;
    } else {
      alert("숫자를 먼저 입력하세요.");
    }
  }
};

// 버튼 하나하나를 자바스크립트 동작으로 정의함
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document.querySelector("#minus").addEventListener("click", onClickOperator("-"));
document.querySelector("#divide").addEventListener("click", onClickOperator("/"));
document.querySelector("#multiply").addEventListener("click", onClickOperator("*"));
document.querySelector("#calculate").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      // 빼기, 곱하기, 나누기는 문자열이 숫자로 바뀐다!
      case "-":
        $result.value = numOne - numTwo;
        break;
      case "*":
        $result.value = numOne * numTwo;
        break;
      case "/":
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
  } else {
    alert("숫자를 먼저 입력하세요.");
  }
  numOne = $result.value;
  numTwo = "";
});

document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});
