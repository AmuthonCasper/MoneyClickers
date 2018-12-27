using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class RVAButtonNo2 : MonoBehaviour {
    public GameObject panel3;

    public GameObject textYesObject;
    Text textYes;

    // Use this for initialization
    void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

    public void Panel3Toggle()
    {
        panel3.SetActive(false);
    }

    public void PressedNo () //Stop ad from loading.
    {
        textYes = textYesObject.GetComponent<Text>();
        textYes.text = "YES";
    }
}
