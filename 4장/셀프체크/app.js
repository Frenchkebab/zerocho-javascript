let numOne = "";
let operator = "";
let numTwo = "";
// 태그선택
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  // operator가 있으면
  if (!numTwo) {
    // operator 누른 후 numTwo를 아직 입력하지 않았으면
    $result.value = "";
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
};

const onClickOperator = (op) => () => {
  if (numTwo) {
    // 지금 계산할 연산자는 이전에 입력된 것
    $operator.value = op;
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
    numOne = $result.value;
    numTwo = "";
    // operator에 새로운 연산자 입력
    operator = op;
  } else {
    // numTwo가 없는 경우
    if (operator) {
      // numTwo는 없지만 operator는 이미 있는 경우
      console.log("numTwo는 없지만 operator는 이미 있는 경우");
      // 연산자가 "-"인 경우
      if (op === "-") {
        numTwo += "-";
        $result.value = numTwo;
        return;
      }
      // 다른 연산자인 경우
      operator = op;
      $operator.value = op;
    } else {
      // numTwo, operator 모두 없는 경우
      console.log("numTwo, operator 모두 없는 경우");

      if (numOne) {
        // numOne만 있는 경우
        console.log("numOne만 있는 경우");

        operator = op;
        $operator.value = op;
      } else {
        // numTwo, operator, numOne모두 없는 경우
        if (op === "-") {
          console.log("numTwo, operator, numOne모두 없는 경우");
          numOne += "-";
          $result.value += numOne;
        } else {
          alert("숫자를 먼저 입력하세요.");
        }
      }
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
    // numTwo가 없으면 알람
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
