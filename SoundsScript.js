    #pragma strict

function Start () {

}

function Update () {

}

function PlayPrinterSound () { // gets called when the player clicks on the printerbutton
    var audio1: AudioSource = GetComponent.<AudioSource>(); // refer to the sound attached to the object
    if (!audio1.isPlaying) { // if the sound isnt playing (to stop the sounds from playing into eachother)
        audio1.Play(); // play the audio
    }
}

function PlayUpgradeSound1 () { // gets called when the player clicks on the printerbutton
    var audio2: AudioSource = GetComponent.<AudioSource>(); // refer to the sound attached to the object
    if (!audio2.isPlaying && PanelUpgrade1.canPlaySound) { // if the sound isnt playing (to stop the sounds from playing into eachother)
        audio2.Play(); // play the audio
    }
}

function PlayUpgradeSound2 () { // gets called when the player clicks on the printerbutton
    var audio3: AudioSource = GetComponent.<AudioSource>(); // refer to the sound attached to the object
    if (!audio3.isPlaying && PanelUpgrade2.canPlaySound) { // if the sound isnt playing (to stop the sounds from playing into eachother)
        audio3.Play(); // play the audio
    }
}

function PlayUpgradeSound3 () { // gets called when the player clicks on the printerbutton
    var audio4: AudioSource = GetComponent.<AudioSource>(); // refer to the sound attached to the object
    if (!audio4.isPlaying && PanelUpgrade3.canPlaySound) { // if the sound isnt playing (to stop the sounds from playing into eachother)
        audio4.Play(); // play the audio
    }
}

function PlayUpgradeSound4 () { // gets called when the player clicks on the printerbutton
    var audio5: AudioSource = GetComponent.<AudioSource>(); // refer to the sound attached to the object
    if (!audio5.isPlaying && PanelAutoUpgrade1.canPlaySound) { // if the sound isnt playing (to stop the sounds from playing into eachother)
        audio5.Play(); // play the audio
    }
}

function PlayUpgradeSound5 () { // gets called when the player clicks on the printerbutton
    var audio6: AudioSource = GetComponent.<AudioSource>(); // refer to the sound attached to the object
    if (!audio6.isPlaying && PanelAutoUpgrade2.canPlaySound) { // if the sound isnt playing (to stop the sounds from playing into eachother)
        audio6.Play(); // play the audio
    }
}

function PlayUpgradeSound6 () { // gets called when the player clicks on the printerbutton
    var audio7: AudioSource = GetComponent.<AudioSource>(); // refer to the sound attached to the object
    if (!audio7.isPlaying && PanelAutoUpgrade3.canPlaySound) { // if the sound isnt playing (to stop the sounds from playing into eachother)
        audio7.Play(); // play the audio
    }
}