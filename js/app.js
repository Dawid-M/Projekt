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

var intervalTime = 2000;

var gotorules = document.querySelector(".gotorules");
var welcome = document.querySelector(".welcome");
var rules = document.querySelector(".rules");
var bye = document.querySelector(".bye");
var timesup = document.querySelector(".timesup");
var stopGame = document.querySelector(".stopGame");
var restartGame = document.querySelectorAll(".restartGame");
var minuspoints = document.querySelector(".minuspoints");
var speedup1 = document.querySelector(".speedup1");
var speedup2 = document.querySelector(".speedup2");
var elementToChange = document.getElementsByTagName("body")[0];
console.log(elementToChange);
// elementToChange.style.cursor = "url('images/mallet_small_rotated_clip.png'), auto";

function cursorchange() {
     elementToChange.style.cursor = "url('images/mallet_small_rotated_clip.png'), auto";
}

elementToChange.onmousemove = function(){
  var cursorBack = setTimeout(function() {
  elementToChange.style.cursor = "url('images/mallet_small.png'), auto";
},5000)
};

rules.style.display = "none";
timesup.style.display = "none";
stopGame.style.display = "none";
minuspoints.style.display = "none";
speedup1.style.display = "none";
speedup2.style.display = "none";

gotorules.addEventListener("click", function(event) {
  welcome.classList.toggle("welcomescale");
  rules.classList.toggle("rulesscale");
  rules.style.display = "block";
});

bye.addEventListener("click", function(event) {
  rules.style.display = "none";
  welcome.style.display = "none";
  button.disabled = false;
});

for (var i=0; i<restartGame.length; i++) {
restartGame[i].addEventListener("click", function(event) {
  window.location.reload();
});
}

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
     cursorchange()
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
  // alert("test");
  if (didFunction === true) {
    stopGame.style.display = "block";
  } else {
    stopGame.style.display = "none";
    window.location.reload();
  }

});

button.disabled = true;

var didFunction = false;

var flipTimer = 1000;
button.addEventListener("click", function(event) {
  console.log("Działa!");
  didFunction = true;
  var playMusic = document.querySelector("#funk").play();
  document.querySelector("#funk").style.visibility = "visible";
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
      timesup.style.display = "block";
      playMusic.pause(); //nie dziala w Chrome
      playMusic.currentTime = 0; //nie dziala w Chrome
      element.parentNode.removeChild(playMusic); // nie dziala

  };

  if (stopGame.style.display === "block") {
      clearInterval(intervalTimer);
      clearInterval(interval);
  }

  if (counter.innerText < -2000) {
    minuspoints.style.display = "block";
    clearInterval(intervalTimer);
    clearInterval(interval);
  };

  if (counterLeftnumber2 === 6 && counterRightnumber2 === 4 ) {
      intervalTime = 1000;
      speedup1.style.display = "block";
      var speed1msg = setTimeout(function() {
      speedup1.style.display = "none";
    },1500);

  } else if (counterLeftnumber2 === 0 && counterRightnumber2 === 3 ) {
      intervalTime = 500;
      speedup2.style.display = "block";
      var speed2msg = setTimeout(function() {
      speedup2.style.display = "none";
    },1500);
  };

},flipTimer);

changeTime();

var interval;
function changeTime() {
  interval = setTimeout(function() {
    // function generateNumber() { // w sumie wystarczy sam for, bez funkcji
        for (var i=0; i<images.length; i++) {
          var number = (Math.floor(Math.random()*4)+1); //4 bo musi tez byc puste hole
          // console.log(number);
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
      // }
      // generateNumber();
      changeTime();
  },intervalTime);
}
});


//wersja działajaca z setIntervalem ale wtedy nie mozna dynamicznie zmieniac intervalu dlatego trzeba zastosowac
// setTimeout w funkcji i wywolac ja w obrebie setTimeout (patrz wyzej)
//   var interval = setInterval(function() {
//     function generateNumber() { // w sumie wystarczy sam for, bez funkcji
//         for (var i=0; i<images.length; i++) {
//           var number = (Math.floor(Math.random()*4)+1); //4 bo musi tez byc puste hole
//           // console.log(number);
//             if (number == 1) {
//               images[i].classList.toggle("mole");
//               images[i].classList.toggle("rabbit");
//               images[i].style.display = "block";
//               //timer()
//             } else if (number == 2) {
//               images[i].classList.toggle("boy");
//               images[i].classList.toggle("rabbit");
//               images[i].style.display = "block";
//               //timer()
//             } else if (number == 3) {
//               images[i].classList.toggle("boy");
//               images[i].classList.toggle("mole");
//               images[i].style.display = "block";
//               //timer()
//             } else if (number == 4) {
//               images[i].style.display = "none";
//               //timer()
//             }
//         }
//       }
//       generateNumber();
//   },intervalTime);
// });
});
