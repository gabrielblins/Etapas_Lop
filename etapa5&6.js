var x = 25;
var y = 575;
var r = 625;
var s = 575;
var xd = 0;
var yd = 0;
var disparo = false;
var ld = 5;
var lr = 25;
var raioE = 25;
var colisaod = false;
var colisao = false;
var cont = 0;
var vidas = 3;
var pontos = 0;
var tela = 0;
var parede = true;
var velocidade = 5;

function setup() {
    createCanvas(600,600); 
    background(0);  
}

function draw() {      
   if(vidas>0){
    if(tela == 0){
        background(0,173,239);
        textSize(50);
        textStyle(BOLD);
        fill(0,255,0);
        text("Circle Shooter",110,300);
        textSize(25);
        fill(255,255,255);
        text("Press SPACE to play",155,350);
        if(keyIsDown(32)){
            tela = 1;
        }
    }else{
    //Primeira etapa - objetos em lados opostos. Elipse o jogador, e retângulo o obstáculo.
    rectMode(CENTER);
    background(0);
	if(disparo){
		stroke(0,255,0);
	}else{
	    stroke(255,255,255);
	}
    noFill();
    if(!colisao){
    ellipse(x,y,50,50);
    }else{
    } 
	stroke(255,0,0);
	if(!colisaod && cont == 0){
	rect(r,s,2*lr,2*lr);				
	} else{
	}
    
    //Segunta etapa - Elipse se move com comandos do teclado.
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
   
    //Terceira etapa - Objeto caminha pela tela até desaparecer e retorna posteriormente.  
        r-=5;
	 if((r<=0 && r>-5) && cont==0 && parede){
        vidas--;
        pontos -= 5;
        if(pontos<=0){
            pontos = 0;
        }
    }
	if(r<-25){ 
        cont = 0;
        parede = true;
		r = random(650, 1500);
		s = random (25,575);
    }
	    
    //Quarta etapa - Disparo
    if (keyIsDown(CONTROL) && !disparo){
		xd = x;
		yd = y;
		disparo = true;
	}
    if(disparo == true){
		stroke(255,255,0);
		rect(xd,yd,2*ld,2*ld);
		xd+=5
    if(xd > 600){
		disparo = false;
 		}
	}
    
    //Quinta etapa - Informacoes na tela
    textSize(30);
    fill(255,255,255);
    noStroke();
    text("Vidas: "+vidas,0,30);
    text("Pontos: "+pontos,450,30);

    //Sexta etapa - Colisão
	if(dist(xd,yd,r,s) < ld+lr){
		if(!colisaod){
            colisaod = true
            disparo = false
            pontos++;
            cont = 1;
            xd = -50;
            yd = -50;
		}
	} else{
		colisaod = false
	}
    
    if((dist(x,y,r,s) < raioE+lr) && cont == 0 ){
        if(!colisao){
            colisao = true;
            vidas = vidas - 1;
            parede=false;
        }
    } else {
        colisao = false;
    }

   }
 } else{
       noStroke();
       background(0);
       textSize(50);
       fill(255,0,0);
       textStyle(BOLD);
       text("GAME OVER",140,300);
       textSize(25);
       fill(255,255,255);
       text("Press ENTER to play again",135,350)
       if(keyIsDown(ENTER)){
           vidas = 3;
           pontos = 0;
           x = 25;
           y = 575;
           r = 575;
           s = 575;
       }
   }
}

