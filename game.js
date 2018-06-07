

//var textinput = document.getElementById("game");
var arrayofStrings = ["Toyota","BMW","Mercedes","Nissan","Tesla","Honda","Hyundai","Audi","Ford","cadillac","Porsche","Chevrolet","volkswagen","Ferrari","Subaru","Lexus","CHRYSLER","KIA","Bentley","VOLVO","FIAT","RENAULT","Skoda","SAAB","SEAT"];
var indexinStrings = 0;
var noofIncorrectAttempts = 0;
var audio = new Audio('BMW+DRIVEBY.mp3');
var honkSound = new Audio('car_horn.mp3');
var crash = new Audio('car_crashes_into_tree.mp3');
console.log("indexes" + "  " + indexinStrings);
var inputArray ;
var guessArray = [];
var gameOverFlag = false;
var extraKeys = "                           ";
var noOfWins = 0;
window.onload = function() 
{
    noOfWins = 0;
    gameInitialize();
    
};
//  var guessArray = ["_","_","_","_","_"];
//console.log(guessArray);

function gameInitialize() {
    indexinStrings = Math.floor(Math.random()*26);
    noofIncorrectAttempts = 0;
    inputArray = arrayofStrings[indexinStrings].toUpperCase();
    guessArray = [];
    gameOverFlag = false;
    extraKeys = "                           ";
    document.getElementById("extraText").textContent = extraKeys ;
   // document.getElementById("extraText").textContent = extraKeys ;
        for (var i=0; i<inputArray.length;i++)
            {
                guessArray[i]="_";
            }
    document.getElementById("text").textContent = guessArray;
    document.getElementById("numberofAttemptsLeft").textContent = 8-noofIncorrectAttempts;
    document.addEventListener('keydown', runevent);
    document.getElementById("result").textContent = "";
    document.getElementById("noofwins").textContent = noOfWins;
}
//document.getElementById("text").textContent = guessArray;

function runevent(event) {
        var keyCode= event.keyCode;
        console.log("keycode   " + keyCode);
        var keyPressed = event.key.toUpperCase();
        if(keyCode>=65 && keyCode<=91)
            {
  
                if (inputArray.includes(keyPressed))
                {
                     guessArray = locations(keyPressed,inputArray,guessArray);
                    //  audio.play(); 
                  document.getElementById("text").textContent = guessArray;  
                honkSound.play(); 
                }      
                else
                {  // crash.play(); 
                     extraKeys = document.getElementById("extraText").textContent.toUpperCase() ;
                     
                     if (extraKeys.includes(keyPressed)){
                       
                     alert("already pressed :  " + keyPressed);
                     
                    }
                     else 
                     {
                        var textPosition = keyCode - 65;
                        
                        extraKeys = extraKeys.substr(0,textPosition) + keyPressed + extraKeys.substr(textPosition+1);
                        //console.log("POsition " + textPosition + " " + extraKeys);
                        //extraKeys = extraKeys+keyPressed;
                        document.getElementById("extraText").textContent = extraKeys ;
                        noofIncorrectAttempts ++;
                        document.getElementById("numberofAttemptsLeft").textContent = 8-noofIncorrectAttempts ;
                     }
   
 
                }
            }   
            if(guessArray.includes("_")) 
            {
                if(noofIncorrectAttempts >= 8)
                    {
                        document.getElementById("result").style.color= "red";         
                        gameOverFlag=true;
                        document.getElementById("result").textContent = "Game Over!";
                        gameOver();
                    }
            }
            else 
            {          
             document.getElementById("result").style.color= "red";
             gameOverFlag=true;
             document.getElementById("result").textContent = "You Win!"; 
             audio.play();
             noOfWins++;
             document.getElementById("noofwins").textContent = noOfWins;
             gameOver();     
            } 
  
}
function gameOver()
{
    document.removeEventListener('keydown', runevent);
}
// function gameOver(chr) {
//     console.log("gameover "+chr);
//   // document.removeEventListener('keydown',runEvent;
//    if(chr=='1') {gameReset();}

// }



function locations(keyPressed,inputArray,guessArray)
{
    var a=[],i=-1;
        while((i=inputArray.indexOf(keyPressed,i+1)) >= 0)  
            {
             guessArray[i]=keyPressed;
            }
        return guessArray;
}

function reset1() {

 
   noOfWins = 0;
   document.getElementById("noofwins").textContent = noOfWins;
   gameInitialize();
   // window.reload();
}



