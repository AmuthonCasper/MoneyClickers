#pragma strict

static var textField : UI.Text;
var Button : GameObject;
var Panel2 : GameObject;

function Start () {

}

function Update () {

}

function ChangeText2 () {
    if (Panel2.activeSelf) { // is Panel2 is active
        textField = GetComponent(UI.Text); // Reference to UI.Text Componement (see 1 below)
        textField.text = "Go Back"; // Change button text to "Go Back"
        Button.SetActive(false);
    }
    else {
        textField = GetComponent(UI.Text); // Reference to UI.Text Componement (see 1 below) 
        textField.text = "Auto Upgrades"; // Change button text back to normal
        Button.SetActive(true);
    }

}