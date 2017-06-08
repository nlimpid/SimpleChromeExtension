function someOtherFunction() {
    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true
    }, function(tabs) {
        var url = tabs[0].url;
        alert("tabs " + url);
    });
    alert("hello");
    alert("out" + url);
    console.log("hello");
}


chrome.browserAction.onClicked.addListener(someOtherFunction);