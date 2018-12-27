#pragma strict

var Panel2 : GameObject; 
var Panel : GameObject; 

function Start () {
    Panel2.SetActive (false); // Panel is not active on start game    
}

function Update () {
    
}

function Panel2Toggle () {
    if (Panel.activeSelf == false) { //if other panel is not active
        Panel2.SetActive (!Panel2.activeSelf); // TOGGLE, ! voor 'not' (omgekeerde) (als panel niet active is, dan word ie dus wel active als je op de knop drukt.)_
    }
}
