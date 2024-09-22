function cloak() {
    win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    var iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = "";
    win.document.body.appendChild(iframe);
    var script = win.document.createElement("script");
		script.src = "https://minecraftgoldfish3.github.io/js/main.js";
    win.document.body.appendChild(script);
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999;";
}
function cookiedismiss(id) {
    document.getElementById(id).style.display = 'none';
    setCookie('dismissed', 'true', '100');
}
var dismissed = getCookie('dismissed');
if (dismissed == 'true') {
    document.getElementById('cookiepopup').style.display = 'none';
}