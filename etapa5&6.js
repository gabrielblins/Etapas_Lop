var x = 25;//x elipse
var y = 575;//y elipse
var r = 625;//x do quadrado
var s = 575;//y do quadrado
var xd = 0;//x do disparo
var yd = 0;//y do disparo
var disparo = false;//Verifica se o disparo esta ativo
var ld = 5;//Metade do lado do disparo
var lr = 25;//Metade do lado do quadrado
var raioE = 25;//Raio da elipse
var colisaod = false;//Verifica colisao entre disparo e quadrado
var colisao = false;//Verifica colisao entre elipse e quadrado
var cont = 0;//Se a colisaod ocorrer sera incrementado para que o quadrado suma
var vidas = 3;
var pontos = 0;
var tela = 0;//Dependendo do valor mostra tela inicio ou tela jogo
var parede = true;//Verifica se o quadrado chegou ao fim do canvas, fazendo o jogador perder uma vida
var velocidade = 5;//Incremento na posicao do jogador quando alguma tecla eh pressionada

function setup() {
    createCanvas(600,600); 
    background(0);  
}

function draw() {  
//Se as vidas forem maior que zero o jogo comecara, se nao tela game over
   if(vidas>0){
//tela0: tela de apresentacao do jogo
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
	//Checa se o quadrado passou da parede e nao atingiu o jogador
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
	//Cheque este site para entender como funciona a funcao dist: https://p5js.org/reference/#/p5/dist
	//Colisao disparo -> quadrado
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
    //Colisao quadrado -> jogador
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
//Tela de game over (Vidas = 0)
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
//Reseta todas as variaveis que influenciam no jogo
           vidas = 3;
           pontos = 0;
	   disparo = false;
	   colisao = false;
	   colisaod = false;
	   parede = true;
	   cont = 0;
	   xd = -50;
	   yd = -50;
           x = 25;
           y = 575;
           r = 575;
           s = 575;
       }
   }
}

