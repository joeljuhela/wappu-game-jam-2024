// Create a glass
var textureImagePlatform = new Image();
textureImagePlatform.src = '../assets/DALL·E 2024-04-06 14.01.35 - Create a pixel art image of a larger, intricately designed sima bottle, focusing exclusively on the bottle itself. The bottle should have a classic, s.webp'; // Replace 'path/to/texture.png' with the path to your image

var platform = null;

textureImagePlatform.onload = function() {
    
    var platform_options = {
        isStatic: false, 
        friction: 10,
        density: 100,
        mass: 1000
    };
    // Create a moving platform
    let platform_width = width/10
    if (width > 600) {
        platform_width = 100
    }
    
    // Calculate scaling factors
    var xScale = platform_width / textureImagePlatform.width;
    var yScale = platform_width / textureImagePlatform.height;
    

    platform = Bodies.rectangle(width / 2, height - 150, platform_width, platform_width, {...platform_options,  render: {
        sprite: {
            texture: textureImagePlatform.src,
            xScale: xScale, // Apply the x scaling factor
            yScale: yScale // Apply the y scaling factor
        }
    }});


    // Add the glass rectangle body to the world
    World.add(engine.world, [platform]);
};


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


World.add(engine.world, [ground]);

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
