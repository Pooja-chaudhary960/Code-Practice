// Print
console.log("hello world");
//console.error("This is Error");
//console.warn("This is Warn");

// Variable : It is a memory element
var age = 20;
var name = "Ram";
var isMale = false;

console.log(age);

var age = 30;
console.log(age);

// Note: NEVER USE var for variable declaration
// Always use const, unless let is required.


// let, const
let phone = 983737766;
phone = 9876648383;

console.log(phone);

const address = "Dang";
//address="Lamahi";

console.log(address);


// Data types
/**
 * A. Primitive Data Types: Immutable
 * 1. String: "Ram"
 * 2. Number: 123
 * 3. Boolean: True/False
 * 4. Null: Empty value
 * 5. Undefined: Not assigned yet
 * 6. Symbol: Unique identifier (mostly in objects)
 * 7. Bigint: Very large integer (98900098889900000975)
 * 
 * B. Non-Primitive Data Types/Reference Data Types : Mutable
 * 1. Objects: An objects store data in key- value pairs.Keys are usually strings (or symbols), values can be any type (string, number, array, function etc.). Mutable: we can change properties anytime.
 * Example:
 * let person = {
 *  name:"Ram",
 *  age:"23",
 * isStudent:true
 * }
 * 
 * console.log(person.name); //Ram
 * person.age=24; //update property
 * person.city = "ktm" // add new property
 * console.log(person);
 * 
 * 2. Array: An array is an ordered collection of values (list). Values can be of any types (numbers, strings, objects, functions). Mutable: we can add, remove or update elements.
 * Example:
 * let fruits = ["apple","banana", "mango"];
 * console.log(fruits[0]); // "apple"
 * fruits.push("orange"); // add at end
 * fruits[1] = "grapes"; //update
 * console.log(fruits); ["apple","grapes","mango","orange"]
 * 
 * 3. Function: A function is a block of reusable code. It can take parameters (input) and return a value (output). Functions themselves are objects in JavaScript (first-class citizens).
 * Example:
 * function add(a, b){
 *  return a+b;
 * console.log(add);
 * }
 * add(5,3);
 */
//function
function add(a, b){
 return a+b;

  }
   console.log(add(5,3));


   // Object, key value

   const profile = {
    name: "Rita",
    age: 23,
    address:{
        city:"Ktm",
        province:"Bagmati",
    },
    phone: [12344554, 8890000, 998777]
   };
   console.log(profile['address']["city"]);
   console.log(profile['age'])
   console.log(profile.name);
 
   // Array, index value (position), index always starts from Zero
   const marks = [40,50, 30, 50 ,60, 70, 90,100, "ram", true, {science: 40}, ["good"]]
   console.log(marks[0]);

   /** Operators
    * 1. Arithmetic operation : +, -,*,/,%
    * 2. Relational operation : >, <, ==, >=, ===
    * 3. Logical operation : && (AND), || (OR), NOt(!)
    * 
    */

   console.log(5 + 6);
   console.log(5 - 6);
   console.log(5 * 6);
   console.log(12/5);
   console.log(12 % 5);

   console.log(5 > 6);
   console.log(5 < 6);
   console.log(5<5);
   console.log(5 <=5 );
   console.log(5==5);
   console.log(5!=6);

   console.log(5 == 5);

   console.log(5 === "5");

   // AND: If one of the input is false, then result is false.
   console.log(false && false);

   // OR: If one of the input is true, then result is true.
   console.log(true || false);

   // NOT: If input is true, then result is false.
   console.log(!true);


   /**
    * Conditional statement(if, else, switch)
    * 
    * if (condition){
    *   
    * }
    * 
    */

   if(true){
    console.log("Hello from condition");
   }