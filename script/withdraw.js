document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawElement = document.getElementById("withdraw-amount");
  const newInputElement = getInputFieldValue("withdraw-field");
  const withdrawFieldElement = getInputTextValueId("withdraw-amount");
  const balanceElement = document.getElementById("balance-amount");
  const balanceTextElement = getInputTextValueId("balance-amount");
  const balanceTotal = balanceTextElement - newInputElement;
  const withdrawTotal = withdrawFieldElement + newInputElement;
  balanceElement.innerText = balanceTotal;
  withdrawElement.innerText = withdrawTotal;
});
