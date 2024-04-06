var pushObjectInterval = setInterval(startPushing, 500); // Execute every 1 second

var push_factor = 1
function startPushing() {
    if (gameOngoing) {
        var topEndX = glass.position.x; // X-coordinate of the center of the glass
        var topEndY = glass.bounds.min.y; // Y-coordinate of the top edge of the glass
        console.log("pushing")
        console.log(gameOngoing)
        // Define the force to apply
        var forceMagnitude = push_factor*0.5; // Adjust this value as needed
        push_factor = push_factor + 0.25
        var randomNumber = Math.random();
        console.log(push_factor)
        // Convert the random number to a boolean value
        var randomBoolean = randomNumber < 0.5;
        console.log(randomBoolean)
        forceMagnitude = randomBoolean ? forceMagnitude : (-1* forceMagnitude)
        var force = { x: forceMagnitude, y: 0}; // Apply force in the upward direction (negative y-axis)

        // Apply the force to the top end of the glass
        Matter.Body.applyForce(glass, { x: topEndX, y: topEndY }, force);

    }
}