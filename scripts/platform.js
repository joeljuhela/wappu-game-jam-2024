var platform_options = {
    isStatic: false, 
    friction: 10,
    density: 100,
    mass: 10000,
    render: {
        fillStyle: 'brown', // Set the fill color of the rectangle
    }
};

function createTShape(x, y) {
    // Create the vertical part of the T
    var vertical = Bodies.rectangle(x, y, 20, 100, { isStatic: false });

    // Create the horizontal part of the T
    var horizontal = Bodies.rectangle(x, y + 50, 100, 20, platform_options);

    // Group the two parts together into a single compound body
    var tShape = Body.create({
        parts: [vertical, horizontal],
    });

    return tShape;
}


// Create a moving platform
let platform_width = width/10
if (width > 600) {
    platform_width = 100
}
// var platform = Bodies.rectangle(width / 2, height - 150, platform_width, platform_width, platform_options);
var platform = createTShape(width / 2, height - 150);

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
