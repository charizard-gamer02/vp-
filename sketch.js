//Create variables here
var dog,beggdog,jumpdog,database,foodS,foodStock;
function preload()
{
  //load images here
  beggdog=loadImage("images/dogimg.png");
  jumpdog=loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250,20,20);
  dog.addImage("LOL",beggdog);
  dog.scale=0.5
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  textSize(15)
  stroke("black")
  fill("black")
  text("HAPPY DOG",10,150)
writeStock(foodS);



}
  drawSprites();
  textSize(15);
  stroke("black");
  fill("black");
  text("Bottles LEFT;"+foodS,200,100)

  textSize(15);
  stroke("black");
  fill("black");
  text("up arrow to feed;",200,300)
  //add styles here

}
function readStock(data){
foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}



