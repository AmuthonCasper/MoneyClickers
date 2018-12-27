#pragma strict

var Panel : GameObject; 
var Panel2 : GameObject; 

function Start () {
    Panel.SetActive (false); // Panel is not active on start game    
}

function Update () {
    
}

function PanelToggle () {
    if (Panel2.activeSelf == false) { //if other panel is not active
        Panel.SetActive (!Panel.activeSelf); // TOGGLE, ! voor 'not' (omgekeerde) (als panel niet active is, dan word ie dus wel active als je op de knop drukt.
    }
}

function ResetAllVar () { // for debugging purposes only
    ScoreCount.mPerSec = 500;
    //ScoreCount.money += 1000;
    //PlayerPrefs.DeleteAll();
    //ScoreCount.mPerClick = 1;
    //ScoreCount.mPerSec = 0;
    //ScoreCount.upgrade1Cost = 1000; 
    //ScoreCount.upgrade2Cost = 7500; 
    //ScoreCount.upgrade3Cost = 1500; 
    //ScoreCount.money = 0; 
}

