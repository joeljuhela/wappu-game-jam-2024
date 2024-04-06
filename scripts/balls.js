

function spawnRandomBall() {
  const radius = Math.random() * 20 + 5; // Random radius between 5 and 25
  const positionX = Math.random() * render.options.width; // Random x position within the canvas
  const ball = Bodies.circle(positionX, 0, radius, {
      density: 0.004,
      render: {
          fillStyle: '#' + Math.floor(Math.random()*16777215).toString(16) // Random color
      }
  });

  World.add(world, ball);
}

setInterval(spawnRandomBall, 1000);
