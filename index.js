
var numberDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener('click',  function(){
       
       var button = this.innerHTML;
       console.log(this.innerHTML);
       switch(button){
        case "w":
        var drum1 = new Audio("./sounds/tom-1.mp3");
            drum1.play();
            break;
        case "a":
         var drum2 = new Audio("./sounds/tom-2.mp3");
         drum2.play();
          break;
        case "s":
          var drum3 = new Audio("./sounds/tom-3.mp3");
          drum3.play();
           break;
        case "d":
         var drum4 = new Audio("./sounds/tom-4.mp3");
         drum4.play();
         break;
        case "j":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
          break;
        case "k":
          var kick = new Audio("./sounds/kick-bass.mp3");
          kick.play();
          break;
        case "l":
          var snare = new Audio("./sounds/snare.mp3");
          snare.play();
          break;
        default:
            console.log("Not a valid key!");
        }    
         
    })
        
}








