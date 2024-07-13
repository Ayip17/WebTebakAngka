let targetNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("guess").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  console.log("Changing background color...");
  document.body.style.backgroundColor = getRandomColor();
}

function checkGuess() {
  console.log("Checking guess...");
  let guess = document.getElementById("guess").value;
  let result = document.getElementById("result");
  let resetBtn = document.getElementById("resetBtn");

  if (guess < targetNumber) {
    result.textContent = "Terlalu rendah!";
  } else if (guess > targetNumber) {
    result.textContent = "Terlalu tinggi!";
  } else {
    result.textContent = "Selamat, kamu benar!";
    changeBackgroundColor(); // Call changeBackgroundColor() here
    resetBtn.style.display = "inline";
  }
}

function resetGame() {
  console.log("Resetting game...");
  targetNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("guess").value = "";
  document.getElementById("result").textContent = "";
  changeBackgroundColor(); // Call changeBackgroundColor() here
  document.getElementById("resetBtn").style.display = "none";
}

document.getElementById("resetBtn").addEventListener("click", resetGame);

window.onload = function () {
  changeBackgroundColor();
};
