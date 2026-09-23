function updateResult() {
  resultElement.textContent = `Kills per hour: ${killsInputElement.value}`;
  resultElement.textContent += `, Drop rate: 1/${dropRateElement.value}`;
}

const resultElement = document.getElementById("result");
const killsInputElement = document.getElementById("killsInput");
const dropRateElement = document.getElementById("dropRateInput");

killsInputElement.addEventListener("input", updateResult);
dropRateElement.addEventListener("input", updateResult);
