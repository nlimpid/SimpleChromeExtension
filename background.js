chrome.tabs.query({'active': true}, function(tabs) {
  chrome.tabs.update(tabs[0].id, {url: newUrl});
});

function someOtherFunction() {
    alert("hello");
    console.log("hello");
}


chrome.browserAction.onClicked.addListener(someOtherFunction);