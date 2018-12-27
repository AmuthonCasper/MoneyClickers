using UnityEngine;
using System.Collections;

public class CheatButtonScript : MonoBehaviour {
    public int count;

	// Update is called once per frame
	void Update () {
        if (count >= 50)
        {
            ScoreCount.money = 1000000000000;
            count = 0;
        }
	}

    public void AddCount ()
    {
        count += 1;
    }
}
