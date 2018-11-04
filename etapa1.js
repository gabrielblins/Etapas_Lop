
function setup() {
 	

	createCanvas(600,600); 
	background(100);
}
function draw() {     

	stroke(255,255,255);
	noFill();
	ellipse(50,550,50,50); //primeira etapa
	
	rect(530,530,50,50); //objetos em lados opostos. Elipse o jogador, e retângulo o obstáculo.
}


