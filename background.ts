function test(){
    alert("This is a test!!");
}

chrome.webNavigation.onCompleted.addListener((details) => {
    chrome.scripting.executeScript({
        target: {tabId: details.tabId},
        func: test
    });
})