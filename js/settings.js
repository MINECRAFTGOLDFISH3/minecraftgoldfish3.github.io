function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function apply() {
    setCookie('title', document.getElementById('title').value, '30');
    setCookie('favicon', document.getElementById('favicon').value, '30');
}
function eraseCookie(name) {
    setCookie(name, 'temp', '-99999');
}
function reset() {
    eraseCookie('title');
    eraseCookie('favicon');
}