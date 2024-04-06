function logLeft() {
    console.log("left");
}

function logRight() {
    console.log("right");
}

document.getElementById('left-arrow').addEventListener('click', logLeft);
document.getElementById('right-arrow').addEventListener('click', logRight);

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        logLeft();
        movePlatform(-1);
    } else if (event.key === 'd') {
        logRight();
        movePlatform(1);
    }
});