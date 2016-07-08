var game = game || {};

function Player(element, lives, score) {

  this.element = element;
  this.lives = 3;
  this.score = 0;

}

var player = new Player(document.querySelector('.box'));
console.log(player)

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
