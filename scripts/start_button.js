const startGame = () => {
  checkGyroAccess();
  const startButtonContainer = document.getElementById('start-button-container');
  const startButton = document.getElementById('start-button');
  
  startButton.innerText = '3';
  setTimeout(function() {
    startButton.innerText = '2';
    setTimeout(function() {
      startButton.innerText = '1';
      setTimeout(function() {
        startButton.innerText = 'GO!';
        setTimeout(function() {
          startButtonContainer.style.display = 'none'; // Hide the start button container
        }, 700);

        gameOngoing = true;
        console.log(gameOngoing)
      }, 700);
    }, 700);
  }, 500);
}


document.getElementById('start-button').addEventListener('click', startGame);

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    startGame();
  }
});
