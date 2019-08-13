var cardOne = document.querySelector("#card1");
var cardTwo = document.querySelector("#card2");
var cardThree = document.querySelector("#card3");
var cardFour = document.querySelector("#card4");
var cardFive = document.querySelector("#card5");
var cardSix = document.querySelector("#card6");
var cardSeven = document.querySelector("#card7");
var cardEight = document.querySelector("#card8");
var cardNine = document.querySelector("#card9");
var cardTen = document.querySelector("#card10");
var Btn = document.querySelector("#startBtn");
var topCard = document.querySelector("#topCard");
var Deck = document.getElementsByClassName("cards");

for (i = 0; i < Deck.length; i++) {
  Deck[i].addEventListener("click", drawCard);
}

Btn.addEventListener("click", cards);

var cardArray = [ cardOne, cardTwo, cardThree, cardFour,
cardFive, cardSix, cardSeven, cardEight, cardNine, cardTen ];
console.log( cardArray);

function myMove() {
  topCard.style.display = "none";
    var id = setInterval(frame, 1);
    var pos = 0;
    var k = 0;
    // var l = cardArray.length;
    // console.log(cardArray);
    function frame() {
        k++
        cardArray.forEach( function(item) {
          item.style.left = 300 + pos + k + "px";
        }); 
          // console.log(cardArray);  
          // console.log(pos);
          // console.log(k);      

        if (k == 30) {
          pos += k
          cardArray.shift();
          k = 0;
          // console.log(pos);
          // console.log(k);
          // console.log(cardArray);
          if (cardArray.length == 0) {
            clearInterval(id);
          }
          // console.log(pos);
          // console.log(k);
          // console.log(cardArray);
        }
      }
    }


function cards() {
  document.getElementById("intro").innerHTML = "Choose a random card";
  document.getElementById("start-container").style.margin = "50px 0 0 0";
  document.getElementById("intro").style.height = "50px";
  document.getElementById("intro").style.margin = "0 0 0 220px";
  document.getElementById("wrapper").style.display = "flex";
}

function drawCard() {
  var idTag = this.id;
  document.getElementById(idTag).classList.remove("cards");
  document.getElementById(idTag).classList.add("draw-card");

  for (i = 0; i < Deck.length; i++) {
    Deck[i].style.display = "none";
  }

  document.getElementById(idTag).style.transition = "2s";
  document.getElementById(idTag).style.left = "100px";
  document.getElementById(idTag).style.animation = "rotate 2s linear forwards";
  document.getElementById(idTag).style.background = "url(images/fool.jpg)";
  document.getElementById(idTag).style.backgroundSize = "150px 225px";
  
  setTimeout(showText, 2000);
  function showText() {
    document.getElementById("text-cards").innerHTML = "Tova e texta za kartata Tova e texta za kartata Tova e texta za kartata Tova e texta za kartata Tova e texta za kartata";
  }
}