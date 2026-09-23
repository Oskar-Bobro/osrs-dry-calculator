function updateResult() {
  const expectedHours = dropRateElement.value / killsInputElement.value;
  resultElement.textContent = `Expected kills: ${dropRateElement.value} kills`;
  resultElement.textContent += `, Expected time: ${expectedHours.toFixed(1)} hours`;
}

const resultElement = document.getElementById("result");
const killsInputElement = document.getElementById("killsInput");
const dropRateElement = document.getElementById("dropRateInput");

killsInputElement.addEventListener("input", updateResult);
dropRateElement.addEventListener("input", updateResult);
