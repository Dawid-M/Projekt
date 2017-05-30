document.addEventListener("DOMContentLoaded", function() {

  console.log("Działa");

  var click = document.querySelector('.click');
  console.log(click);

  click.addEventListener("click", function(event) {
    function myFunction() {
      myExternalWindow = window.open("index_projekt.html", "Projekt - Whack-a-Mole", "resizable");
      myExternalWindow.resizeTo(1366,760); //resize window to 1366x768
    }
  myFunction();
  });

});
