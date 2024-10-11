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
function main();
let again = true;
trainer = confirm("Do you want to play trainer?");
playNim(){
    if (again == true) main();
else alert("Thank you for playing!")
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
alert("Nim game played");
playerTurn();
if (count < 21) alert("You lose!");
else cpuTurn();
if (count > 21) alert("you win!")
}

/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
turn = prompt("do you want to go 1,2, or 3 turns?");
if (turn == 1) count ++;
else if (turn == 2) count +=2;
else if (turn == 3) count +=3;
else alert("Your input is invalid");
alert("the count is now"+count);
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
if (count == 17) turn = 3;
else if (count == 18) turn = 2;
else if (count == 19||20) turn = 1;
else alert("Your input is invalid");
}
