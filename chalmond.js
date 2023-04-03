/*

Activity 1:
Make an array of 3 of your favourite songs. Log them to the console.
Stretch
Can you add another two songs to the list using a method and then remove the last one
added?


let faveSongs = [
    "Sound & Vision",
    "Let Down",
    "Blackbird"
];

console.log (faveSongs)

faveSongs.push("Nightswimming")
faveSongs.push("Coconut")

console.log(faveSongs)

faveSongs.pop ("Coconut")

console.log (faveSongs)


Activity 2
Using MDN choose one of the following methods: map(), shift(), unshift(), splice(), slice().
Create a program to demonstrate the use of the method.
JS
(Note: Not all methods would permanently update/ make changes to the arrays themselves)


let lunchOptions = [
    "Burger",
    "Sandwich",
    "Salad",
    "Soup"
];

lunchOptions.splice(2);

console.log(lunchOptions);



/*

/*Activity 1:
Create an array that lists your favourite films, up to
5 elements.Add 2 more using a method
Use a loop to cycle through the array


let favouriteFilms = [
    "Parasite",
    "Zodiac",
    "Arrival",
    "Children of Men",
    "There Will Be Blood"
];

console.log(favouriteFilms)

favouriteFilms.push("Kill Bill")
favouriteFilms.push("Toy Story 3")

console.log(favouriteFilms)
*/

/*
Activity 2
Generate 6 random numbers between 1 - 50 and log them to the console using a for loop


let numList = [
    "1",
    "8",
    "13",
    "19",
    "20",
    "25"
];

for(let i =0; i< numList.length; i++){

console.log(numList[i])

}

*/

/*
Activity 3:
If we can create a loop to put 0 - 9 on the screen, how can we count from 9 - 0? Create a program that does this


let singleDigits = [

    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];

for (let i= 9 ; i >= 0; i--){

    console.log(singleDigits[i]);
}




Activity 4:
Displays 4 films stored in an array.
Use a for loop to show each film in the array
Use an if statement to check if the 3rd film in the array is Ghostbusters.
If it is, return “Yay its Ghostbusters”. If it isn't return “Boo! We want Ghostbusters”


let filmList = [
    "Goonies",
    "Home Alone",
    "Ghostbusters",
    "Breakfast Club",
    "Matilda"
];

if (filmList[2] == "Ghostbusters"){
    console.log("“Yay its Ghostbusters”");
}
else {
    console.log("“Boo! We want Ghostbusters”");
}

/*


/*
Activity 5
Generate a random number between 1 - 30 six
times.
For each random number generated, check if this
number is divisible by 7 or not.
Log out a message to the console if it is divisible by 7 or not.


let num= Math.floor(Math.random() *30) +1;
console.log(num);
if (num % 7 == 0){
    console.log("Divides by  7")
}
    else{(console.log ("Does not divide by 7"));
    }





/*
Activity 6:
Imagine you’re a programmer for a social media platform! You have been tasked
with building a prototype for a mutual followers program.

> Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4
names as strings. Make sure there are 2 names that are in BOTH arrays.

> Using a nested loop iterate over both arrays and console.log out the matching followers



let  bobsFollowers = [
    "Linda",
    "Sue",
    "Peter",
    "Danielle"
];

let hannahsFollowers = [
    "James",
    "Danielle",
    "Jonathan",
    "Linda",
];


console.log(bobsFollowers && hannahsFollowers);





/*
Activity 7:
Research on do...while loop, find out about the difference between for loop,
while loop and do... while loop. Give an example of each. What are the pros
and cons?
*/


//FOR LOOPS

//   set instructions for the beginning and end of the loop and 
//   can move forwards or backwards until the permutations have been
//   run to the declared endpoint.


// for (let i = 0; i < 4; i += 1) {
//     console.log(i);
//   };




//WHILE LOOPS

// set instructions for sequence to run whilst the data contained is 'true'.
// Different to for loop as the number of iterations is unknown until it reaches
// its end point


//   let i = 0;
  
//   while (i < 10) {        
//     console.log(i);
//     i++;
//   }


//DO..WHILE LOOPS

// //Gives a sequence whilst the data is 'true' like a while loop. However,
// the do..while will only check the condition after it completes its first loop.

// x = 0
// i = 4

// do {
//   x = x + i;
//   console.log(x)
//   i++;
// } while (i < 12);