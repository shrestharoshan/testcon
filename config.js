var cspConfig = {
  "MyfontsSite":
    "script-src 'self' 'unsafe-inline'  'unsafe-eval' www.google.com/recaptcha/ www.gstatic.com/recaptcha/  px.owneriq.net tagmanager.google.com *.myfonts-test.com *.myfonts.com *.myfonts.net *.myfonts-beta.com cdn.carbonads.com srv.carbonads.net *.heapanalytics.com heapanalytics.com *.qualtrics.com www.google-analytics.com *.inside-graph.com *.adroll.com snap.licdn.com connect.facebook.net *.linkedin.com www.googleadservices.com www.googletagservices.com adservice.google.com optimize.google.com *.doubleclick.net *.googlesyndication.com fullstory.com local.skyfonts.com:* dev.visualwebsiteoptimizer.com *.onetrust.com *.driftt.com driftt.com widget.privy.com platform-api.sharethis.com adservice.google.com.np cdn.ampproject.org optanon.blob.core.windows.net www.googletagmanager.com *.bing.com bing.com",

  "CartFrontend":
    "script-src 'self' 'unsafe-inline'  'unsafe-eval' px.owneriq.net platform-api.sharethis.com tagmanager.google.com widget.privy.com fullstory.com *.heapanalytics.com www.google-analytics.com www.googletagmanager.com *.driftt.com *.qualtrics.com *.bing.com bing.com",

  "CheckoutFrontend":
    "script-src 'self' 'unsafe-inline'  'unsafe-eval' px.owneriq.net platform-api.sharethis.com tagmanager.google.com widget.privy.com fullstory.com *.heapanalytics.com www.google-analytics.com www.googletagmanager.com *.driftt.com *.qualtrics.com *.bing.com bing.com",

  "PromoFrontend":
    "script-src 'self' 'unsafe-inline'  'unsafe-eval' px.owneriq.net platform-api.sharethis.com tagmanager.google.com widget.privy.com fullstory.com *.heapanalytics.com www.google-analytics.com www.googletagmanager.com *.driftt.com *.qualtrics.com cdn.myfonts.net *.onetrust.com *.bing.com bing.com",

  "FamilyFrontend":
    "script-src 'self' 'unsafe-inline'  'unsafe-eval' www.google.com/recaptcha/ www.gstatic.com/recaptcha/  px.owneriq.net tagmanager.google.com *.myfonts-test.com *.myfonts.com *.myfonts.net *.myfonts-beta.com cdn.carbonads.com srv.carbonads.net *.heapanalytics.com heapanalytics.com *.qualtrics.com www.google-analytics.com *.inside-graph.com *.adroll.com snap.licdn.com connect.facebook.net *.linkedin.com www.googleadservices.com www.googletagservices.com adservice.google.com optimize.google.com *.doubleclick.net *.googlesyndication.com fullstory.com local.skyfonts.com:* dev.visualwebsiteoptimizer.com *.onetrust.com *.driftt.com driftt.com widget.privy.com platform-api.sharethis.com adservice.google.com.np cdn.ampproject.org optanon.blob.core.windows.net www.googletagmanager.com *.bing.com bing.com",

  "WtfFrontend":
    "script-src 'self' 'unsafe-inline'  'unsafe-eval' px.owneriq.net platform-api.sharethis.com tagmanager.google.com widget.privy.com fullstory.com *.heapanalytics.com www.google-analytics.com www.googletagmanager.com *.driftt.com *.qualtrics.com cdn.myfonts.net *.onetrust.com *.buysellads.net www.googleadservices.com www.googletagservices.com adservice.google.com adservice.google.com.np  *.doubleclick.net *.amazon-adsystem.com *.bing.com bing.com",

}

const csp = cspConfig[siteName];

//creating meta
var meta = document.createElement('meta');
meta.httpEquiv = "Content-Security-Policy";
meta.content = csp;
var head = document.getElementsByTagName('head')[0];

// add the csp meta after first child node inside head
head.insertBefore(meta, head.childNodes[0]);
