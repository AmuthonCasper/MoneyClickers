#pragma strict

static var textField : UI.Text; 
var Panel : GameObject;
var Button2 : GameObject;
function Start () {

}

function Update () {

}

function ChangeText () {
    if (Panel.activeSelf) { // is Panel is active
        textField = GetComponent(UI.Text); // Reference to UI.Text Componement (see 1 below)
        textField.text = "Go Back"; // Change button text to "Go Back"
        Button2.SetActive(false);
    }
    else {
        textField = GetComponent(UI.Text); // Reference to UI.Text Componement (see 1 below) 
        textField.text = "Upgrades"; // Change button text back to normal
        Button2.SetActive(true);
    }

}