// var button = document.querySelector(".visiblility");
// button.addEventListener("click", function() {
//     button.innerHTML = "<img=\"image/prevent.png\">";
// });

var form = document.getElementById("form");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var alertDiv = document.querySelector(".alert-content");


// this is some used function throught the process
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
        input.style.border = "solid 1px transparent";
    }, 4000);
}


// adding event lister for the form
form.addEventListener("submit", function(e) {
    var count1 = input1.value.length;
    var count2 = input2.value.length;
    if (count1 == 0 || count2 == 0) {
        e.preventDefault();
        if (count1 == 0 && count2 == 0) {
            input1.style.border = "solid 1px red";
            egnoreBorder(input1);
            input2.style.border = "solid 1px red";
            egnoreBorder(input2);
            error("both inputs are needed!");
            egnoreError();
        } else if (count1 == 0) {
            input1.style.border = "solid 1px red";
            egnoreBorder(input1);
            error("the account is neccessary!");
            egnoreError();
        } else {
            input2.style.border = "solid 1px red";
            egnoreBorder(input2);
            error("the ammount is needed!");
            egnoreError();
        }
    } else {
        input1.style.border = "1px solid transparent";
        input2.style.border = "1px solid transparent";
    }
});
input1.addEventListener("input", function(e) {
    if (this.value.length > 12) {
        error("OUT OF RANGE!");
        egnoreError();
        this.style.border = "solid 1px red";
        egnoreBorder(this);
    } else {
        this.style.border = "1px solid transparent";
        document.querySelector(".custome-alert-box").style.left = "-100%";
    }
});