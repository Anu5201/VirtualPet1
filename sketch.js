var dog, dogImg, happyDogImg, foodS, foodStock;
var database;

function preload()
{
dogImg = loadImage("images/dogImg.png");
happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  foodStock.set(20);
  

  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.15;
   
}


function draw() { 
  background(46, 139, 87);

  
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
   
  } 



  drawSprites();
  
    textSize(20);
    fill(255);
    text("PLEASE PRESS UP ARROW KEY TO FEED THE PUPPY MILK", 130,10,300,20);
    text("Food Remaining : "+ foodS, 170,200);
  

  

}



function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref("/").update({
    Food: x
  });
  }

  function readStock(data){
    foodS = data.val();
  }




