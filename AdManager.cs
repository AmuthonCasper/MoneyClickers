using UnityEngine;
using System.Collections;
using GoogleMobileAds.Api;

public class AdManager : MonoBehaviour
{
    void Start()
    {
        //show add

        RequestBanner();
    }

    private void RequestBanner()
    {
        string adUnitId = "ca-app-pub-3880492672683866/7830372233"; // ca-app-pub-3940256099942544/6300978111 is for testing.   

        // Create a banner at the top of the screen.
        BannerView bannerView = new BannerView(adUnitId, AdSize.SmartBanner, AdPosition.Top);
        // Create an empty ad request.
        AdRequest request = new AdRequest.Builder().Build();
       //     .AddTestDevice(AdRequest.TestDeviceSimulator)       // Simulator.
       //     .AddTestDevice("1FEF95C9B1F6F28BEE490C4D6000370D")  // My test device.
       //     .Build();
        // Load the banner with the request.
        bannerView.LoadAd(request);
    }

}
