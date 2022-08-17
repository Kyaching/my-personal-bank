function getInputFieldValue(inputId) {
  const inputFieldAmount = document.getElementById(inputId);
  const inputElementString = inputFieldAmount.value;
  const inputElement = parseFloat(inputElementString);
  inputFieldAmount.value = "";
  return inputElement;
}

function getInputTextValueId(inputId) {
  const inputValueElement = document.getElementById(inputId);
  const prevInputValueString = inputValueElement.innerText;
  const prevInputValue = parseFloat(prevInputValueString);
  return prevInputValue;
}
