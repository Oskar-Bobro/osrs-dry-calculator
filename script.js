function updateResult() {
  const killsPerhour = killsInputElement.valueAsNumber;
  const dropRate = dropRateElement.valueAsNumber;
  const expectedHours = dropRate / killsPerhour;
  resultElement.textContent = `Expected kills: ${dropRate} kills`;
  resultElement.textContent += `, Expected time: ${expectedHours.toFixed(1)} hours`;
}

const resultElement = document.getElementById("result");
const killsInputElement = document.getElementById("killsInput");
const dropRateElement = document.getElementById("dropRateInput");

killsInputElement.addEventListener("input", updateResult);
dropRateElement.addEventListener("input", updateResult);
