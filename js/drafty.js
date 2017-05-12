// var figureTime1 = document.querySelector(".back-right");
// console.log(figureTime1);
//
// var figureTime2 = document.querySelector(".back-left");
// console.log(figureTime2);

// w sumie nie potrzebne
// setTimeout(function() {
//   for (var i=0; i<images.length; i++) {
//   images[i].style.display = "none";
//   }
// },3000);

// w sumie nie potrzebne
// var counter=0;
// function timer() {
//   if(counter==4){
//     clearInterval();
//   } else {
//     counter++;
//   }
// }

// var setTimer = 1200;
// var intTimer = 1820;

// var intervalTimerLF = setTimeout(function() {
  // var leftFront = setInterval(function() {
  // counterLeftnumber1=counterLeftnumber1-2;
  // counterLeftFront.innerText = parseInt(counterLeftnumber1);
  // if (counterLeftnumber1==-1) {
  //   counterLeftFront.innerText = 1;
  //  } else if (counterLeftnumber1==-3) {
  //    counterLeftFront.innerText = 9;
  //      counterLeftnumber1 = 9;
  //  }
//},intTimer); //1550
// },setTimer);

// var setTimer = 1200;
// var intTimer = 1520;
// var intervalTimerLF = setTimeout(function() {
//   var leftFront = setInterval(function() {
//   counterLeftnumber1=counterLeftnumber1-2;
//   counterLeftFront.innerText = parseInt(counterLeftnumber1);
//   if (counterLeftnumber1==-1) {
//     counterLeftFront.innerText = 1;
//   } else if (counterLeftnumber1==-3) {
//     counterLeftFront.innerText = 9;
//       counterLeftnumber1 = 9;
//       timer();
//   }
// },intTimer); //1550
// },setTimer);

// counterLeftnumber2=counterLeftnumber2-1
// counterLeftBack.innerText = parseInt(counterLeftnumber2);
    // figureTime.classList.toggle("flipped");

    //DRAFT

    // var allHeroes = [boy, mole, rabbit];
    // allHeroes.forEach(function(el) {
    //   el.classList.remove("mole");
    //   el.classList.remove("rabbit");
    // })


    //wersja przed ustawianiem settime
    // function generateNumber() {
    //     for (var i=0; i<images.length; i++) {
    //       var number = (Math.floor(Math.random()*4)+1); //4 bo musi tez byc puste
    //         if (number<=1) {
    //           images[i].classList.remove("mole");
    //           images[i].classList.remove("rabbit");
    //           images[i].style.display = "block";
    //         } else if (number == 2) {
    //           images[i].classList.remove("boy");
    //           images[i].classList.remove("rabbit");
    //           images[i].style.display = "block";
    //         } else if (number == 3) {
    //           images[i].classList.remove("boy");
    //           images[i].classList.remove("mole");
    //           images[i].style.display = "block";
    //         } else {
    //           images[i].style.display = "none";
    //         }
    //       }
    //     }
    // generateNumber();

    //zmiana we wszystkich holes na ten sam obrazek - test
    // function generateNumber() {
    //   var number = (Math.floor(Math.random()*3)+1);
    //   var images = document.querySelectorAll("#imgrandom");
    //   console.log(number);
    //   if (number<=1) {
    //     for (var i=0; i<images.length; i=i+1){
    //     images[i].classList.remove("mole");
    //     images[i].classList.remove("rabbit");
    //     images[i].style.display = "block";
    //     }
    //   } else if (number<=2) {
    //     for (var i=0; i<images.length; i=i+1) {
    //     images[i].classList.remove("boy");
    //     images[i].classList.remove("rabbit");
    //     images[i].style.display = "block";
    //   }
    // } else {
    //     for (var i=0; i<images.length; i=i+1) {
    //     images[i].classList.remove("boy");
    //     images[i].classList.remove("mole");
    //     images[i].style.display = "block";
    //     }
    //   }
    // }
    // generateNumber();

    // DRAFT//
