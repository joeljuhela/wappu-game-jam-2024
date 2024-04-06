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
