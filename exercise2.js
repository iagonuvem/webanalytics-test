const iframeBtn = document.getElementById('createIframeBtn');
iframeBtn.onclick = function (e) {
    e.preventDefault();
    const srcVal = document.getElementById('srcInput').value;
    const typeVal = document.getElementById('typeInput').value;
    const catVal = document.getElementById('catInput').value;

    createFloodlightTag(srcVal, typeVal, catVal);
}

function createFloodlightTag(src, type, cat){
    const axel = new Date().getTime(); // Always a diferent number

    const srcStr = 'https://'+src+'.fls.doubleclick.net/ac6vityi;src='+src+';type='+type+';cat='+cat+';dc_lat=; dc_rdid=;tag_for_child_directed_treatment=;Xua=;npa=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=1;num=' + axel + '?';
    
    const iframeObj = document.createElement('iframe');
    iframeObj.setAttribute('src', srcStr);
    iframeObj.setAttribute('frameborder', 0);
    
    // THOSE ARE JUST TO CHECK IF IT'S WORKING...
    iframeObj.setAttribute('width', 100);
    iframeObj.setAttribute('height', 100);
    iframeObj.setAttribute('style', 'display: block; border: 1px red solid;');

    document.body.appendChild(iframeObj);
}