// GYRO SCRIPT
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function handleOrientation(event) {
    if (gameOngoing) {
        const gamma = event.gamma
        const beta = event.beta;
        // document.getElementById('logging').innerText = "gamma: " + gamma
        movePlatform((gamma)/90); // CHANGE THE VALUE BEHIND GAMMA TO MOVE IT A BIT LESS
        console.log(gamma);
    }
}

const checkGyroAccess = () => {
  // Check if DeviceOrientationEvent is supported
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function' && isMobileDevice()) {
      // iOS 13+ devices
      DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
              if (permissionState === 'granted') {
                  window.addEventListener('deviceorientation', handleOrientation, true);
              } else {
                  alert('Permission not granted');
              }
          })
          .catch(console.error);
  } else {
      if (isMobileDevice()) {
          // Non-iOS 13+ devices
          window.addEventListener('deviceorientation', handleOrientation, true);
      }
  }
}
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
