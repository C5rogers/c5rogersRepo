var form = document.getElementById("form");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var forinput1 = document.querySelector(".forinput1");
var forinput2 = document.querySelector(".forinput2");
var alertDoc = document.querySelector(".custome-alert-box");
var alertContent = document.querySelector(".success-content")
var alertExit = document.querySelector(".exitAlert")
var desapearWarning = function() {
    var time = setTimeout(() => {
        alertDoc.style.left = "-100%";
    }, 3000);
}
var makeWarning = function(message) {
    alertContent.innerHTML = message;
    alertDoc.style.left = "1em";
    desapearWarning();
}
var makeAllRed = function() {
    input1.style.border = "1px solid red";
    egnoreBorder(input1);
    input2.style.border = "1px solid red";
    egnoreBorder(input2);
}
var checkAllInputs = function() {
    if (input1.value.length == 0 && input2.value.length == 0) {
        makeAllRed();
        return true;
    }
}
var egnoreBorder = function(input) {
    var time = setTimeout(() => {
        input.style.border = "1px solid transparent";
    }, 3000);
}
var inputChecker = function(input) {
    if (input.value.length == 0) {
        input.style.border = "1px solid red";
        egnoreBorder(input);
        return true;
    }
    return false;
}
var egnoreError = function(element) {
    var time = setTimeout(() => {
        element.innerHTML = "";
    }, 3000);
}
var makeErrorMessage = function(message, element) {
    element.innerHTML = message;
}

form.addEventListener('submit', function(e) {
    if (checkAllInputs()) {
        e.preventDefault();
        makeWarning('please fill the whole filds');
    } else {
        if (inputChecker(input1)) {
            e.preventDefault();
            makeErrorMessage('the id is neccessary!', forinput1);
            egnoreError(forinput1);
        } else if (inputChecker(input2)) {
            e.preventDefault();
            makeErrorMessage('the password is neccessary!', forinput2);
            egnoreError(forinput2);
        }
    }
});
alertExit.addEventListener('click', function(e) {
    alertDoc.style.left = "-100%";
});

input1.addEventListener("input", function(e) {
    if (this.value.length > 16) {
        this.style.border = "1px solid red";
        makeWarning('OUT OF RANGE!');
    } else {
        this.style.border = "1px solid transparent";
        alertDoc.style.left = "-100%";
    }
});