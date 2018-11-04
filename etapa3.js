
var x = 25;
var y = 575;
var r = 550;
var s = 550;

function setup() {



	createCanvas(600,600); 
	background(0);
}
function draw() {      //segunta etapa.
	background(0);
	stroke(255,255,255);
	noFill();
	ellipse(x,y,50,50); //primeira etapa

	rect(r,s,50,50); //objetos em lados opostos. Elipse o jogador, e retângulo o obstáculo.						// elipse se move com comandos do teclado.

	
	if (keyIsDown(LEFT_ARROW)) {
		if(x > 25){
			x-=5;
		}	
		 
	}
   

  if (keyIsDown(RIGHT_ARROW)) {

  	if(x<575){
  		x+=5;
  		
  	}
  }
    

  if (keyIsDown(UP_ARROW)){
  	if(y>25){
  		y-=5;
  	}
  }
    

  if (keyIsDown(DOWN_ARROW)){
  	if(y<575){
  		 y+=5;
  	}
  }
   

	
	
		r-=5;
	
	if(r<-25){ //terceira etapa. Objeto caminha pela tela até desaparecer e retorna posteriormente.
		r = random(650, 1500);
		s = random (25,575);
	}

}


