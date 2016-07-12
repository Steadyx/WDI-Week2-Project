var game = game || {};



function Player(element) {

  this.element = element;
  this.lives = 20;
  this.score = 0;
  this.highScore = 0;

}

var myAudio = new Audio("music/div.mp3");
var audioLoser = new Audio("music/div.mp3");
var audioHit = new Audio("music/explosion.wav");
var damage = new Image(100, 100);
damage.src = 'images/explosion.gif';


console.log(damage);

game.started = false;
var player = new Player(document.querySelector('.box'));

game.randomDiv = function(random) {
  this.container = document.querySelector('.container');
  for (var i = 0; i < 200; i++) {
    this.random = document.createElement('div');
    this.random.className = 'random';
    this.container.appendChild(this.random);
  }
}
game.randomDiv();

game.placeRanomDivs = function(randomDiv) {
  this.generatedDivs = document.querySelectorAll('.random');
  this.container = document.querySelector('.container');
  this.highScore = document.querySelector('.high-score');
  for (var i = 0; i < this.generatedDivs.length; i++) {
    this.left = Math.floor(Math.random() * parseInt(this.container.offsetWidth)) + 'px'
    this.width = Math.floor(Math.random() * 400) + 'px';
    this.height = Math.floor(Math.random() * 400) + 'px';

    this.generatedDivs[i].style.left = this.left;
    this.generatedDivs[i].style.width = this.width;
    this.generatedDivs[i].style.height = this.height;

  }

}

game.reset = function() {
  this.restart = document.querySelector('.restart');
  this.container = document.querySelector('.container');
  this.lives = document.querySelector('.lives');
  this.lives.innerHTML = 'Lives ' + 20;
  this.lotsOfBlocks = document.querySelectorAll('.random');
  this.gameOverScreen = document.querySelector('.gameover-bg');
  this.restart.addEventListener('click', function() {

    this.gameOverScreen.style.display = 'none';
    myAudio.load();
    game.placeRanomDivs();
    console.log(player.lives)
    this.lives.innerHTML = 'Lives : ' + 20;
    player.lives = 20;
    game.started = false;
  }.bind(this));

}
game.reset();

game.setTransition = function(lotsOfBlocks) {

  this.lotsOfBlocks = document.querySelectorAll('.random');
  this.score = document.getElementById('actual-score');
  this.highScore = document.querySelector('high-score');
  this.container = document.querySelector('.container');
  this.lives = document.querySelector('.lives');
  this.startOver = document.querySelector('.gameover-bg');
  var self = this;
  this.goUp = 0;

  this.gameAnimations = function() {
    this.animationsId = setInterval(function() {
      var self = this;

      self.position = player.element.getBoundingClientRect();
      self.position.top = player.element.top;
      self.position.left = player.element.left;
      self.position.width = player.element.height;
      self.position.height = player.element.style.width;

      self.total = self.position.top + self.position.height;
      self.total2 = self.position.left + self.position.width;
      for (var i = 0; i < 200; i++) {

        self.lotsOfBlocks[i].style.transform = 'translateY('+self.goUp-- + 'px)';

        // Check for collision of all sides
        self.computerPosition = self.lotsOfBlocks[i].getBoundingClientRect();

        self.computerPosition.top = self.lotsOfBlocks[i].top;
        self.computerPosition.left = self.lotsOfBlocks[i].left;
        self.computerPosition.width = self.lotsOfBlocks[i].height;
        self.computerPosition.height = self.lotsOfBlocks[i].style.width;

        self.total3 = self.computerPosition.top + self.computerPosition.height;
        self.total4 = self.computerPosition.left + self.computerPosition.width;


        if (self.total < self.computerPosition.top || self.position.top > self.total3 ||
          self.total2 < self.computerPosition.left || self.position.left > self.total4) {

        } else {

          self.lives.innerHTML = 'Lives: ' + player.lives--;
          self.score.innerHTML = 'Score: ' + parseInt(player.score--);
          audioHit.play();
          audioHit.volume = 0.1;
          if (player.lives <= 0) {
            console.log('gameover');
            player.score = 0 - 1;
            clearInterval(game.animationsId);
            myAudio.load();
            self.score.innerHTML = 'Score : ' + 0;
            self.startOver.style.display = 'inherit';
            self.container.removeChild(self.lotsOfBlocks[i]);

          }
          if (player.highScore > player.score) {

            self.highScore.innerHTML = 'High Score: ' + player.highScore;

          }

        }
        self.score.innerHTML = 'Score : ' + parseInt(player.score += 1 / 60);
        player.highScore = parseInt(player.score);
      }
    }.bind(self), 175);
  }
}



game.gameNotifications = function() {
  this.tutBoxButton = document.querySelector('.button');
  this.tutBoxBg = document.querySelector('.tutorial-bg');
  this.tutBox = document.querySelector('.tutorial');
  var self = this;

  this.tutBoxButton.addEventListener('click', function() {
    this.tutBoxBg.style.display = 'none';
    console.log(this);


    console.log('click!')
  }.bind(this));

}

game.gameNotifications();

game.initiate = function(key) {
  if (!game.started && key === "Enter") {
    game.setTransition();
    game.placeRanomDivs();
    myAudio.play();
    game.gameAnimations();
    myAudio.volume = .2;
    game.started = true;
  }

}


Player.prototype.move = function(key) {
  switch (key) {
    case 'ArrowLeft':
      // if element is > 150px form left of screen
      if (this.element.offsetLeft >= 360) {
        this.element.style.left = this.element.offsetLeft - 150 + 'px';
      }
      break;
    case 'ArrowRight':
      // if elementis < 150px from right of screen
      if (this.element.offsetLeft < window.innerWidth - 400) {
        this.element.style.left = this.element.offsetLeft + 150 + 'px';
      }
      break;
  }
}

document.onkeydown = function(event) {
  player.move(event.key);
  game.initiate(event.key);
}
