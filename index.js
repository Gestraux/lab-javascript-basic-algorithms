// Iteration 1: Names and Input

let hacker1 = 'Ré';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = `Javier`
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

function nameLength(driverName) {
    const driverNameLength = hacker1.length;
    const navigatorNameLength = hacker2.length;
    
    if (driverNameLength > navigatorNameLength) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }
    else if (driverNameLength < navigatorNameLength) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }
    else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }  
}


// Iteration 3: Loops

//3.1
let nameWithSpace = ''

for (let i = 0; i < hacker1.length; i++) {
    nameWithSpace += hacker1[i] + ' '
}
console.log(nameWithSpace.toUpperCase())

//3.1 (Version without loop)
const uppercase = hacker1.toUpperCase()
console.log(uppercase);

uppercase.split('').join(' ');

//3.2
let nameInReverse = ''

for (i = hacker2.length - 1; i >= 0; i--) {
    nameInReverse += hacker2[i] }
console.log(nameInReverse);

//3.2 (Version without loop)
function ReverseString(hacker2) {
    return hacker2.split('').reverse().join('')
    }
console.log(ReverseString('Javier'));

//3.3
let print = ""
  for (i = 0; i < hacker1.length ; i++ ) {
    if (hacker1[i] < hacker2[i]) {
       console.log("The driver's name goes first.");
      break;
    }
    else if (hacker1[i] > hacker2[i]) {
       console.log("Yo, the navigator goes first, definitely.");
      break;
    }
    else if (hacker1[i] === hacker2[i]) {
       console.log("What?! You both have the same name?");
    }
  }