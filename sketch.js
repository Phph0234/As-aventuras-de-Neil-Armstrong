//Crie aqui as variáveis dos personagens e cenário
var fundo,fundoImg;
var nave,naveImg;
var astronauta,astronautaImg;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload(){
  //Carregar imagens e sons
  fundoImg = loadImage("bg.png")
  naveImg = loadImage("normal.png")
  astronautaImg = loadImage("astronauta.png")
}

function setup(){
  //Configurar jogo
  createCanvas(windowWidth,windowHeight);
  frameRate(80);


  //Crie sprites e adicione suas imagens
  nave = createSprite(100,50,30,30)
  nave.addImage(naveImg)
  nave.scale = 0.1

  astronauta = createSprite(width-400,180,20,20)
  astronauta.addImage(astronautaImg)
  astronauta.scale = 0.1
}

function draw() {
  background("white");
  image(fundoImg,0,0);
  
  push();
  fill("white")
  text("Velocidade vertical:", 800, 75)
  pop();

  //descida
  vy = vy+g;
  nave.position.y = nave.position.y+vy;
  

  drawSprites();
    
}

function gerarInimigos(){
  
}
