var platform_options = {
    isStatic: false, 
    friction: 10,
    density: 100,
    mass: 1000,
    render: {
        fillStyle: 'brown', // Set the fill color of the rectangle
        // You can also customize other rendering properties here, such as strokeStyle, lineWidth, etc.
    }
};
// Create a moving platform
let platform_width = width/10
if (width > 600) {
    platform_width = 100
}
var platform = Bodies.rectangle(width / 2, height - 150, platform_width, platform_width, platform_options);

var ground_options = {
    isStatic: true, 
    friction: 0.5,
    render: {
        fillStyle: 'black', // Set the fill color of the rectangle
        // You can also customize other rendering properties here, such as strokeStyle, lineWidth, etc.
    }
};
var ground = Bodies.rectangle(width / 2, height, width, 200, ground_options);

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
