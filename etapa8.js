var x = 0;
var y = 0;
var r = [];
var s = [];
var x1 = [];
var y1 = [];
var disp1 = [];
var vidas = 5;
var pontos = 0;
var colisaod1 = [];
var colisaoj = [];
var nivel = 1;
var t = 0;
var tempo;
var bonus = false;
var xb = -50;
var yb = -50;
var tipobonus = 0;
var qtd = 5;
var velocidade = 0;
var velocniv = 0;
var fast = 0;


function setup() {

	createCanvas(600,600); 
    background(0);
    frameRate(60);
    y = random(25,575);
    for(i=1;i<=qtd;i++){
        r[i] = random(600,1000);
        s[i] = random(25,575);
        colisaod1[i] = false;
        colisaoj[i] = false;
        disp1[i] = false;
        x1[i] = 0;
        y1[i] = 700;
    }
    
}
function draw() {
   velocidade = velocniv+fast;      
   rectMode(CENTER);
   t++
   tempo = Math.floor(t/60);
   //primeira etapa 
    background(0);
    stroke('white');
	noFill();
	ellipse(x,y,50,50); 
	//objetos em lados opostos. Elipse o jogador, e retângulo o obstáculo.
    
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
	
	//Quinta etapa. Informacoes na tela
	textSize(24);
	noStroke();
	fill(255,255,255);
	text('Vidas: '+ vidas, 10,30);
	text('Pontos: '+ pontos, 450, 30);
	text('Nivel: ' + nivel, 250, 30);



    //Setima etapa. numero arbitrario de objetos
    for(i = 1;i<=qtd;i++){
        stroke(255,0,0);
        noFill();
        rect(r[i],s[i],50,50); 	
        //Terceira etapa. Objeto caminha pela tela até desaparecer e retorna posteriormente.
        if(nivel == 1 || nivel==2){
        r[i] -= 5;
        }else if(nivel==3 || nivel==4){
            r[i]-=4;
        }else{
            r[i]-=3;
        }
        if(r[i]<-25){ 
            r[i] = random(650, 1500);
            s[i] = random (25,575);
            vidas--;
        }
        //Sexta etapa. Colisao
        if(dist(x,y,r[i],s[i]) < 50) {
            if(colisaoj[i]==false){	
                colisaoj[i] = true;
                pontos++;
                r[i] = random(650,1000);
                s[i] = random(25,575);
            }
        } else {
            colisaoj[i] = false;
        }
        for(k=1;k<=qtd;k++){
        if(dist(x1[k],y1[k],r[i],s[i]) < 30) {
            if(!colisaod1[i]) {
                colisaod1[i] = true;
                pontos++;
                r[i] = random(650,1000);
                s[i] = random(25,575);
                disp1[k] = false;
                x1[k] = 0;
                y1[k] = 700;
            } 
        } else { 
            colisaod1[i] = false;
        }
     }
    }

     //Quarta etapa. Disparo eh efetuado quando pressiona a tecla CTRL
      for(k=1;k<=qtd;k++){
        if (keyIsDown(32) && !disp1[k]){
            x1[k] = x;
            y1[k] = y;
            disp1[k] = true;
        }
        if(disp1[k]){
            stroke(255,255,0);
            rect(x1[k],y1[k],10,10);
            x1[k]+=7
            if(x1[k] > 600){
                disp1[k] = false;
             }
        }
    }
	//Bonus de velocidade/vida    
	if(t == 600){
		bonus = true;
		xb = random(0,600);
        yb = random(0,600);
        tipobonus = random(1,100);
	}
    
	if(bonus == true){
	if(tipobonus <=50){
        fill(0,0,240);
        noStroke();
		ellipse(xb,yb,20,20);
		if (dist(x,y,xb,yb)<45) {
            fast = 3;
            bonus = false;
            t = 0;   
        }
    }else{
        fill(228,120,51);
        noStroke();
		ellipse(xb,yb,20,20);
		if (dist(x,y,xb,yb)<45) {
			vidas++;
            bonus = false;
            t = 0;   
        }
    }
	}if(t == 300){
        fast = 0;
    }
    //Etapa 8. Mudanca de nivel com aumento da quantidade de inimigos
    if(pontos>=0 && pontos<=10){
        nivel = 1;
        qtd = 1;
        velocniv = 4;
    }else if(pontos>10 && pontos<=20){
        nivel = 2;
        qtd = 2;
        velocniv = 5;
    }else if(pontos>20 && pontos<=30){
        nivel = 3;
        qtd = 3;
        velocniv = 6;
    }else if(pontos>30 && pontos<=40){
        nivel = 4;
        qtd = 4;
        velocniv = 7;
    }else if(pontos>40 && pontos<=50){
        nivel = 5;
        qtd = 5;
        velocniv = 8;
    }
}
