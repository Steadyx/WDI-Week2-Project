var game = game || {};

function Player(element) {

  this.element = element;
  this.lives = 3;
  this.score = 0;
  this.highScore = 0;

}

var myAudio = new Audio("music/div.mp3");


var player = new Player(document.querySelector('.box'));

game.randomDiv = function(random) {
  this.container = document.querySelector('.container');
  for (var i = 0; i < 100; i++) {
    this.random = document.createElement('div');
    this.random.className = 'random';
    this.container.appendChild(this.random);
  }

}
game.randomDiv();

game.placeRanomDivs = function(randomDiv) {
  this.generatedDivs = document.querySelectorAll('.random');
  this.container = document.querySelector('.container');
  for (var i = 0; i < this.generatedDivs.length; i++) {
    this.left = Math.floor(Math.random() * parseInt(this.container.offsetWidth / 1.5)) + 'px'
    this.top = Math.floor(Math.random() * parseInt(this.container.offsetTop)) + 'px';
    this.width = Math.floor(Math.random() * 800) + 'px';
    this.height = Math.floor(Math.random() * 800) + 'px';

    this.generatedDivs[i].style.left = this.left;
    this.generatedDivs[i].style.top = this.top++;

    this.generatedDivs[i].style.width = this.width;
    this.generatedDivs[i].style.height = this.height;

  }

}

game.reset = function(){
  this.gamOverButotn = document.querySelector('.')
}

game.setTransition = function(lotsOfBlocks) {
    this.lotsOfBlocks = document.querySelectorAll('.random');
    this.score = document.getElementById('actual-score');
    this.highScore = document.getElementById('high-score');
    this.lives = document.querySelector('.lives');
    this.startOver = document.querySelector('.gameover-bg');
    var self = this;
    this.goUp = 0;
    this.gameAnimations = setInterval(function() {
        self.position = player.element.getBoundingClientRect();
        self.position.top = player.element.top;
        self.position.left = player.element.left;
        self.position.width = player.element.height;
        self.position.height = player.element.style.width;

        self.total = self.position.top + self.position.height;
        self.total2 = self.position.left + self.position.width;

        for (var i = 0; i < 100; i++) {

          self.lotsOfBlocks[i].style.top = self.goUp-- + 'px';

          //Get Position of all sides
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
            self.score.innerHTML = 'Score : ' + parseInt(player.score--);


              if (player.lives < 0) {
                console.log('gameover');
                clearInterval(self.gameAnimations);
                myAudio.pause();
                self.highScore.innerHTML = 'High-Score: ' + parseInt(player.score++);
                self.score.innerHTML = 'Score : ' + 0;
                self.startOver.style.display = 'inherit';
                self.lotsOfBlocks[i].style.top = self.placeRanomDivs.top;
              }

            }
            self.score.innerHTML = 'Score : ' + parseInt(player.score+=1 / 60);
          }
        }, 150);
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


    Player.prototype.move = function(key) {
      switch (key) {
        case 'ArrowLeft':
          this.element.style.left = this.element.offsetLeft - 150 + 'px';
          break;
        case 'ArrowRight':
          this.element.style.left = this.element.offsetLeft + 150 + 'px';
          break;
        case 'Enter':
          game.setTransition();
          game.placeRanomDivs();
          myAudio.play();
          myAudio.volume = 0.1;
          break;

          //   case 'ArrowUp':
          //     this.element.style.top = this.element.offsetTop - 100 + 'px'
          //
          //     break;
          //   case 'ArrowDown':
          //     this.element.style.top = this.element.offsetTop + 100 + 'px'
          //     break;
          //
      }
    }

    document.onkeydown = function(event) {
      console.log(player.move(event.key));
    }
