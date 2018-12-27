#pragma strict
var Panel : GameObject; 
static var textField : UI.Text; 

var totalMinutes : int;
var totalMinutes1 : int;
var totalMinutesDifference : int;
var started = false;
var notFirstTime = 0;


function Start () {
    notFirstTime = PlayerPrefs.GetInt("SavedNotFirstTime"); // get the notFirstTime variable that was saved.
    if (PlayerPrefs.HasKey("SavedtotalMinutes1") && notFirstTime == 1) { // Check if "SavedtotalMinutes1" is in the system. and if its not the first time launching app. -
        Panel.SetActive (true); // activate the welcoming panel                                                                                                                - and if the minutes passed & money gained are more than 0
        totalMinutes1 = PlayerPrefs.GetInt("SavedtotalMinutes1"); // Putting value of key onto variable
        totalMinutesDifference = GetDateTimeCode() - totalMinutes1; // minutes saved when last quit app - the amount of minutes now = total minutes difference
        var earnedMoney = totalMinutesDifference * ScoreCount.mPerSec;      
        textField = GetComponent(UI.Text); // Reference to UI.Text Componement (see 1 below)
        textField.text = "You were away for: \n" + totalMinutesDifference + " Minute(s)! \n " + "And earned: \n" + ToDot2(earnedMoney.ToString()); 
        ScoreCount.money += earnedMoney;
    }
    else { // this basically runs on first start of app.                                               
        PlayerPrefs.SetInt("SavedtotalMinutes1", GetDateTimeCode ()); // on first start. set totalMinutes1 to current amount of minutes
        PlayerPrefs.SetInt("SavedNotFirstTime", 1); // set NotFirstTime to 1 (true) 
    }                    
}

function Update () {
    if (started) {
        PlayerPrefs.SetInt("SavedtotalMinutes1", GetDateTimeCode ());  // Set "SavedtotalMinutes1" to current amount of minutes.
    }
}

function ButtonOk() {
    started = true; // set started to true
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

function OnApplicationPause(paused : boolean) { // see if app is paused or not
    if (paused) {
        Debug.Log("PAUSED");
    }
    if (!paused) {
        Debug.Log("UNPAUSED");   
    }       
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
    }
