function setup() {
	createCanvas(500, 500);
	background(0);
}

function draw() {
	let d = dist(myXPos, myYPos, enemyXPos, enemyYPos);
	if (d < myRadius + enemyRadius) {
		// colliding!!
	}
}