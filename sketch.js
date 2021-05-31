//Create variables here
var database, foods, foodStock;
var dog, dogImage1, dogImage2;


function preload()
{
	dogImage1 = loadImage("images/dog1.png");
  dogImage2 = loadImage("images/dog2.png")
}

function setup() {

  createCanvas(1000, 1000);
  database = firebase.database();

  
  dog = createSprite(100, 100, 10, 10);
  dog.addImage(dogImage1);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  camera.x = camera.x + 100
}

function draw() {  
  background(46, 139, 87);

  if(keyDown === UP_ARROW){

    writeStock(foodS);
    dog.addImage(dog2);
  }

  drawSprites();
  //add styles here
  textSize(30);
  fill("black")

  text("Food Left:" + foodStock, -  0, -400);
  text("Note: Press the Up Arrow Key to feed your dog.", -200, 485)

}

function readStock(data){

  foodS = data.val

}

function writeStock(x){

  if (x<=0){

    x = 0;

  } else{
    x = x - 1;
  }

  database.ref('/').update({ Food:x })

}