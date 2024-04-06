// Create a Matter.js engine
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body;

var engine = Engine.create();

// Create a renderer
var render = Render.create({
    element: document.getElementById('game'), // Target the #game div
    engine: engine,
    options: {
        width: 800,
        height: 600,
        wireframes: false
    }
});

// Create a moving platform
var platform = Bodies.rectangle(400, 500, 200, 20, { isStatic: true, friction: 0.5 });

// Add the platform to the world
World.add(engine.world, [platform]);

// Define movement controls for the platform
var platformSpeed = 5;

function movePlatform(direction) {
    var velocityX = direction * platformSpeed;
    Body.setVelocity(platform, { x: velocityX, y: 0 });
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

// Run the engine
Engine.run(engine);

// Run the renderer
Render.run(render);