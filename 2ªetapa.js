var x = 50;
var y = 550;

function setup() {
 	

	createCanvas(600,600); 
	background(100);
}
function draw() {      //segunta etapa.
						// elipse se move com comandos do teclado.

	background(0);
	if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;

	stroke(255,255,255);
	noFill();
	ellipse(x,y,50,50); //primeira etapa
	
	rect(530,530,50,50); //objetos em lados opostos. Elipse o jogador, e retângulo o obstáculo.
}


