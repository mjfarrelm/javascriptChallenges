/*Activity 1:
Take this code and turn it into arrow function syntax:


function factorial (n) {
    if ((n === 0) || (n ===1 )){
        return 1;
    }
    else{
        return (n * factorial (n-1));
    }
}
console.log(factorial(33));

------------------------------------------------------

//ANSWER//


const factorial = (num) => {
    return 
}

factorial ("")
factorial ("")
factorial ("")






---------------------------------------------------

/*
Activity 2:

Edit the below snippet to include two parameters and a
running order count updated when the function is called:

let orderCount = 0;

const takeOrder = (topping) => {
    console.log(`Pizza with ${topping}`);
    orderCount++;
}

takeOrder("pineapple");


---------------------------------------------
//ANSWER//

let orderCount = 0;

const takeOrder = (topping, cheeseType) => {
    console.log(`Pizza with ${topping} and ${cheeseType}`);
}

takeOrder(, "pineapple", "vegan cheese");




---------------------------------------------

Activity 3:
Cash machine time! Let’s create one that:
> Dispenses cash if your pin number is correct
and your balance is equal to, or more than, the
amount you’re trying to withdraw!


let pinNum = 0987;
let amount = ;
let accBalance = ;

const cashWithdraw = (pinNum, amount, accBalance) => {

    console.log();
}




    if(){
        console.log("Insufficient funds to complete transaction")
    }
else{
    console.log("`Withdrawing ${amount} from account`")
}
}
cashWithdraw (,,);
cashWithdraw (,,);
cashWithdraw (,,);
cashWithdraw (,,);

*/