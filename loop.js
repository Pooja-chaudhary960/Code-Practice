// Loop: Repeatedly do some tasks.
// For loop
 /**
  * for (start point; condition; increment/decrement){
  * 
  * }
  */
/**
 * i=1 => print 1 
 * i=2 => print 2
 * i=3 => print 3
 * i=4 => print 4
 * i=5 => print 5
 * 
 * 
 */
for (let i=1; i<=5; i++){
    console.log(i);
}

for(let i=5; i>=1; i--){
    console.log(i);
}



// while loop
/**
 * start point
 * 
 * while (condition){
 * inc/dec
 * }
 */

let i=1;

while (i <=5){
    console.log(i);

    i++;
}

const list = ["Pooja","sarita","Rita","Gita", "Jina","Rina"];

for (let i=0; i<list.length; i++){
    console.log(list[i]);
}




//1. Create a function that generate cubic value for e.g. 3 => 27
function cube(number){
    return number*number*number; // Return the cubic value
}

// 2. Use this function in loop to generate cubic values from 1 to 20

    for( let i=1; i<=20; i++){
        console.log(`Cube of ${i}: ${cube(i)}`);
        
}
cube(3);
