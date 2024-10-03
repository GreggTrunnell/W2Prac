
/*
let catName= 'Rue';
let catAge= 3;
console.log( 'the name of the cat is', catName);
console.log( 'the age of my cat is:', catAge);

let sentance= 'this is text about the cat named ' + catName;

console.log( sentance);

sentance= 'the cat is ' + catAge + ' years old';
console.log( sentance );

catName= 'sophia';
catAge= 14;

sentance= 'later on, a different cat is '+ catAge +' old and is named '+ catName ;
console.log(sentance);
*/



/*
let thing1='guitar';
let thing2='basketball';

if (thing1==thing2){console.log('they are the same');}
else if(thing1=='elephant' || thing2=='elephant'){console.log('one is an elephant');}
else { console.log('not guitar or elephant');}
*/
/*
let seatsInCar=7;
let passangers=5;
let infants=1;
let carseats=0;
let fullTank=true;

if(seatsInCar>=passangers&&carseats>=infants){
    console.log('ready for trip');
    if(fullTank){
        console.log ('lets hit it');
        } else {console.log('need gas bro');}}

else{console.log('not ready yet');}
*/

/*let firstNumber=1;
let secondNumber=2;

let answer=(firstNumber+secondNumber);
console.log(answer);

console.log('the answer is '+answer);
console.log('the answer is ', answer, firstNumber);*/


let secret;

let code =123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

let isStudent = true;
let age = 20;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}