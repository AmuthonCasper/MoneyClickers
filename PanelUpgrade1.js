﻿#pragma strict
static var textField : UI.Text; 
var isNotEnough = false;
static var canPlaySound;
function Start () {

    }


function Update () {
    canPlaySound = false;
    if (!isNotEnough) {
        textField = GetComponent(UI.Text); // Reference to UI.Text Componement (see 1 below)
        textField.text = "Buy For " + ToDot2(ScoreCount.upgrade1Cost.ToString()); // Update upgrade1Cost text
    }
    }

function BuyUpgrade1 () {
    if (ScoreCount.money >= ScoreCount.upgrade1Cost) { // If you have enough money
        canPlaySound = true;
        ScoreCount.money -= ScoreCount.upgrade1Cost; // deduct money by the cost of the upgrade
        ScoreCount.mPerClick += 1; // money per click gains by 1
        ScoreCount.upgrade1Cost *= 1.1; // Upgrade1 goes up in price  
        textField.text = "Buy For " + ToDot2(ScoreCount.upgrade1Cost.ToString()); // Text updates to new price
    }
    else {
        NotEnough (); // see function below
    }
}

function NotEnough () {
    isNotEnough = true;
    textField.text = "Not Enough!"; // text says the user doesn't have enough money
    yield WaitForSeconds (0.4); // wait for 0.4 seconds
    textField.text = "Buy For " + ToDot2(ScoreCount.upgrade1Cost.ToString()); // text returns normal price
    isNotEnough = false;
}
// function, later maybe change so i dont have to copy whole function?
function ToDot2 (number : String) { // Function (Give string of for instance 'money' (2100) and the string makes it for instance (2.1K) (use .ToString())
    var dollarString = "$";  //
    var dotString = "."; //
    var kString = "K"; //
    var mString = "M"; // 
    var bString = "B"; // 
    if (number.Length == 1) { // if number is 1
        number = String.Concat(dollarString, number); // combine all these strings

        return number; // return number when function is called.
    }
    if (number.Length == 2) { // if number is 10
        number = String.Concat(dollarString, number); // combine all these strings

        return number; // return number when function is called.
    }
    if (number.Length == 3) { // if number is 100
        number = String.Concat(dollarString, number); // combine all these strings

        return number; // return number when function is called.
    }
    if (number.Length == 4) { // if number is 1000
        var number1 = number[0]; //
        var number2 = number[1];
        var number3 = number[2];
        number = String.Concat(dollarString, number1, dotString, number2, number3, kString); // combine all these strings
        
        return number; // return number when function is called.
    }
    if (number.Length == 5) { // if number is 10000
        number1 = number[0]; // refernce
        number2 = number[1]; // refernce
        number3 = number[2]; // refernce
        var number4 = number[3];
        number = String.Concat(dollarString, number1, number2, dotString, number3, number4, kString); // combine all these strings
        
        return number; // return is: what to return when function is called.
    }
    if (number.Length == 6) { // if number is 100000
        number1 = number[0]; // refernce
        number2 = number[1]; // refernce
        number3 = number[2]; // refernce
        number4 = number[3];
        var number5 = number[4];
        number = String.Concat(dollarString, number1, number2, number3, dotString, number4, number5, kString); // combine all these strings
        return number; // return is: what to return when function is called.
    }
    if (number.Length == 7) { // if number is 1000000 one million
        number1 = number[0]; // refernce
        number2 = number[1]; // refernce
        number3 = number[2]; // refernce
        number4 = number[3];
        number5 = number[4];
        var number6 = number[5];
        number = String.Concat(dollarString, number1, dotString, number2, number3, mString); // combine all these strings
        return number; // return is: what to return when function is called.
    }
    if (number.Length == 8) { // if number is 10000000 ten million
        number1 = number[0]; // refernce
        number2 = number[1]; // refernce
        number3 = number[2]; // refernce
        number4 = number[3];
        number5 = number[4];
        number6 = number[5];
        number = String.Concat(dollarString, number1, number2, dotString, number3, number4, mString); // combine all these strings
        return number; // return is: what to return when function is called.
    }
    if (number.Length == 9) { // if number is 100000000 hundred million
        number1 = number[0]; // refernce
        number2 = number[1]; // refernce
        number3 = number[2]; // refernce
        number4 = number[3];
        number5 = number[4];
        number6 = number[5];
        number = String.Concat(dollarString, number1, number2, number3, dotString, number4, number5, mString); // combine all these strings
        return number; // return is: what to return when function is called.
    }
    if (number.Length == 10) { // if number is 1000000000 1 billion
        number1 = number[0]; // refernce
        number2 = number[1]; // refernce
        number3 = number[2]; // refernce
        number4 = number[3];
        number5 = number[4];
        number6 = number[5];
        number = String.Concat(dollarString, number1, dotString, number2, number3, bString); // combine all these strings
        return number; // return is: what to return when function is called.
    }
    if (number.Length == 11) { // if number is 10000000000 10 billion
        number1 = number[0]; // refernce
        number2 = number[1]; // refernce
        number3 = number[2]; // refernce
        number4 = number[3];
        number5 = number[4];
        number6 = number[5];
        number = String.Concat(dollarString, number1, number2, dotString, number3, number4, bString); // combine all these strings
        return number; // return is: what to return when function is called.
    }
    if (number.Length == 12) { // if number is 100000000000 / 100 billion
        number1 = number[0]; // refernce
        number2 = number[1]; // refernce
        number3 = number[2]; // refernce
        number4 = number[3];
        number5 = number[4];
        number6 = number[5];
        number = String.Concat(dollarString, number1, number2, number3, dotString, number4, number5, bString); // combine all these strings
        return number; // return is: what to return when function is called.
    }
    else{ // if number is over 1 trillion.
        number = "over 1 trillion";
        return number; // return is: what to return when function is called.
    }
}



