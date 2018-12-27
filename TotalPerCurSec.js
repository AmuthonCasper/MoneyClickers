#pragma strict
private var textField : UI.Text;
static var curMoneyResult : long;
static var curMoney1 : long;
static var curMoney2 : long;

function Start () {
    CurMPerSecF(); // Calls function CurMPerSecF()
}

function Update () {
    textField = GetComponent(UI.Text); // Reference to UI.Text Componement (see 1 below)
    textField.text = "$ This Sec: " + ToDot2(curMoneyResult.ToString());; // Update This Second text  
}

function CurMPerSecF() {
    while (true){ // Create while loop, it keeps doing things that are inside it
        curMoney1 = ScoreCount.money; // checks how muchmoney and sets it to CurMoney1, (for instance 500)
        yield WaitForSeconds (1); // wait for 1 second
        curMoney2 = ScoreCount.money; //checks how muchmoney and sets it to CurMoney2, (for instance 700)
        curMoneyResult = curMoney2 - curMoney1; // check the change of money, (for instance 200)

        if (curMoneyResult == ScoreCount.money) { // Fix bug where curMoneyResult would be the same as ScoreCount.money in the beginning
            curMoneyResult = 0; // Set curMoneyResult to 0 
        }
    }
}

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