var dog;
var foodS;

function preload()
{
	dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png");
}

function setup() {
  	createCanvas(500,500);
  database=firebase.database()
  dog =createSprite(200,200,35,20);
  dog.addImage(dog1);
  dog.scale=0.3;
  foodStock=database.ref("Food");
  foodStock.on("value",readstock)
}


function draw() {  
background("green");
if (keyWentDown(UP_ARROW)){
 writestocks(foodS);
 dog.addImage(dog2);
}
  drawSprites();
  text("Press up arrow to feed the dog",70,40);
  text("Food remainng"+foodS,30,100);
}
function writestocks(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref("/").update({
    Food:x
  })
}
function readstock(data){
  foodS=data.val();
}


