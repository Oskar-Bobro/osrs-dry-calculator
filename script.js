const resultElement = document.getElementById("result");
const inputElement = document.getElementById("killsInput");

inputElement.addEventListener("input", () => {
  resultElement.textContent = `Kills per hour: ${inputElement.value}`;
});
