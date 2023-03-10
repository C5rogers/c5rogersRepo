// var exitAlert = document.selectElementById("exitAlert");

// var form = document.querySelectorAll("form");
var input1 = document.querySelector(".accountNumber");
var input2 = document.querySelector(".ammount");
var alertDiv = document.querySelector(".success-content");
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

// this listen to the form 
document.getElementById("form").addEventListener("submit", function(e) {
    var content1 = input1.value;
    var content2 = input2.value;
    if (content1.length == 0 || content2.length == 0) {
        e.preventDefault();
        if (content1.length == 0 && content2.length == 0) {
            input1.style.border = "1px solid red";
            egnoreBorder(input1);
            input2.style.border = "1px solid red";
            egnoreBorder(input2);
            error("both inputs are nedded!");
            egnoreError();
        } else if (content1.length == 0) {
            input1.style.border = "1px solid red";
            egnoreBorder(input1);
            error("account number is needed!");
            egnoreError();
        } else if (content2.length == 0) {
            input2.style.border = "1px solid red";
            egnoreBorder(input2);
            error("please explicitly define the ammount!");
            egnoreError();
        }

    } else {
        input1.style.border = "1px solid transparent";
        input2.style.border = "1px solid transparent";
    }
});


// to exit alert box 
var exitAlertBox = document.querySelector(".exit2");
exitAlertBox.addEventListener("click", function(e) {
    document.querySelector(".custome-alert-box").style.left = "-100%";
});

// this will listen the input1 
input1.addEventListener("input", function(e) {
    if (this.value.length > 12) {
        error("OUT OF RANGE!");
        egnoreError();
        this.style.border = "1px solid red";
        egnoreBorder(this);
    } else {
        document.querySelector(".custome-alert-box").style.left = "-100%";
        this.style.border = "1px solid transparent";
    }
});

// this will listen to the second input
input2.addEventListener("input", function(e) {
    if (this.value.left != 0) {
        this.style.border = "1px solid transparent";
    }
});


var menu = document.querySelector(".menu-btn");
var exit = document.querySelector(".exit-btn");
var navigation = document.querySelector(".navigation");
menu.addEventListener("click", function() {
    document.querySelector(".form-container").style.zIndex = "-1";
    navigation.style.left = "0";
});
exit.addEventListener("click", function() {
    navigation.style.left = "-100%";
    document.querySelector(".form-container").style.transition = "all ease-in-out .33s";
    document.querySelector(".form-container").style.zIndex = "0";
});