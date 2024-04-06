document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        movePlatform(-1);
    } else if (event.key === 'd') {
        movePlatform(1);
    }
});
