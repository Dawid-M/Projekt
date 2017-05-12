document.addEventListener("DOMContentLoaded", function() {

console.log("Działa");

var images = document.querySelectorAll("#imgrandom");
console.log(images);

var holes = document.querySelectorAll(".hole");
console.log(holes);

var container = document.querySelector(".container");
console.log(container);

var boy = document.querySelector(".boy");
var mole = document.querySelector(".mole");
var rabbit = document.querySelector(".rabbit");

var button = document.getElementById('myButton');
console.log(button);

var buttonStop = document.getElementById('myButtonStop');
console.log(buttonStop);

var figureTime1 = document.querySelector("#card-right");
console.log(figureTime1);

var figureTime2 = document.querySelector("#card-left");
console.log(figureTime2);

var counterRightFront = document.querySelector("#counterRightFront");
var counterRightBack = document.querySelector("#counterRightBack");

var counterLeftFront = document.querySelector("#counterLeftFront");
var counterLeftBack = document.querySelector("#counterLeftBack");

var counterRightnumber1 = 5;
var counterRightnumber2 = 5;
var counterLeftnumber1 = 9;
var counterLeftnumber2 = 10;
var number = 0;

var intervalTime = 1000;

var count = 0
function countPointsBoy () {
  var counter = document.querySelector("#counter");
    count = count + 500;
    counter.innerText = parseInt(count);
}

function countPointsMole () {
  var counter = document.querySelector("#counter");
    count = count + 100;
    counter.innerText = parseInt(count);
}

function countPointsRabit () {
  var counter = document.querySelector("#counter");
    count = count - 1000;
    counter.innerText = parseInt(count);
}

  for (var i=0; i<images.length; i++) {
    images[i].addEventListener("click", function(event) {
     this.style.display = "none";
     if (this.classList.contains('boy') === true && this.classList.contains('mole')===false && this.classList.contains('rabbit')===false) {
     countPointsBoy ();
   } else if (this.classList.contains('mole') === true && this.classList.contains('boy')===false && this.classList.contains('rabbit')===false) {
     countPointsMole();
   } else {
     countPointsRabit()
   }
  });
}

buttonStop.addEventListener("click", function(event) {
  console.log("Stop");
  //clearInterval(interval);
  window.location.reload();
});

var flipTimer = 1000;
button.addEventListener("click", function(event) {
  console.log("Działa!");
  this.disabled = true; //dezaktywacja buttona
  var intervalTimer = setInterval(function() {
  figureTime1.classList.toggle("flipped");
  figureTime2.classList.toggle("flipped");
  if (figureTime2.classList.contains("flipped") == false) {
    counterLeftnumber1=counterLeftnumber1-2;
    counterLeftFront.innerText = parseInt(counterLeftnumber1);
  } else if (figureTime2.classList.contains("flipped") == true) {
    counterLeftnumber2=counterLeftnumber2-2;
    counterLeftBack.innerText = parseInt(counterLeftnumber2);
  };

  if (counterLeftnumber2===-2 && figureTime2.classList.contains("flipped") === true) {
    counterLeftnumber2 = 10;
    counterLeftnumber2=counterLeftnumber2-2;
    counterLeftBack.innerText = parseInt(counterLeftnumber2);
    counterRightnumber2--;
    counterRightBack.innerText = parseInt(counterRightnumber2);
  } else if (counterLeftnumber1===-1 && figureTime2.classList.contains("flipped") == false) {
    counterLeftnumber1 = 11;
    counterLeftnumber1=counterLeftnumber1-2;
    counterLeftFront.innerText = parseInt(counterLeftnumber1);
    counterRightnumber1--;
    counterRightFront.innerText = parseInt(counterRightnumber1);
  };

  if (counterLeftnumber2 === 0 && counterRightnumber2 === 0 ) {
      clearInterval(intervalTimer);
      clearInterval(interval);
  };

  // if (counterLeftnumber2 < 9 && counterRightnumber2 === 5 ) {
  //     intervalTime = 1;
  // };

},flipTimer);

  var interval = setInterval(function() {
    function generateNumber() { // w sumie wystarczy sam for, bez funkcji
        for (var i=0; i<images.length; i++) {
          var number = (Math.floor(Math.random()*4)+1); //4 bo musi tez byc puste hole
          console.log(number);
            if (number == 1) {
              images[i].classList.toggle("mole");
              images[i].classList.toggle("rabbit");
              images[i].style.display = "block";
              //timer()
            } else if (number == 2) {
              images[i].classList.toggle("boy");
              images[i].classList.toggle("rabbit");
              images[i].style.display = "block";
              //timer()
            } else if (number == 3) {
              images[i].classList.toggle("boy");
              images[i].classList.toggle("mole");
              images[i].style.display = "block";
              //timer()
            } else if (number == 4) {
              images[i].style.display = "none";
              //timer()
            }
        }
      }
      generateNumber();
  },intervalTime);
});
});
