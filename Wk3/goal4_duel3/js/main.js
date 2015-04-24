/*
Name: Luana Goncalves
Date: 4/04/2015
Assignment: Goal1: Assignment: Duel1
 */
/******************************

 Start
    Create a self-executing function and include in braces:
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

    //rounds starts at 0 for increment
    var round = 0;

    //text for fight button
    var roundTxt= document.getElementById('round');
    roundTxt.innerHTML = 'Click FIGHT BUTTON to Start!';

    //this is where the winner will be displayed
    var winner = document.getElementById('scores');
    //CSS style for display
    winner.style.textAlign = 'center';
    winner.style.fontFamily = 'arial';
    winner.style.fontSize = '25px';

    //text for fighter1 scores
    var score1 = document.getElementById('kabal');
    console.log(score1);
    score1.innerHTML ='<p>' + fighters[0].name + ":" + fighters[0].health +'</p>';

    //text for fighter2 scores
    var score2 = document.getElementById('kratos');
    console.log(score2);
    score2.innerHTML ='<p>' + fighters[1].name + ":" + fighters[1].health +'</p>';
    //button trigger
    var button = document.getElementById("fight_btn");

    //function gets invoked
    function fight(){
        //code will go here
        console.log('in the fight function');

        button.onlick = function (e) {

            //Damage occurs to both players at a random amount between half damage and maximum damage.
            var minDamage1 = fighters[0].damage * .5;
            var minDamage2 = fighters[1].damage * .5;
            //random formula is - Math.floor(Math.random() *(max-min) +min);
            var f1 = Math.floor(Math.random() * (fighters[0].damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (fighters[1].damage - minDamage2) + minDamage2);
            //console.log(f1);
            //console.log(f2);

            //inflict damage
            fighters[0].health -= f1;
            fighters[1].health -= f2;


            console.log(fighters[0].name + ":" + fighters[0].health + " " + fighters[1].name + ":" + fighters[1].health);
            //this is from the function to determine either to advance to next round or announce winner
            var results = winnerCheck();
            console.log(results);
            if (results === "no winner") {
                round++;
                //displays fighter1 current health
                score1.innerHTML = '<p>' + fighters[0].name + ":" + fighters[0].health + '</p>';
                //displays fighter2 current health
                score2.innerHTML = '<p>' + fighters[1].name + ":" + fighters[1].health + '</p>';
                //displays current round
                roundTxt.innerHTML = " *ROUND " + round + " OVER* ";
            } else {
                //displays winners in middle top of screen
                winner.innerHTML = '<p>' + results + '</p>';
                //break; //need in order to restart alert and allow user to continue to interact

            }

            e.preventDefault();
            return false;
        };
    };
    //begin winnerCheck function
    function winnerCheck(){
        console.log("in winnerCheck FN");
        //code will go here
        var result="no winner";
        //if there is no winner, round advance until it reaches 10
        //the results once round 10 is reached
        if(fighters[0].health<1 && fighters[1].health<1){
            result = "You Both Die";
        }else if(fighters[0].health<1){
             result = fighters[1].name+" WINS!!!"
        }else if(fighters[1].health<1){
            result = fighters[0].name+" WINS!!!"
        };

        return result;

    };

    /******* The program gets started below *******/
    console.log('program starts');
    fight(); //to invoke fight function

})();

