window.onkeyup = keyup;
var inputTextValue;
function keyup(e) {
    inputTextValue = e.target.value;
    if (e.keyCode == 13) {
        window.location = "http://www.google.com/search?q=" + inputTextValue;
    }
}
