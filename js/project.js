function extractGameURL() {
    var url = window.location.href;
    if (url.indexOf('?') !== -1) {
        var queryString = url.split('?')[1];
        var parameters = queryString.split('&');
        for (var i = 0; i < parameters.length; i++) {
var parameter = parameters[i];
if (parameter.startsWith('url=')) {
    return parameter.substring(4);
}
        }
    }
    return null;
}
function createIframe(gameURL) {
    var iframe = document.createElement('iframe');
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = gameURL;
    document.getElementById('game-container').appendChild(iframe);
}
var gameURL = extractGameURL();
if (gameURL) {
    createIframe(gameURL);
} else {
    window.location.href = "404.html";
}