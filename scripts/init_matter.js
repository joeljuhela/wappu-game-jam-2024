
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Composite = Matter.Composite;


const engine = Engine.create();
const world = engine.world;

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


// Create a renderer
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: windowWidth,
        height: windowHeight,
        wireframes: false // For a colored rendering
    }
});

const wallOptions = {
  isStatic: true,
  render: {
    fillStyle: 'white',
    strokeStyle: 'white',
    lineWidth: 10
  }
}

const width = render.options.width;
const height = render.options.height;
const thickness = 10;

Composite.add(engine.world, [
  Bodies.rectangle(width, height/2, thickness, height, wallOptions),
  Bodies.rectangle(0, height/2, thickness, height, wallOptions),
])

// Run the engine
Matter.Runner.run(engine);

// Run the renderer
Render.run(render);
