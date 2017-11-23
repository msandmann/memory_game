
var cards = [
  {
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
  },
  {rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
  },
  {rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
  },
  {rank:"king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
  }
]

var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]){
    console.log('You found a match!');
    alert('You found a match!');
  } else {
    console.log('Sorry, try again.');
    alert('Sorry, try again.');
  }

}

var flipCard = function (){
  console.log("User flipped " + cards[this.getAttribute('data-id')].rank);
  console.log(cards[this.getAttribute('data-id')].cardImage);
  console.log(cards[this.getAttribute('data-id')].suit);
  cardsInPlay.push(cards[this.getAttribute('data-id')].rank);

  this.setAttribute('src', cards[this.getAttribute('data-id')].cardImage);

  if (cardsInPlay.length === 2){
    checkForMatch();
  }
}

var createBoard = function(){
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();

//add reset button
//add score tracker

console.log("Up and running!")
