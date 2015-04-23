/*
Name: Luana Goncalves
Date: 4/04/2015
Assignment: Goal1: Assignment: Duel1
 */
/******************************
 Create a fighting game that deducts the health of each player at random, looping 10 times, and at the end of loop, either one of the players will win or both lose. Syntax for loop: (var i = 0; i < 10; i++){ }

 Start
    Create function with no parameters and include in braces:
        Create two arrays that displays player name, damage and health.

        var fighter1 = ["Spiderman", 20, 100];
        var fighter2 = ["Batman", 20, 100];
        rounds = 0

    Begin fight function and within braces, create an alert for user to start Spiderman vs. Batman fight.
    Insert FOR LOOP in fight function. If i is less than 10 (the 10 rounds) then execute code every time it loops around the i increment adds one to i.
    Within FOR LOOP braces, declare:
         minDamage for fighter1 to be index 1 times .50. Same declaration with fighter2.
         To do this at random, declare this formula for both players:
         Math.floor(Math.random() * (max - min) + min);
    From the results of the formula, minus the health of both players as so: fighter1 = fighter1[2] - f1
    Declare results through winnerCheck function.
    While the function is still looping, outcome will only determine winner or loser at end.
    IF results are strictly equal to “no winner”, advance to next round and alert the end of round and health of both player. ELSE alert the results.
    Implement the break command.
    After fight function, create the winnerCheck function.
    Declare result = no winner
    IF both fighter1 and fighter2 health is less than 1, result = You Both
    Die.
    ELSE IF only fighter1 health is less than 1, result = fighter2 WINS!!!.
    ELSE IF only fighter2 health is less than 1, result = fighter1 WINS!!!
    Return the result.

    After the winnerCheck function, write fight(); to invoke the fight function.
 End

 *******************************/
// self-executing function
(function(){
    console.log("FIGHT!!!");
    //Declarations
    //player name
    var fighter1 = ["Spiderman", 20, 100];
    var fighter2 = ["Batman", 20, 100];

    /*//player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;*/
    //rounds starts at 0 for loop increment.
    var round = 0;
    //function gets invoked
    function fight(){
        //code will go here
        console.log('in the fight function');

        alert(fighter1[0] + ":" + fighter1[2] + " *START* " + fighter2[0] + ":" + fighter2[2]);
        //loop for rounds begin
        for (var i=0; i<10; i++){
            //console.log(i);

            //Damage occurs to both players at a random amount between half                 damage and maximum damage.
            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            //random formula is - Math.floor(Math.random() *(max-min) +min);
            var f1 = Math.floor(Math.random()* (fighter1[1]-minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random()* (fighter2[1]-minDamage2) + minDamage2);
            //console.log(f1);
            //console.log(f2);

            //inflict damage
            fighter1[2]-=f1;
            fighter2[2]-=f2;

            //console.log(fighter1[2]);
            //console.log(fighter2[2]);

            console.log(fighter1[0] + ":" + fighter1[2] + " " + fighter2[0] + ":" + fighter2[2]);
            //this is from the function to determine either to advance to next round or announce winner
            var results = winnerCheck();
            console.log(results);
            if(results === "no winner"){
              round++;
                alert(fighter1[0] + ":" + fighter1[2]  + " *ROUND "+round+" OVER* " + fighter2[0] + ":" + fighter2[2]);
            }else{
                alert(results);
                break; //need in order to restart alert and allow user to continue to interact
            }
        };

    };
    //begin winnerCheck function
    function winnerCheck(){
        console.log("in winnerCheck FN");
        //code will go here
        var result="no winner";
        //if there is no winner, round advance until it reaches 10
        //the results once round 10 is reached
        if(fighter1[2]<1 && fighter2[2]<1){
            result = "You Both Die";
        }else if(fighter1[2]<1){
             result = fighter2[0]+" WINS!!!"
        }else if(fighter2[2]<1){
            result = fighter1[0]+" WINS!!!"
        };

        return result;

    };

    /******* The program gets started below *******/
    console.log('program starts');
    fight(); //to invoke fight function

})();

