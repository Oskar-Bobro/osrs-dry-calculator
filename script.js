function updateResult() {
  const killsPerHour = killsInputElement.valueAsNumber;
  const dropRate = dropRateElement.valueAsNumber;
  const killsSoFar = killsSoFarElement.valueAsNumber;
  if (Number.isNaN(killsPerHour) || killsPerHour <= 0) {
    resultElement.textContent = "Enter kills per hour above 0.";
    return;
  }
  if (Number.isNaN(dropRate) || dropRate < 1) {
    resultElement.textContent = "Enter a drop rate of 1 or more.";
    return;
  }
  if (Number.isNaN(killsSoFar) || killsSoFar < 0) {
    resultElement.textContent = "Enter kills so far of 0 or more.";
    return;
  }
  const expectedHours = dropRate / killsPerHour;
  const rate = 1 / dropRate;
  const dryChance = (1 - rate) ** killsSoFar;
  resultElement.textContent = `Expected kills: ${dropRate} kills`;
  resultElement.textContent += `, Expected time: ${expectedHours.toFixed(1)} hours`;
  resultElement.textContent += `, Chance of still being dry: ${(dryChance * 100).toFixed(1)}%`;
}

const resultElement = document.getElementById("result");
const killsInputElement = document.getElementById("killsInput");
const dropRateElement = document.getElementById("dropRateInput");
const killsSoFarElement = document.getElementById("killsSoFarInput");

killsInputElement.addEventListener("input", updateResult);
dropRateElement.addEventListener("input", updateResult);
killsSoFarElement.addEventListener("input", updateResult);
