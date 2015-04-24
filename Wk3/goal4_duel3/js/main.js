/*
Name: Luana Goncalves
Date: 4/04/2015
Assignment: Goal1: Assignment: Duel1
 */
/******************************
 Create a fighting game that deducts the health of each player at random, looping 10 times, and at the end of loop, either one of the players will win or both lose. Syntax for loop: (var i = 0; i < 10; i++){ }

 Start
    Create function with no parameters and include in braces:
        Create an array with two objects that displays player name, damage and health.

 var fighters =  [fighter1 = {name:"Spiderman",damage:20, health:100},
 fighter2 = {name:"Batman",damage:20,health:100}];
 var round = 0;

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
    //Declarations: created an array with two objects with 3 key properties: player name,damage and health
    var fighters =  [fighter1 = {name:"Spiderman",damage:20, health:100},
    fighter2 = {name:"Batman",damage:20,health:100}];

    //rounds starts at 0 for loop increment.
    var round = 0;

    //function gets invoked
    function fight(){
        //code will go here
        console.log('in the fight function');

        var roundTxt= document.getElementById('round');
        roundTxt.innerHTML = 'Click FIGHT BUTTON to Start!';

        var score1 = document.getElementById('kabal');
        console.log(score1);
        score1.innerHTML ='<p>' + fighter1.name + ":" + fighter1.health +'</p>';

        var score2 = document.getElementById('kratos');
        console.log(score2);
        score2.innerHTML ='<p>' + fighter2.name + ":" + fighter2.health +'</p>';







        //alert(fighter1.name + ":" + fighter1.health + " *START* " + fighter2.name + ":" + fighter2.health);
        //loop for rounds begin
        for (var i=0; i<10; i++){
            //console.log(i);

            //Damage occurs to both players at a random amount between half damage and maximum damage.
            var minDamage1 = fighter1.damage * .5;
            var minDamage2 = fighter2.damage * .5;
            //random formula is - Math.floor(Math.random() *(max-min) +min);
            var f1 = Math.floor(Math.random()* (fighter1.damage-minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random()* (fighter2.damage-minDamage2) + minDamage2);
            //console.log(f1);
            //console.log(f2);

            //inflict damage
            fighter1.health-=f1;
            fighter2.health-=f2;

            //console.log(fighter1[2]);
            //console.log(fighter2[2]);

            console.log(fighter1.name + ":" + fighter1.health + " " + fighter2.name + ":" + fighter2.health);
            //this is from the function to determine either to advance to next round or announce winner
            var results = winnerCheck();
            console.log(results);
            if(results === "no winner"){
              round++;
                alert(fighter1.name + ":" + fighter1.health  + " *ROUND "+round+" OVER* " + fighter2.name + ":" + fighter2.health);
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
        if(fighter1.health<1 && fighter2.health<1){
            result = "You Both Die";
        }else if(fighter1.health<1){
             result = fighter2.name+" WINS!!!"
        }else if(fighter2.health<1){
            result = fighter1.name+" WINS!!!"
        };

        return result;

    };

    /******* The program gets started below *******/
    console.log('program starts');
    fight(); //to invoke fight function

})();

