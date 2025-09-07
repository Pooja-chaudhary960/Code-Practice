// Function: Piece of code to perform specific tasks.
/**
 * function <functionName> (params){
 * //code
 * }
 */

function greet (name){
    console.log("Hello " + name);
}
// function call
greet("Sita");
greet("Pooja");
greet("Jina");


function square (number){
    console.log(number*number)
}
square(2);

function addition(a,b){
    console.log(a+b);
}
addition(5,5);

//Return Type
/*function result(marks){
    if(marks>40){
        return "PASS";
    }else{
        return "FAIL";
    }
}
*/

function percentage(score, total){
    const percent = (score/total)*100;
    return percent;
}
 const result = percentage(60, 100);
 console.log(result);

 // Local vs global variable

 const name = "Pooja";

console.log(name);

function test(){
    const age = 20;
    console.log(age);
}

console.log(age);
test();