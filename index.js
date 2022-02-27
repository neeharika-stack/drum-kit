var num=document.querySelectorAll(".drum").length;
for (var i=0; i<num;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
function handleClick() {
  buttonAnimation(this.innerHTML);
   switch (this.innerHTML) {
     case "w":
      var crash=new Audio("sounds/crash.mp3");
       crash.play();
       break;

     case "a":
      var kick_bass=new Audio("sounds/kick-bass.mp3");
       kick_bass.play();
       break;

     case "s":
      var snare=new Audio("sounds/snare.mp3");
       snare.play();
       break;

     case "d":
      var tom1=new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;

     case "j":
      var tom2=new Audio("sounds/tom-2.mp3");
       tom2.play();
       break;

     case "k":
      var tom3=new Audio("sounds/tom-3.mp3");
       tom3.play();
       break;

     case "l":
      var tom4=new Audio("sounds/tom-4.mp3");
       tom4.play();
       break;

     default:
     console.log(this.innerHTML);

   }
}

}

document.addEventListener("keydown", function(event){
  buttonAnimation(event.key);
  switch (event.key) {
    case "w":
     var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
     var kick_bass=new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;

    case "s":
     var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
     var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
     var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
     var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
     var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
    console.log(event.key);

  }
}
);

function buttonAnimation(currentPressedKey){
  document.querySelector("."+currentPressedKey).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("."+currentPressedKey).classList.remove("pressed");
  }, 100)
}
