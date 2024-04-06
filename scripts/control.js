document.getElementById('left-arrow').addEventListener('click', movePlatform(-1));
document.getElementById('right-arrow').addEventListener('click', movePlatform(1));

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        movePlatform(-1);
    } else if (event.key === 'd') {
        movePlatform(1);
    }
});