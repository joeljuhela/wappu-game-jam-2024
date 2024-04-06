document.getElementById('start-button').addEventListener('click', function() {
    var startButtonContainer = document.getElementById('start-button-container');
    var startButton = document.getElementById('start-button');
    
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
            }, 700);
        }, 700);
    }, 500);
});