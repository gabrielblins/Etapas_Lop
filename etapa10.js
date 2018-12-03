var x = 25;
var y = 0;
var stopi = [];
var para;
var foward = [];
var frente;
var backward = [];
var tras;
var contframe=0;
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
var tela = 0;
var direita = false;
var esquerda = false;
var cima = false;
var baixo = false;
var ex=[];
var ey=[];
var g = 0;
var forcefield = false;
var vidaforca = 5;
var forcfd;
var tam = 60;
var terra = [];
var tera;
var contterra = 0;
var tempterra = 0;
var nome;
var meteoros,inimigo;
var tiro = [];
var tirox;
var conttiro = [];
var tamtiro = 10;
var contt = 0;
var distmax = [];
var subnome,spaceship,laser,backtheme;
var time = 0;

function preload(){
for(i=0;i<3;i++){
    stopi[i] = loadImage("sprites/stop"+i+".png");
    foward[i] = loadImage("sprites/foward"+i+".png");
    backward[i] = loadImage("sprites/backward"+i+".png");
   }
for(i=1;i<=7;i++){
    tiro[i]=loadImage("sprites/tiros/t"+i+".png");
   }
for(i=1;i<=qtd;i++){
    conttiro[i]=1;
    distmax[i]=0;
}
   forcfd = loadImage("sprites/forcefield.png");
   space = loadImage("sprites/space.png");
   nome = loadImage("sprites/name.png");
   subnome = loadImage("sprites/subtitle.png");
   spaceship = loadImage("sprites/spaceship.png");
   laser = loadImage("sprites/laser.png")
   meteoros = loadImage("sprites/meteoros3.png");
   inimigo = loadImage("sprites/meteoroini.png");
   gover = loadImage("sprites/gameover.png");
for(i=0;i<=43;i++){
    terra[i] = loadImage("sprites/Earth/"+i+".gif");
}

soundFormats('mp3', 'ogg');
backtheme = loadSound("sounds/backtheme.ogg");
}

function setup() {
    createCanvas(1366,600); 
    background(0);
    frameRate(60);
    y = random(25,575);
    for(j=0;j<140;j++){
        ex[j] = random(0,1366);
        ey[j] = random(0,600);
    }
    for(i=1;i<=qtd;i++){
        r[i] = random(1366,1766);
        s[i] = random(25,575);
        colisaod1[i] = false;
        colisaoj[i] = false;
        disp1[i] = false;
        x1[i] = 0;
        y1[i] = 700;
    }
    imageMode(CENTER);
    backtheme.setVolume(0.1);

}

function draw() {
if(vidas>0){
//tela0: tela de apresentacao do jogo
    if(tela == 0){
	backtheme.play();
        backtheme.loop();
        tempterra++;
        image(space,683,300,1366,600);
        image(nome,650,50);
        image(subnome,650,520);
        image(spaceship,550,280,1.22*180,180);
        image(laser,600,300,80,50);
        image(laser,650,230,80,50);
        image(meteoros,1000,200,1.09*400,400);
        tera = terra[contterra];
        image(tera,200,300);
        if(tempterra%5==0){
        contterra++;
        }
        if(contterra>43){
            contterra=0;
        }
        if(keyIsDown(ENTER)){
            tela = 1;
            tempterra=0;
	    backtheme.stop();
        }
    }else{
   velocidade = velocniv+fast;      
   rectMode(CENTER);
   tempterra++;
   t++
   g++
   tempo = Math.floor(t/60);
   //primeira etapa 
    background(0);
    for(j=0;j<140;j++){
        fill(255,255,255);
        stroke('white');
        ellipse(ex[j],ey[j],1,1);
    }
    tera = terra[contterra];
    image(tera,-200,300,600,600);
    if(tempterra%8==0){
    contterra++;
    }
    if(contterra>43){
        contterra=0;
    }
    if(forcefield && vidaforca>0){
    if(g<=120){
    image(forcfd,x,y,70,70); 
    }else{
        forcefield = false;
    }
    }else{    
    
    }
    noFill();
    
    if(vidaforca>0){
        tam = 60;
    }else{
        tam = 53;
    }
	//objetos em lados opostos. Elipse o jogador, e retângulo o obstáculo.

    //Segunda etapa.
	//elipse se move com comandos do teclado.	
	if (keyIsDown(LEFT_ARROW)) {
        
        if(x > 25){
			x-=velocidade;
        }	 
     esquerda = true;
	}else{
        esquerda = false;
    }
    if (keyIsDown(RIGHT_ARROW)) {
          
        if(x<1338){
  	    	x+=velocidade;
        }
     direita = true;     
    }else{
        direita = false;
    }
    
    if (keyIsDown(UP_ARROW)){
          
        if(y>25){
  		    y-=velocidade;
        }
     cima = true;     
    }else{
        cima = false;
    }
    
    if (keyIsDown(DOWN_ARROW)){
  	    if(y<575){
  		    y+=velocidade;
        }
     baixo = true;     
    }else{
        baixo = false;
    }
	
	//Quinta etapa. Informacoes na tela
	textSize(24);
	noStroke();
	fill(255,255,255);
    text('Lifes: '+ vidas, 300,30);
    text('ForceField: '+vidaforca,450,30);
    text('Level: ' + nivel, 700, 30);
	text('Score: '+ pontos, 900, 30);


    //Setima etapa. numero arbitrario de objetos
    for(i = 1;i<=qtd;i++){
        stroke(255,0,0);
        noFill();
        image(inimigo,r[i],s[i],50,50); 	
        //Terceira etapa. Objeto caminha pela tela até desaparecer e retorna posteriormente.
        if(nivel == 1 || nivel==2){
        r[i] -= 5;
        }else if(nivel==3 || nivel==4){
            r[i]-=4;
        }else{
            r[i]-=3;
        }
        if(r[i]<-25){ 
            r[i] = random(1366,1766);
            s[i] = random (25,575);
            vidas--;
        }
        //Sexta etapa. Colisao
        if(dist(x,y,r[i],s[i]) < tam) {
            if(colisaoj[i]==false){	
                colisaoj[i] = true;
                forcefield = true;
                g=0;
                if(vidaforca>0){
                vidaforca--;
                }else{
                vidas--;
                }
                r[i] = random(1366,1766);
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
                r[i] = random(1366,1766);
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
            conttiro[k] = 1;
            distmax[k] = x + 600;
        }
        if(disp1[k]){
            tirox = tiro[conttiro[k]];
            image(tirox,x1[k],y1[k],(2.67*tamtiro),tamtiro);
            if(t%4==0){
            conttiro[k]++;
            }
            if(conttiro[k]>7){
                conttiro[k] = 6;
            }
            x1[k]+=7
            if(x1[k] > distmax[k]){
                disp1[k] = false;
                x1[k] = 0;
                y1[k] = 700;

             }
        }
    }
	//Bonus de velocidade/vida    
	if(t == 600){
		bonus = true;
		xb = random(0,600);
        yb = random(0,600);
        tipobonus = random(1,150);
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
    }else if(tipobonus>50 && tipobonus<=100){
        fill(228,120,51);
        noStroke();
		ellipse(xb,yb,20,20);
		if (dist(x,y,xb,yb)<45) {
			vidas++;
            bonus = false;
            t = 0;   
        }
    }else{
        fill(20,255,20);
        noStroke();
		ellipse(xb,yb,20,20);
		if (dist(x,y,xb,yb)<45) {
			vidaforca++;
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

    if(!direita && !esquerda && !cima && !baixo){
        contframe = 1;
        para = stopi[contframe];
        image(para,x,y,50,50);
    }else if(cima && !direita && !esquerda){
        contframe = 0;
        para = stopi[contframe]
        image(para,x,y,50,50);
    }else if(baixo && !direita && !esquerda){
        contframe = 2;
        para = stopi[contframe];
        image(para,x,y,50,50);
    }else if(direita && !baixo && !cima){
        contframe = 1;
        frente = foward[contframe];
        image(frente,x,y,55,50);
    }else if(direita && cima && !baixo){
        contframe = 0;
        frente = foward[contframe];
        image(frente,x,y,55,50);
    }else if(direita && baixo && !cima){
        contframe = 2;
        frente = foward[contframe];
        image(frente,x,y,55,50);
    }else if(esquerda && !baixo && !cima){
        contframe = 1;
        tras = backward[contframe];
        image(tras,x,y,53,50);
    }else if(esquerda && cima && !baixo){
        contframe = 0;
        tras = backward[contframe];
        image(tras,x,y,53,50);
    }else if(esquerda && baixo && !cima){
        contframe = 2;
        tras = backward[contframe];
        image(tras,x,y,53,50);
    }

   }
  }else{
  //Tela de game over (Vidas = 0)
       time++
       noStroke();
       image(gover,683,300,1366,600);
       textSize(50);
       fill(255,0,0);
       textStyle(BOLD);
       text("GAME OVER",140,250);
       textSize(25);
       fill(255,255,255);
       text("Score: "+pontos,230,300)
       text("Press ENTER to play again",135,350)
       if(keyIsDown(ENTER)){
//Reseta todas as variaveis que influenciam no jogo
           clear();
	   t = 0;
	   bonus = false;
	   xb = -50;
	   yb = -50;
	   vidas = 5;
           pontos = 0;
	   vidaforca = 5;
    x = 25;
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
   }
}
