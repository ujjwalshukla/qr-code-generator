document.addEventListener('DOMContentLoaded', function() {
    var qrcode = document.getElementById('qrcode');

    chrome.tabs.getSelected(null, function(tab) {
        d = document;

        var url = tab.url;
        new QRCode(qrcode, url);
    });

}, false);
