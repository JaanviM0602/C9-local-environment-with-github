var box
var r,g,b


function setup() {
  createCanvas(400,400);
  box=createSprite(width/2,height/2)
  r=Math.round(random(0,255))
  g=Math.round(random(0,255))
  b=Math.round(random(0,255))

}

function draw() 
{
  background(r,g,b);
if(keyIsDown(RIGHT_ARROW)) {
  box.position.x += 10
}

if(keyIsDown(LEFT_ARROW)) {
  box.position.x -= 10
}

if(keyIsDown(DOWN_ARROW)) {
  box.position.y += 10
}

if(keyIsDown(UP_ARROW)) {
  box.position.y -= 10
}
drawSprites();


}




