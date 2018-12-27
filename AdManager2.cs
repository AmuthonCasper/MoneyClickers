using UnityEngine;
using System.Collections;
using GoogleMobileAds.Api;
using UnityEngine.UI;


public class AdManager2 : MonoBehaviour
{ 
    Text testText;

    public long rewardMultiplier;
    long rewardAmount;


    public GameObject panel3;
    bool pressedYes = false;
    bool firstTime = true;
    public GameObject textYesObject;
    Text textYes;

    public GameObject panelInfo;
    Text panelInfoText;

    public GameObject welcomePanel;

    string adUnitId = "ca-app-pub-3880492672683866/1783838639";
    RewardBasedVideoAd rewardBasedVideo = null;

    void Start()
    {
        rewardBasedVideo = RewardBasedVideoAd.Instance;
    }

    void Update()
    {
        panelInfoText = panelInfo.GetComponent<Text>();
        panelInfoText.text = "Do you want to watch a short video and get $" + rewardMultiplier * ScoreCount.mPerClick + "?";

        if (rewardBasedVideo.IsLoaded() && pressedYes)
        {
            rewardBasedVideo.OnAdRewarded += HandleRewardBasedVideoRewarded;
            rewardBasedVideo.Show(); // show the ad.

            textYes = textYesObject.GetComponent<Text>();
            textYes.text = "YES!";
            pressedYes = false;
            panel3.SetActive(false);
            firstTime = true;
        }
    }

    public void RequestAd()
    {
        rewardBasedVideo = RewardBasedVideoAd.Instance;
        AdRequest request = new AdRequest.Builder().Build();
        rewardBasedVideo.LoadAd(request, adUnitId);
    }

    public void showAd() // Show a rewarded video ad - button
    {
        pressedYes = true;

        textYes = textYesObject.GetComponent<Text>();
        textYes.text = "loading";
    }

    public void HandleRewardBasedVideoRewarded(object sender, Reward args)
    {
        if (firstTime)
        {
            string type = args.Type;
            double amount = args.Amount;
            RewardMoney();

            HeadsUpText.message = "USER REWARDED: $" + rewardMultiplier * ScoreCount.mPerClick + "!";
            HeadsUpText.showHUTText = true;
            //testText = gameObject.GetComponent<Text>();
            //testText.text = "user rewarded: " + rewardAmount;
            firstTime = false; 
        }

    }

    public void RewardMoney()
    {
        rewardAmount = rewardMultiplier * ScoreCount.mPerClick;
        ScoreCount.money += rewardAmount;
    }

    public void testButton()
    {
        testText = gameObject.GetComponent<Text>();
        testText.text = "text is working!/gave $100";
        ScoreCount.money += 100;
    }
}


