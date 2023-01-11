const numInput = document.querySelector("#num");
const operator = document.querySelector("#operator");
const resultTxt = document.querySelector("#resultTxt");

const calculate = () => {
  let result = 0;
  switch (operator.value) {
    case "+":
      result = numInput.value + numInput.value;
      break;
    case "-":
      result = numInput.value - numInput.value;
      break;
    case "*":
      result = numInput.value * numInput.value;
      break;
    case "/":
      result = numInput.value / numInput.value;
      break;
    default:
      result = 0;
  }
  resultTxt.textContent = result;
};
/*to choose the operator numbers in the calculator
appendNumber(number);
{
  this.number = this.numInput.string();
}
chooseOperator(operator);
{
  if (this.NumInput === "") return;
  if (this.NumInput !== "") compute;
  {
    this.compute();
  }
  this.operation = operation;
  this.number = this.NumInput;
  this.customElements = "";
}*/
