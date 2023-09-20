const element = document.getElementById('analyticsTrigger');
element.onclick = function (e) {
    e.preventDefault();
    const path = element.getAttribute("href");
    const text = element.innerText;
    sendToAdobeAnalytics(path, text);
}

function sendToAdobeAnalytics(linkPath, linkText) {
    console.log('linkPath' , linkPath);
    console.log('linkText', linkText);

    alert('linkPath = '+linkPath);
    alert('linkText = '+linkText);
    
    // Send to Analytics...
}