// GYRO SCRIPT
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function handleOrientation(event) {
    const gamma = event.gamma
    const beta = event.beta;
    document.getElementById('logging').innerText = "gamma: " + gamma
    movePlatform((gamma)/0);
    console.log(gamma);
    setTimeout(()=> console.log("timeout"), 1000);
}

// Check if DeviceOrientationEvent is supported
if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function' && isMobileDevice()) {
    // iOS 13+ devices
    document.getElementById('requestPermission').style.display = 'block';
    document.getElementById('requestPermission').addEventListener('click', function() {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', handleOrientation, true);
                } else {
                    alert('Permission not granted');
                }
            })
            .catch(console.error);
        this.style.display = 'none';
    });
} else {
    if (isMobileDevice()) {
        // Non-iOS 13+ devices
        window.addEventListener('deviceorientation', handleOrientation, true);
        document.getElementById('requestPermission').style.display = 'none';
    }
}