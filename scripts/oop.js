function Player(element, lives, score) {
  this.element = element;
  this.lives = lives;
  this.score = score;
}

var player = new Player()
player.element = document.querySelector('.box');
player.lives = 0;
player.score = 0;

function playerPosition(x,y,currentPos){
  this.x = x;
  this.y = x;
  this.currentPos = currentPos;
}

function Controls(left, right, up, down) {

  this.left = left;
  this.right = right;
  this.up = up;
  this.down = down;

}

function Game(randomElements, speed, level){

}

var controls = new Controls()

var playerPos = new playerPosition();
    playerPos.x = player.element.offsetLeft;
    playerPos.y = player.element.offsetTop;
controls.left = function() {
 playerPos.x--;
 playerPos.y--;
 player.element.style.left = (playerPos.x, playerPos.y)  + 'px';
 console.log(playerPos.x,   playerPos.y )

}
controls.right = function() {
  playerPos.x + playerPos.y;
  player.element.style.right = (playerPos.x, playerPos.y) + 'px';
  console.log(playerPos.x,   playerPos.y )
}
controls.up = function() {
   +'px';
}
controls.down = function() {
  +'px';
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 37) {
    controls.left();
    console.log(controls.currentPos);
  }
  if (e.keyCode === 39) {
    controls.right()
    console.log(controls.currentPos);
  }
  if (e.keyCode === 38) {
    controls.up()
    console.log(controls.currentPos);
  }
  if (e.keyCode === 40) {
    controls.down()
    console.log(controls.currentPos);
  }


});
