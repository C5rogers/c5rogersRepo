// this is the whole input and the form and some ohter elements to be listend
var form = document.getElementById("form");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var input3 = document.querySelector(".input3");
var input4 = document.querySelector(".input4");
var input5 = document.querySelector(".input5");
var alertDiv = document.querySelector(".custome-alert-box");
var alertContent = document.querySelector(".alert-content")

// this is some functions i used to make
var error = function(message) {
    const alertMessage = document.createTextNode(message);
    alertDiv.innerHTML = "";
    alertDiv.append(alertMessage);
    document.querySelector(".custome-alert-box").style.left = "1em";
}
var egnoreError = function() {
    var timeout = setTimeout(() => {
        document.querySelector(".custome-alert-box").style.left = "-100%";
    }, 3000);
}
var egnoreBorder = function(input) {
    var timeout = setTimeout(() => {
        input.style.border = "solid 1px gold";
    }, 4000);
}
var makeAllRed = function() {
    input1.style.border = "solid 1px red";
    egnoreBorder(input1);
    input2.style.border = "solid 1px red";
    egnoreBorder(input2);
    input3.style.border = "solid 1px red";
    egnoreBorder(input3);
    input4.style.border = "solid 1px red";
    egnoreBorder(input4);
    input5.style.border = "solid 1px red";
    egnoreBorder(input5);
}
var inputCheker = function(input) {
    count = input.value.length;
    if (count == 0) {
        input.style.border = "1px solid red";
        egnoreBorder(input);
        return false;
    }
    return true;
}
var egnoreErrorMessage = function(element) {
    var timeout = setTimeout(() => {
        element.innerHTML = "";
    }, 4000);
}


// now begin to listen all the form
form.addEventListener("submit", function(e) {
    var cont1 = input1.value.length;
    var cont2 = input2.value.length;
    var cont3 = input3.value.length;
    var cont4 = input4.value.length;
    var cont5 = input5.value.length;
    if (cont1 == 0 && cont2 == 0 && cont3 == 0 && cont4 == 0 && cont5 == 0) {
        e.preventDefault();
        error("please fill the whole filds ");
        egnoreError();
        makeAllRed();
    } else {
        if (!inputCheker(input1)) {
            e.preventDefault();
            var fild = document.querySelector(".forinput1");
            fild.innerHTML = "title is needed!";
            egnoreErrorMessage(fild);
        } else if (!inputCheker(input2)) {
            e.preventDefault();
            var fild = document.querySelector(".forinput2");
            fild.innerHTML = "name is required";
            egnoreErrorMessage(fild);
        } else if (!inputCheker(input3)) {
            e.preventDefault();
            var fild = document.querySelector(".forinput3");
            fild.innerHTML = "email also is needed!";
            egnoreErrorMessage(fild);
        } else if (!inputCheker(input4)) {
            e.preventDefault();
            var fild = document.querySelector(".forinput4");
            fild.innerHTML = "phone number is also needed!";
            egnoreErrorMessage(fild);
        } else if (!inputCheker(input5)) {
            e.preventDefault();
            var fild = document.querySelector(".forinput5");
            fild.innerHTML = "please fill the issue!";
            egnoreErrorMessage(fild);

        }
    }
});
// setting listener for the phone number fild
input4.addEventListener("input", function(e) {
    cont = this.value.length;
    if (cont > 10) {
        error("OUT OF RANGE!");
        egnoreError();
        this.style.border = "1px solid red";
        egnoreBorder(this);
    } else {
        alertDiv.style.left = "-100%"
        this.style.border = "1px solid gold";
    }
});