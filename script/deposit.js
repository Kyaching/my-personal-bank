document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositElement = document.getElementById("deposit-amount");
  const newInputElement = getInputFieldValue("deposit-field");
  const textFieldElement = getInputTextValueId("deposit-amount");
  const balanceElement = document.getElementById("balance-amount");
  const balanceTextElement = getInputTextValueId("balance-amount");
  const balanceTotal = balanceTextElement + newInputElement;
  const depositTotal = textFieldElement + newInputElement;
  balanceElement.innerText = balanceTotal;
  depositElement.innerText = depositTotal;
});
