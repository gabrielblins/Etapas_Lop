var vx = []; 
var vy = [];
var vdx = []
var vdy = []
var qt = 10; 
var x = 100;
var y = 200;
var colisao = [];
var cont = 0;


function setup() {
  frameRate(30);
  createCanvas(600,600);
  for ( i = 0; i < qt; i++) { 
    vx[i] = random(0,600); 
    vy[i] = random(0,600);
    vdx[i] = random(-6,6);
    vdy[i] = random(-6,6);
  }
  for (var i = 0; i < qt; i++) {
    colisao[i] = false;
  }
  
}

function draw() {
  background(0); 
  rectMode(CENTER);
  for ( i = 0; i < qt; i++) {
    if(!colisao[i]){
    vx[i] = vx[i] + vdx[i];
    vy[i] = vy[i] + vdy[i];
    } 
    if ( vx[i] > width || vx[i] < 0 ) {
       vdx[i] = -vdx[i]; 
    }
    if ( vy[i] > height || vy[i] < 0 ) {
       vdy[i] = -vdy[i]; 
      
    }
    if(!colisao[i]){
    fill('white');
    rect(vx[i],vy[i],50,50);
    }else{
      vx[i] = 700;
      vy[i] = 700;
    } 
  }
  
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
    fill(110,230,190);
    ellipse(x,y,50,50);

    for (var i = 0; i < qt; i++) {
      if(dist(x,y,vx[i],vy[i])<50){
        colisao[i] = true;
        cont++;
      }
    }
    if(cont>=qt){
      cont = 0;
      for (var i = 0; i < qt; i++) {
        colisao[i] = false
        vx[i] = random(0,600);
        vy[i] = random(0,600);
      }
    }
}
