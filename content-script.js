const hours = 18;

function addRemoveWarning(text) {
    const prefix = "Are you sure you want to "
    const suffix = " after " + hours + ":00?";
    var now = new Date()
    if (now.getHours() >= hours) {
        if (text.startsWith(prefix)) {
            return text;
        } else {
            return prefix + text + suffix;
        }
    } else {
        if (text.startsWith(prefix)) {
            text.substr(prefix.length, text.length - prefix.length - suffix.length)
        } else {
            return text;
        }
    }
}

var interval = setInterval(function () {
    var buttons = document.getElementsByClassName("merge-box-button");
    for (var i=0; i < buttons.length; i++) {
        var oldText = buttons[i].innerHTML;
        var newText = addRemoveWarning(oldText);
        if (oldText != newText) {
            buttons[i].innerHTML = newText;
        }
    }
}, 100);
