/*
Name: Luana Goncalves
Date: 4/23/2015
Assignment: Goal4: Assignment: Duel3
 */

// self-executing function
(function(){
    console.log("FIGHT!!!");
    //Declarations: created an array with two objects with 3 key properties: player name,damage and health
    var fighters =  [fighter1 = {name:"Spiderman",damage:20, health:100},
    fighter2 = {name:"Batman",damage:20,health:100}];

    //rounds starts at 0 for increment
    var round = 0;

    //grab id for text above fight button
    //advance rounds will be displayed here
    var roundTxt= document.getElementById('round');
    //text for fight button
    roundTxt.innerHTML = 'Click FIGHT BUTTON to Start!';

    //grab id for winner announcement
    //this is where the winner will be displayed
    var winner = document.getElementById('scores');
    //CSS style for display
    winner.style.textAlign = 'center';
    winner.style.fontFamily = 'arial';
    winner.style.fontSize = '25px';

    //grab id for fighter1 display
    //text for fighter1 scores
    var score1 = document.getElementById('kabal');
    console.log(score1);
    score1.innerHTML ='<p>' + fighters[0].name + ":" + fighters[0].health +'</p>';

    //grab id for fighter2 display
    //text for fighter2 scores
    var score2 = document.getElementById('kratos');
    console.log(score2);
    score2.innerHTML ='<p>' + fighters[1].name + ":" + fighters[1].health +'</p>';

    //grab id for fight button

    //function gets invoked
    function fight(){
        //code will go here
        console.log('in the fight function');

        //this event will only run until user clicks
       document.getElementById("fight_btn").addEventListener("click", function start () {
            //Damage occurs to both players at a random amount between half damage and maximum damage.
            var minDamage1 = fighters[0].damage * .5;
            var minDamage2 = fighters[1].damage * .5;
            //random formula is - Math.floor(Math.random() *(max-min) +min);
            var f1 = Math.floor(Math.random() * (fighters[0].damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (fighters[1].damage - minDamage2) + minDamage2);

            //inflict damage
            fighters[0].health -= f1;
            fighters[1].health -= f2;
            //print out status after each click
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
                //this get anchor tag
                var done = document.querySelector('a.buttonblue');
                //overwrites FIGHT!!! once winner is determined
                done.innerHTML = "Done!!!";
                //disables button from  running function when clicked
                document.getElementById("fight_btn").removeEventListener('click',start);
            }
            });

    }

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
        }

        return result;

    }

    /******* The program gets started below *******/
    console.log('program starts');
    fight(); //to invoke fight function

})();

