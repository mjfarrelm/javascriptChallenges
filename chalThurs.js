/*Activity 1:
Let’s edit our person object to include...
A function called sayHi and when it’s called,
it should return “Hello my name is ${this.name}”

person = {
    name: "Matt",
    age: 37,
    sayHello (){
        return `Hello, my name is ${this.name}`;
    }
};
console.log (person.sayHello());

*/
/*Activity 2:
Create an object called pet with the key values of: name,
typeOfPet, age, colour and methods called eat and drink.
They should return a string saying [Your Pet Name] is eating/drinking


pet = {
    name:"Bob",
    typeOfPet:"Cat",
    age: "21",
    color: "Brindled",
     eat(){
        return `${this.name} is eating tuna`;
    },
    drink (){
    return `${this.name} is drinking milk`;
    },
};
console.log (pet.drink())

*/

/*Activity 3:
Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices
And methods called drinksOrdered and foodOrdered.
They should return a string saying [Your order] is ... with all items chosen with costs and total cost.*/

coffeeShop = {

    branch: "Liverpool",
    drinks = {
        3.5: "Americano",
        4: "Latte",
        2.5: "Espresso",
        3.75: "Capuccino",
        3: "Tea",
     } [amount],
    
    food: [
        "Coissant",
        "Bagel",
        "Toastie",
        "Sandwich",
        "Cake"
    ],
    

    drinksOrdered(){
        return `That's ${this.drinks}`;
    },
    foodOrdered (){
        return `and ${this.food} which comes to`;
    }
}
console.log (coffeeShop.drinksOrdered(), coffeeShop.foodOrdered());

