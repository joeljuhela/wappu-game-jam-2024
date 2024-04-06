// GYRO SCRIPT
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function handleOrientation(event) {
    const alpha = event.alpha
    const beta = event.beta;
    document.getElementById('logging').innerText = "alpha: " + alpha
    movePlatform((alpha)/90);
    console.log(alpha);
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
    // if (isMobileDevice()) {
        // Non-iOS 13+ devices
        window.addEventListener('deviceorientation', handleOrientation, true);
        document.getElementById('requestPermission').style.display = 'none';
    // }
}