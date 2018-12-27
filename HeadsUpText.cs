using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class HeadsUpText : MonoBehaviour {
    public GameObject HUTGameObject;
    public GameObject HUTTextObject;

    public static bool showHUTText;

    public static string message;
    Text HUTText;

    // Use this for initialization
    void Start () {

    }
	
	// Update is called once per frame
	void Update () {

        if (Input.GetKeyDown(KeyCode.L))
        {
            message = "USER REWARDE: $5.76K";
            showHUTText = true;
        }

        if (showHUTText)
        {
            StartCoroutine(WaitSeconds());
            showHUTText = false;
        }
    }

    IEnumerator WaitSeconds()
    {
        HUTGameObject.SetActive(true);
        HUTText = HUTTextObject.GetComponent<Text>();
        HUTText.text = message;
        yield return new WaitForSeconds(5);
        HUTText.text = "null";
        HUTGameObject.SetActive(false);
    }

    public void DeleteHUT()
    {
        HUTGameObject.SetActive(false);
    }
}
