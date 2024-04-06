// Create a glass
var textureImageGlass = new Image();
textureImageGlass.src = '/assets/DALL·E 2024-04-06 14.01.35 - Create a pixel art image of a larger, intricately designed sima bottle, focusing exclusively on the bottle itself. The bottle should have a classic, s.webp'; // Replace 'path/to/texture.png' with the path to your image

var glass = null;
// Wait for the texture image to load
textureImageGlass.onload = function() {
    let glass_width = width / 8;
    if (width > 800) {
        glass_width = 150;
    }
    
    // Calculate scaling factors
    var xScale = glass_width / textureImageGlass.width;
    var yScale = (glass_width * 1.5) / textureImageGlass.height;
    
    // Create the glass rectangle body
    glass = Bodies.rectangle(width / 2, height - 350, glass_width, glass_width * 1.5, {
        frictionAir: 0.05, // Air friction
        density: 0.06, // Density to control tipping
        render: {
            sprite: {
                texture: textureImageGlass.src,
                xScale: xScale, // Apply the x scaling factor
                yScale: yScale // Apply the y scaling factor
            }
        }
    });

    // Add the glass rectangle body to the world
    World.add(engine.world, [glass]);
};
