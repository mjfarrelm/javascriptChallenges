//-------------------------------------------------------------------//

/*

Activity 1:
Create a variable called age. Write an if statement that logs “Yes I can serve you”
if the age is greater than 17 and else logs “You aren’t old enough”.

Stretch
Take your if statement and add a variable called country in.
Eg. if age > 17 and country == “UK”.


let age = 37;
let country = "UK";

if (age > 17) {console.log ("Yes, I can serve you")

} else { (console.log ("You aren't old enough"))

}



if (age > 17 && country == "UK") {
    console.log ("Yes, I can serve you")

} else {console.log ("You aren't old enough")

}*/

//-------------------------------------------------------------------//

/*

Activity 2:
Create a variable for any pizza topping.
Create a switch statement, if the topping is one of your favourite ingredients, log to the console 
“These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log
to the console “I don’t mind having ${topping} on my pizza.
Finally, for any topping you don’t like log “${topping} should not be on a pizza.”




let pizzaTopping = "pistachios"

switch (pizzaTopping){
    case "mushrooms":
    case "pepperoni":
    case "peppers":
    console.log ("These are important ingredients for my pizza")
    break;
    case "pineapple":
    case "chicken":
    case "onion": 
    console.log ("I don't mind having %{pizzaTopping} on my pizza")
    break;
    case "tuna":
    case "burrata":
    case "pistachios":
    console.log ("${pizzaTopping} should not be on my pizza")
    break;
    default:
    console.log("I'd never put this on pizza!")    
}*/

/*let password = "butters";

//-------------------------------------------------------------------//


/*Activity 3:
Create a variable called password.
Check how many letters are in the password, if there are less than 8,
log to the console that the password is too short. Otherwise log the 
password to the console.

Stretch
Create a variable called num.
Check if the variable is divisible by 3 or 5. If it is, log “This number
is divisible by 3 or 5”. Otherwise log something else. 



if (password.length <7) {
console.log ("Password too short");
}
if (password.length >7){
console.log ("Password Accepted");
}

else {console.log ("Please enter password again")}

*/




/*Activity 4:
Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log
“buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the
console. Otherwise log num to the console.



let num = "11";



if (num % 3 === 0 && num % 5 === 0) {
console.log("fizzbuzz");
}
else if (num % 3 === 0){
console.log("fizz");
}
else if (num % 5 === 0){
console.log("buzz");
}
else {console.log("num");
}

*/


/*Activity 5:
Create a variable called num.
Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).



isPalindrome = (num) => {
    for(let i=0; i<num.length; (i++)){
    if(num.substring(i,i+1) !== num.substring(num.length -i -1, num.length - i)){
        return "Not a Palindrome";
    }
}
    return "Palindrome";
}

console.log(isPalindrome("19777781"));


/*
Activity 6:
Create a variable called time, a variable called placeOfWork and a variable called townOfHome.
Create an if statement that logs to the console where someone is at times of the day. E.g.
if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. 

let time = ("7");
let placeOfWork = ("the office");
let townOfHome = ("Liverpool");

if (time >6 && time <8){
console.log(`If the time is ${time}, I'm in ${townOfHome}`);
}
else if (time >8 && time <10){
    console.log(`If the time is ${time}, I'm at ${placeOfWork}`);
}
else if (time >7 && time <9){
    console.log(`If the time is ${time}, I'm commuting`);
}

*/
/*
Activity 7:
Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
Find the index of a last vowel in the string.  }


let stringName = ("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi");

console.log(stringName.lastIndexOf("a"));
console.log(stringName.lastIndexOf("e"));
console.log(stringName.lastIndexOf("i"));
console.log(stringName.lastIndexOf("o"));
console.log(stringName.lastIndexOf("u"));


/*
Activity 8:
Create a variable called word that takes a string. Create an if statement that checks if the 
last letter is the same as the first. If it is return true, otherwise return false.



let word = "bomb";

if (word.charAt(0) === word.charAt(word.length-1)){
console.log("True");
}
else {console.log("False");
};

    /*
Activity 9:
Create two variables called num1 and num2.
Create an if statement that checks if the result of the sum is even. If it is return the number,
otherwise return the numbers multiplied together.}

let num1 = 18;
let num2 = 3;
let total = num1 + num2

if (total% 2 === 0) {
    console.log("Even");
    }
else {
    console.log (num1 * num2);
}
*/


