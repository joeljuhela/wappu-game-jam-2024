// Create a glass

let glass_width = width/8
if (width > 800) {
    platform_width = 150 
}
var glass = Bodies.rectangle(width / 2, height / 2, glass_width, glass_width*2, {
    frictionAir: 0.05, // Air friction
    density: 0.061, // Density to control tipping
    render: {
      fillStyle: 'white'
    }
});

// Calculate the fixed point on the glass (top edge)
// We use the glass's position and dimensions to determine this point
var fixedPoint = { x: glass.position.x, y: glass.position.y - glass.height / 2 };

// Create a constraint that simulates the glass hanging from the fixed point
// var constraint = Constraint.create({
//     pointA: fixedPoint, // The fixed point in space
//     bodyB: glass,
//     pointB: { x: 0, y: -40 }, // Offset to the top edge of the glass
//     stiffness: 0.9, // Constraint stiffness
//     length: 0 // Zero length to make it appear as a fixed point
// });

// Add the glass and the constraint to the world
World.add(engine.world, [glass]); //, constraint]);
