// Create a box
var box = Bodies.rectangle(window.innerWidth / 2, window.innerHeight / 2, 80, 80, {
    frictionAir: 0.05, // Air friction
    density: 0.061, // Density to control tipping
    render: {
      fillStyle: 'white'
    }
});

// Calculate the fixed point on the box (top edge)
// We use the box's position and dimensions to determine this point
var fixedPoint = { x: box.position.x, y: box.position.y - box.height / 2 };

// Create a constraint that simulates the box hanging from the fixed point
// var constraint = Constraint.create({
//     pointA: fixedPoint, // The fixed point in space
//     bodyB: box,
//     pointB: { x: 0, y: -40 }, // Offset to the top edge of the box
//     stiffness: 0.9, // Constraint stiffness
//     length: 0 // Zero length to make it appear as a fixed point
// });

// Add the box and the constraint to the world
World.add(engine.world, [box]); //, constraint]);
