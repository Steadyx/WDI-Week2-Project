function Player(element, lives, score) {
  this.element = element;
  this.lives = lives;
  this.score = score;
}

var player = new Player()
player.element = document.querySelector('.box');
player.lives = 0;
player.score = 0;

function playerPosition(x, y) {
  this.x = x;
  this.y = x;
}

function CollisionDetection(playerBox, divOne, divTwo, startPoint) {
  this.playerBox = playerBox;
  this.divOne = divOne;
  this.divTwo = divTwo;
  this.startPoint = startPoint;
}

function Controls(left, right, up, down) {

  this.left = left;
  this.right = right;
  this.up = up;
  this.down = down;

}

function RandomElements(element1, element2){
  this.element1 = element1;
  this.element2 = element2;
}

function Game(randomElements, elementSpeed, level) {
  this.randomElements = randomElements;
  this.element = elementSpeed;
  this.level = level;
}

var game = newGame();

this.randomElements = function(){

}

var controls = new Controls()

var playerPos = new playerPosition();
playerPos.x = player.element.offsetLeft;
playerPos.y = player.element.offsetTop;

controls.left = function() {
  requestAnimationFrame(controls.left);
  playerPos.x -= 5;
  player.element.style.left = parseInt(playerPos.x) + 'px';
  player.element;
}
controls.right = function() {
  requestAnimationFrame(controls.right);
  playerPos.x += 5;
  player.element.style.left = parseInt(playerPos.x) + 'px';
  console.log(player.element);

}
controls.up = function() {
  requestAnimationFrame(controls.up);
  playerPos.y -= 5;
  player.element.style.top = parseInt(playerPos.y) + 'px';
}
controls.down = function() {
  requestAnimationFrame(controls.down);
  playerPos.y += 5;
  player.element.style.top = parseInt(playerPos.y) + 'px';
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
