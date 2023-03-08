// defining some variables
var form = document.getElementById("form");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var forinput1 = document.querySelector(".forinput1");
var forinput2 = document.querySelector(".forinput2");
var accountinput = document.getElementById("account");
// defining some functions
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
var egnoreBorder = function(input) {
    var timeout = setTimeout(() => {
        input.style.border = "solid 1px transparent";
    }, 4000);
}

// adding form listener to the given request
form.addEventListener("submit", function(e) {
    if (input1.value.length == 0 && input2.value.length == 0) {
        e.preventDefault();
        input1.style.border = "1px solid red";
        egnoreBorder(input1);
        forinput1.innerHTML = "please fill this input fild!";
        egnoreErrorMessage(forinput1);
        input2.style.border = "1px solid red";
        egnoreBorder(input2);
        forinput2.innerHTML = "fill this also ser!";
        egnoreErrorMessage(forinput2);
    } else {
        if (!inputCheker(input1)) {
            e.preventDefault();
            forinput1.innerHTML = "please fill this one first!";
            egnoreErrorMessage(forinput1);
        } else if (!inputCheker(input2)) {
            e.preventDefault();
            forinput2.innerHTML = "please fill this one also ser!";
            egnoreErrorMessage(forinput2);
        }
    }
});

// listening to the account number
accountinput.addEventListener("input", function(e) {
    var count = this.value.length;
    if (count > 12) {
        this.style.border = "1px solid red";
        egnoreBorder(this);
    } else {
        this.style.border = "1px solid transparent";
    }
});