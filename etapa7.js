var x = 25;
var y = 575;
var r = 575;
var s = 575;
var xd = 0;
var yd = 0;
var disparo = false;
var vidas = 5;
var pontos = 0;
var colisaod = false;
var colisaoj = false;
var nivel = 1;
var t = 0;
var tempo;
var bonus = false;
var xb = -50;
var yb = -50;
var velocidade = 5;

function setup() {

	createCanvas(600,600); 
    background(0);
    frameRate(60);
    
}
function draw() {      
   rectMode(CENTER);
   t++
   tempo = Math.floor(t/60);
   //primeira etapa 
    background(0);
	if(disparo){
		stroke(0,255,0);//Muda a cor da elipse quando o disparo eh efetuado
	}else{
	stroke(255,255,255);
	}
	noFill();
	ellipse(x,y,50,50); 
	stroke(255,0,0);
    rect(r,s,50,50); //objetos em lados opostos. Elipse o jogador, e retângulo o obstáculo.						
    
    //Segunda etapa.
	//elipse se move com comandos do teclado.	
	if (keyIsDown(LEFT_ARROW)) {
        
        if(x > 25){
			x-=velocidade;
		}	 
	}
    if (keyIsDown(RIGHT_ARROW)) {
          
        if(x<575){
  	    	x+=velocidade;
  	    }
    }
    
    if (keyIsDown(UP_ARROW)){
          
        if(y>25){
  		    y-=velocidade;
  	    }
    }
    
    if (keyIsDown(DOWN_ARROW)){
  	    if(y<575){
  		    y+=velocidade;
  	    }
    }
   
    //Terceira etapa. Objeto caminha pela tela até desaparecer e retorna posteriormente.
		r-=5;
	if(r<-25){ 
		r = random(650, 1500);
		s = random (25,575);
		vidas--;
    }
    
    //Quarta etapa. Disparo eh efetuado quando pressiona a tecla CTRL
	if (keyIsDown(CONTROL) && !disparo){
		xd = x;
		yd = y;
		disparo = true;
	}
	if(disparo == true){
		stroke(255,255,0);
		rect(xd,yd,10,10);
		xd+=5
	    if(xd > 600){
		    disparo = false;
 		}
	}
	//Quinta etapa. Informacoes na tela
	textSize(24);
	noStroke();
	fill(255,255,255);
	text('Vidas: '+ vidas, 10,30);
	text('Pontos: '+ pontos, 450, 30);
	text('Nivel: ' + nivel, 250, 30);

	//Sexta etapa. Colisao

	if(dist(x,y,r,s) < 50) {

		if(colisaoj==false){
			
			colisaoj = true;
			vidas--;
			r = random(650,1000);
			s = random(25,575);

		}
		

	} else {

		colisaoj = false;
	}

	
	if(dist(xd,yd,r,s) < 30) {

		if(!colisaod) {

			colisaod = true;
			pontos++;
			r = random(650,1000);
			s = random(25,575);

			disparo = false;
			xd = 0;
			yd = 700;

		} 
	} else { 

		colisaod = false;
		
	}

	//Setima etapa. 
	if(tempo == 5){
		bonus = true;
		xb = random(0,600);
		yb = random(0,600);
	}else{
		bonus = false;
	}

	if(bonus == true){
	
		fill(0,0,240);
		ellipse(xb,yb,20,20);
		if (dist(x,y,xb,yb)<45) {
			velocidade = 8;
			bonus = false;
		}
	}

}
