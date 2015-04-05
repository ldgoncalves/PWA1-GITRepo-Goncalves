/*
Name: Luana Goncalves
Date: 4/04/2015
Assignment: Goal1: Assignment: Duel1
 */
/******************************
 Start
 Declarations
 playerOne = Spiderman
 playerTwo = Batman
 player1Damage = 20 maximum damage
 player2Damage = 20 maximum damage
 player1Health = 100 hit points
 player2Health = 100 hit points
 rounds = 0
 Begin fight function and within braces, create an alert for user to start Spiderman vs. Batman fight.
 Insert FOR LOOP in fight function. If i is less than 10 (the 10 rounds) then execute code every time it loops around the i increment adds one to i.
 Within FOR LOOP braces, declare:
 minDamage for player1 to be player1Damage times .50. Same declaration with player2.
 To do this at random, declare this formula for both players:
 Math.floor(Math.random() * (max - min) + min);
 From the results of the formula, minus the health of both players as so: playerOneHealth 	= playerOneHealth - f1
 Declare results  through winnerCheck function.
 While the function is still looping, outcome will only determine winner or loser at end.
 IF results are strictly equal to “no winner”, advance to next round and alert the end of round and health of both player. ELSE alert the results.
 Implement the break command.
 *******************************/
// self-executing function
(function(){
    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 0;

    function fight(){
        //code will go here
        console.log('in the fight function');

        alert(playerOneName + ":" + playerOneHealth + ":" + " *START* " + playerTwoName + ":" + playerTwoHealth);

        for (var i=0; i<10; i++){
            //console.log(i);
            //random formula is - Math.floor(Math.random() *(max-min) +min);

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()* (player1Damage-minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random()* (player2Damage-minDamage2) + minDamage2);
            //console.log(f1);
            //console.log(f2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);

            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
              round++;
                alert(playerOneName + ":" + playerOneHealth + ":" + " *ROUND "+round+" OVER* " + playerTwoName + ":" + playerTwoHealth);
            }else{
                alert(results);
                break;
            }
        };

    };

    function winnerCheck(){
        console.log("in winnerCheck FN");
        //code will go here
        var result="no winner";

        if(playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die";
        }else if(playerOneHealth<1){
             result = playerTwoName+" WINS!!!"
        }else if(playerTwoHealth<1){
            result = playerOneName+" WINS!!!"
        };

        return result;

    };

    /******* The program gets started below *******/
    console.log('program starts');
    fight();

})();

