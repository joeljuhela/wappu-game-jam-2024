// Create a glass

let glass_width = width/8
if (width > 800) {
  glass_width = 150
}
var glass = Bodies.rectangle(width / 2, height - 350, glass_width, glass_width*1.5, {
    frictionAir: 0.05, // Air friction
    density: 0.06, // Density to control tipping
    render: {
      fillStyle: 'white'
    }
});


World.add(engine.world, [glass]); 
