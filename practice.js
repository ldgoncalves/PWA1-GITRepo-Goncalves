/**
 * Created by luanagoncalves on 4/13/15.
 */

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9 (){return "abcdef"};

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);


var test10 = null;
console.log(typeof test10);

if (99 == "99") {
    console.log("A number equals a string!");
}else{
    console.log("No way a number equals a string");
};

function Duck (sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
}

var toy = new Duck ("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);