//!#######################################################################
//? 1. What is the use of a constructor function in javascript?

console.log("Hello World!");


function students(vorname, nachname, age) {
    
    this.vorname = vorname;
    this.nachname = nachname;
    this.age = age;
    console.log(this); 
}

let yunus = new students("Yunus", "Polat", "31")
let emre = new students("Emre", "Erdem", "25")

console.log(yunus);
console.log(emre);
//!#######################################################################
//? 2. What is the rest parameter?

const personel3 = {
  pName: "Johny",
  surname: "DEEP",
  job: "actor",
  age: 55,             
};


const yeni={...personel3, job:"father", location:"USA"}
console.log(yeni);


//!#######################################################################
//? 3. What is the spread operator?

const dizi1 = [1, 2, 3];
const dizi2 = [4, 5, 6];
const concatDiziler = [...dizi1, ...dizi2];

console.log(concatDiziler);          // Output: [1, 2, 3, 4, 5, 6]


//todo we can use the spread operator to copy an array or object.

const orginDizi = [1, 2, 3];
const copyDizi = [...orginDizi];

console.log(copyDizi);               // Output: [1, 2, 3]

//!#######################################################################
//? 4. What is Object Destructuring?

const person = {
  firstname: 'John',
  age: 30,
  occupation: 'Developer'
};

const { firstname, age } = person;

console.log(firstname);                     // Output: 'John'
console.log(age);                           // Output: 30
