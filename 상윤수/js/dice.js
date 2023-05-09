let winCount = 0;
let loseCount = 0;

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

function handleClick() {
  const roll = rollDice();
  const opponentRoll = rollDice();

  const diceRoll = document.getElementById("dice-roll");
  diceRoll.textContent = `당신의 주사위 결과: ${roll}`;

  const opponentRollElement = document.getElementById("opponent-roll");
  opponentRollElement.textContent = `상대방의 주사위 결과: ${opponentRoll}`;

  const resultText = document.getElementById("result-text");
  if (roll > opponentRoll) {
    resultText.textContent = "승리";
    winCount++;
  } else if (roll < opponentRoll) {
    resultText.textContent = "패배";
    loseCount++;
  } else {
    resultText.textContent = "무승부";
  }

  const winRate = document.getElementById("win-rate");
  const total = winCount + loseCount;
  if (total > 0) {
    winRate.textContent = ((winCount / total) * 100).toFixed(2);
  } else {
    winRate.textContent = "0";
  }
}

function handleReset() {
  winCount = 0;
  loseCount = 0;

  const winRate = document.getElementById("win-rate");
  winRate.textContent = "0";
}

const rollButton = document.getElementById("roll-button");
rollButton.addEventListener("click", handleClick);

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", handleReset);
