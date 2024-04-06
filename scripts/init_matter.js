const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


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


