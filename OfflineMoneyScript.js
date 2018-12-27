#pragma strict
var Panel : GameObject; 
var EarnedText : GameObject; 

var totalMinutes : int; 
var totalMinutes1 : int;
var totalMinutesDifference : int;
var earnedMoney : long;
var giveMoney = false;
function Start () {

}

function Update () {
    /*
    if (Input.GetKeyDown ("f")) {
        //PlayerPrefs.DeleteAll();
        //ScoreCount.mPerSec += 100;
        ScoreCount.money += 10000;
        //Debug.Log("money: " + ScoreCount.money);
    } 
    if (Input.GetKeyDown ("r")) {
        ScoreCount.money = 0;
    } 
    */
    if (giveMoney) {       
        ScoreCount.money += earnedMoney;
        Debug.Log("gave money?");
        giveMoney = false;
    }
}

function OnApplicationPause(paused : boolean) { // see if app is paused or not


    if (paused) { // runs when app gets put to background
        PlayerPrefs.SetInt("SavedtotalMinutes1", GetDateTimeCode ()); // set totalMinutes1 to current amount of minutes
        Debug.Log("PAUSED");
    }
    if (!paused) { // runs on app start
        Debug.Log("Game Unpaused");

        totalMinutes1 = PlayerPrefs.GetInt("SavedtotalMinutes1"); // get the saved amount of time from last close
        totalMinutesDifference = GetDateTimeCode() - totalMinutes1; // the amount of minutes now - minutes saved when last quit app = total minutes difference
        //ScoreCount.mPerSec = PlayerPrefs.GetString("SavedmPerSec");
        Debug.Log("mPerSec as OFMS receives: " + parseFloat(PlayerPrefs.GetString("SavedmPerSec")));
        Debug.Log("money as OFMS receives: " + ScoreCount.money);
        earnedMoney = totalMinutesDifference * parseFloat(PlayerPrefs.GetString("SavedmPerSec"))   ; // the offline money earned (1 * mPerSec for every minute offline)
        Debug.Log("EM" + earnedMoney);
        
        if (earnedMoney != 0) { // if the player DID earn money offline
            Panel.SetActive (true); // activate the welcoming panel 
            EarnedText.GetComponent(UI.Text).text = "You were away for: \n" + totalMinutesDifference + " Minute(s)! \n " + "And earned: \n" + ToDot2(earnedMoney.ToString()); // shows text
            //       ScoreCount.money = PlayerPrefs.GetInt("SavedMoney");
            //ScoreCount.money += earnedMoney; // give the player the money
            giveMoney = true;
            //PlayerPrefs.SetInt("SavedMoney", ScoreCount.money); // MAYBE REMOVE THIS?

            Debug.Log("UNPAUSED if");   
        }
        else { // don't do anything
            Debug.Log("totalmin " + totalMinutes1);
            Debug.Log("totalmindiff " + totalMinutesDifference);
            Debug.Log("earnedmoney " + earnedMoney);
            Debug.Log("UNPAUSED else");
            Debug.Log("_____________________");
        }       
    }
}

function OnApplicationQuit() {
    Debug.Log("Application quitted");
    PlayerPrefs.SetInt("SavedtotalMinutes1", GetDateTimeCode ()); // set totalMinutes1 to current amount of minutes
}

function ButtonOk() {
    Panel.SetActive (false); // deactivate the welcoming panel
}

function GetDateTimeCode (){
    var dt : System.DateTime = System.DateTime.Now; // Get the date and time (import) 

    var y : int = dt.Year; // get year
    var mo : int = dt.Month; // get month
    var d : int = dt.Day; // get day
    var h : int = dt.Hour; // get hour  
    var m : int = dt.Minute; // get minute

    var yMPassed = (y - 1) * 365 * 24 * 60; // calculate years in minutes till now (up from year 0)
    var moMPassed = CalcMoMinPassedDays(mo) * 24 * 60; // calculate months in minutes till now this year (function for different amount of days in months) *see function CalcMoMinPassedDays 
    var dMPassed = (d - 1) * 24 * 60; // calculate days in minutes till now this month
    var hMPassed = (h - 1) * 60; // calculate hours in minutes till now this day
    var mMPassed = m; // calculate minutes till now this hour

    totalMinutes = yMPassed + moMPassed + dMPassed + hMPassed + mMPassed; // total minutes till now 
    return totalMinutes; // return the current total minutes
}

function CalcMoMinPassedDays (month : int) { // every month has different amount of days, this function calculates it for each month (total days in the moths that have passed combined)
    var moMinPassedDays : int;

    if (month == 1) { // 31
        moMinPassedDays = 0;
        return moMinPassedDays;
    }
    if (month == 2) { // 28
        moMinPassedDays = 31;
        return moMinPassedDays;
    }
    if (month == 3) { // 31
        moMinPassedDays = 59;
        return moMinPassedDays;
    }
    if (month == 4) { // 30
        moMinPassedDays = 90;
        return moMinPassedDays;
    }
    if (month == 5) { // 31
        moMinPassedDays = 120;
        return moMinPassedDays;
    }
    if (month == 6) { // 30
        moMinPassedDays = 151;
        return moMinPassedDays;
    }
    if (month == 7) { // 31
        moMinPassedDays = 181;
        return moMinPassedDays;
    }
    if (month == 8) { // 31
        moMinPassedDays = 212;
        return moMinPassedDays;
    }
    if (month == 9) { // 30
        moMinPassedDays = 243;
        return moMinPassedDays;
    }
    if (month == 10) { // 31
        moMinPassedDays = 273;
        return moMinPassedDays;
    }
    if (month == 11) { // 30
        moMinPassedDays = 304;
        return moMinPassedDays;
    }
    if (month == 12) { // 31
        moMinPassedDays = 334;
        return moMinPassedDays;
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

