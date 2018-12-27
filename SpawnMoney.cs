using UnityEngine;
using System.Collections;

public class SpawnMoney : MonoBehaviour {
    public GameObject money1;
    public GameObject money2;
    public GameObject money3;
    public GameObject money4;
    public GameObject money5;
    public GameObject money6;
    public GameObject money7;
    public GameObject money8;
    public GameObject money9;
    public GameObject money10;
    public GameObject money11;
    public GameObject money12;
    public GameObject money13;
    public GameObject money14;
    public GameObject money15;
    public GameObject money16;

    bool oneInUse;
    bool twoInUse;
    bool threeInUse;
    bool fourInUse;
    bool fiveInUse;
    bool sixInUse;
    bool sevenInUse;
    bool eightInUse;
    bool nineInUse;
    bool tenInUse;
    bool elevenInUse;
    bool twelveInUse;
    bool thirteenInUse;
    bool fourteenInUse;
    bool fifteenInUse;
    bool sixteenInUse;

    public int lastRndNumber;
    public int rndNumber;
    // Use this for initialization
    void Start () {
    
    }
	
	// Update is called once per frame
	void Update () {
        
    }

    public void SpawnMoneys()
    {
        rndNumber = Random.Range(1, 17);
        if (rndNumber == lastRndNumber)
        {
            while (rndNumber == lastRndNumber)
            {
                rndNumber = Random.Range(1, 3);
            }
        }

        if (rndNumber == 1 && !oneInUse)
        {
            oneInUse = true;
            money1.SetActive(true);
            StartCoroutine(WaitSeconds1());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 2 && !twoInUse)
        {
            twoInUse = true;
            money2.SetActive(true);
            StartCoroutine(WaitSeconds2());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 3 && !threeInUse)
        {
            threeInUse = true;
            money3.SetActive(true);
            StartCoroutine(WaitSeconds3());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 4 && !fourInUse)
        {
            fourInUse = true;
            money4.SetActive(true);
            StartCoroutine(WaitSeconds4());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 5 && !fiveInUse)
        {
            fiveInUse = true;
            money5.SetActive(true);
            StartCoroutine(WaitSeconds5());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 6 && !sixInUse)
        {
            sixInUse = true;
            money6.SetActive(true);
            StartCoroutine(WaitSeconds6());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 7 && !sevenInUse)
        {
            sevenInUse = true;
            money7.SetActive(true);
            StartCoroutine(WaitSeconds7());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 8 && !eightInUse)
        {
            eightInUse = true;
            money8.SetActive(true);
            StartCoroutine(WaitSeconds8());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 9 && !nineInUse)
        {
            nineInUse = true;
            money9.SetActive(true);
            StartCoroutine(WaitSeconds9());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 10 && !tenInUse)
        {
            tenInUse = true;
            money10.SetActive(true);
            StartCoroutine(WaitSeconds10());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 11 && !elevenInUse)
        {
            elevenInUse = true;
            money11.SetActive(true);
            StartCoroutine(WaitSeconds11());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 12 && !twelveInUse)
        {
            twelveInUse = true;
            money12.SetActive(true);
            StartCoroutine(WaitSeconds12());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 13 && !thirteenInUse)
        {
            thirteenInUse = true;
            money13.SetActive(true);
            StartCoroutine(WaitSeconds13());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 14 && !fourteenInUse)
        {
            fourteenInUse = true;
            money14.SetActive(true);
            StartCoroutine(WaitSeconds14());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 15 && !fifteenInUse)
        {
            fifteenInUse = true;
            money15.SetActive(true);
            StartCoroutine(WaitSeconds15());
            lastRndNumber = rndNumber;
        }

        if (rndNumber == 16 && !sixteenInUse)
        {
            sixteenInUse = true;
            money16.SetActive(true);
            StartCoroutine(WaitSeconds16());
            lastRndNumber = rndNumber;
        }
    }

    IEnumerator WaitSeconds1()
    {
        yield return new WaitForSeconds(1);
        money1.SetActive(false);
        oneInUse = false;
    }

    IEnumerator WaitSeconds2()
    {
        yield return new WaitForSeconds(1);
        money2.SetActive(false);
        twoInUse = false;
    }

    IEnumerator WaitSeconds3()
    {
        yield return new WaitForSeconds(1);
        money3.SetActive(false);
        threeInUse = false;
    }

    IEnumerator WaitSeconds4()
    {
        yield return new WaitForSeconds(1);
        money4.SetActive(false);
        fourInUse = false;
    }

    IEnumerator WaitSeconds5()
    {
        yield return new WaitForSeconds(1);
        money5.SetActive(false);
        fiveInUse = false;
    }

    IEnumerator WaitSeconds6()
    {
        yield return new WaitForSeconds(1);
        money6.SetActive(false);
        sixInUse = false;
    }

    IEnumerator WaitSeconds7()
    {
        yield return new WaitForSeconds(1);
        money7.SetActive(false);
        sevenInUse = false;
    }

    IEnumerator WaitSeconds8()
    {
        yield return new WaitForSeconds(1);
        money8.SetActive(false);
        eightInUse = false;
    }

    IEnumerator WaitSeconds9()
    {
        yield return new WaitForSeconds(1);
        money9.SetActive(false);
        nineInUse = false;
    }

    IEnumerator WaitSeconds10()
    {
        yield return new WaitForSeconds(1);
        money10.SetActive(false);
        tenInUse = false;
    }

    IEnumerator WaitSeconds11()
    {
        yield return new WaitForSeconds(1);
        money11.SetActive(false);
        elevenInUse = false;
    }

    IEnumerator WaitSeconds12()
    {
        yield return new WaitForSeconds(1);
        money12.SetActive(false);
        twelveInUse = false;
    }

    IEnumerator WaitSeconds13()
    {
        yield return new WaitForSeconds(1);
        money13.SetActive(false);
        thirteenInUse = false;
    }

    IEnumerator WaitSeconds14()
    {
        yield return new WaitForSeconds(1);
        money14.SetActive(false);
        fourteenInUse = false;
    }

    IEnumerator WaitSeconds15()
    {
        yield return new WaitForSeconds(1);
        money15.SetActive(false);
        fifteenInUse = false;
    }

    IEnumerator WaitSeconds16()
    {
        yield return new WaitForSeconds(1);
        money16.SetActive(false);
        sixteenInUse = false;
    }

}
