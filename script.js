/* Nim Trainer by [Artur Sad]
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/* Global Variables */
var trainer = false
var count = 0
/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
again = false;
trainer = confirm("do you want to play trainer mode?");
playNim();
again = confirm("Do you want to play again?")
if (again == true) main();
else alert("End of the game, thank you for playing");
}
/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
 count = 0;
 while (count < 21) {
 userTurn();
  if (count > 20) alert("You lose!");
  else {
    cpuTurn();
    if (count > 20) alert("You win!");  
  }
 }
  
}

/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
   count+=3;
   alert("user counts 3, count is now"+ count)
  
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
  count+=3;
  alert("computer counts 3, count is now"+ count)
}