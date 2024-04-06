var platform_options = {
    isStatic: false, 
    friction: 0.5,
    render: {
        fillStyle: 'white', // Set the fill color of the rectangle
        // You can also customize other rendering properties here, such as strokeStyle, lineWidth, etc.
    }
};
// Create a moving platform
var platform = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 150, 300, 70, platform_options);

var ground_options = {
    isStatic: true, 
    friction: 0.5,
    render: {
        fillStyle: 'black', // Set the fill color of the rectangle
        // You can also customize other rendering properties here, such as strokeStyle, lineWidth, etc.
    }
};
var ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 200, ground_options);

// Define movement controls for the platform
var platformSpeed = 10;


World.add(engine.world, [platform, ground]);

function movePlatform(direction) {
    var velocityX = direction * platformSpeed;
    Matter.Body.setVelocity(platform, { x: velocityX, y: 0 });
}

// Keyboard event listeners
document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowLeft') {
        movePlatform(-1); // Move left
    } else if (event.code === 'ArrowRight') {
        movePlatform(1); // Move right
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
        movePlatform(0); // Stop moving
    }
});
