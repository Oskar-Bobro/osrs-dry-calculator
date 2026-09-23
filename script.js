function updateResult() {
  resultElement.textContent = `Kills per hour: ${inputElement.value}`;
}

const resultElement = document.getElementById("result");
const inputElement = document.getElementById("killsInput");

inputElement.addEventListener("input", updateResult);
