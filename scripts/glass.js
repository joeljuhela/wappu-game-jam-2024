// Create a glass
var glass = Bodies.rectangle(window.innerWidth / 2, window.innerHeight / 2, 80, 160, {
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
