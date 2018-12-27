using UnityEngine;
using System.Collections;
using System;

public class SaveMoneyScript : MonoBehaviour
{

    void Start()
    {
        //PlayerPrefs.DeleteAll();
        if (PlayerPrefs.HasKey("SavedMoney"))
        { // Check if "SavedMoney" is in the system
            ScoreCount.money = Convert.ToInt64(PlayerPrefs.GetString("SavedMoney")); // Putting value of key onto variable.
        }
        else {
            PlayerPrefs.SetString("SavedMoney", "0"); // Set "SavedMoney" to standard (0).
            ScoreCount.money = Convert.ToInt64(PlayerPrefs.GetString("SavedMoney")); // Putting value of key onto variable.
        }

    }

    void Update()
    {
        PlayerPrefs.SetString("SavedMoney", ScoreCount.money.ToString()); // Putting value into key, every frame (Always saving) .
        ScoreCount.money = Convert.ToInt64(PlayerPrefs.GetString("SavedMoney")); // Putting value of key onto variable.
    }
}

//Convert.ToInt64
