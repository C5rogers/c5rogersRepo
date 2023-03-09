// getting some variables
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var input3 = document.querySelector(".input3");
var input4 = document.querySelector(".input4");
var form = document.getElementById("form");
var forinput1 = document.querySelector(".forinput1");
var forinput2 = document.querySelector(".forinput2");
var forinput3 = document.querySelector(".forinput3");
var forinput4 = document.querySelector(".forinput4");
var alertDiv = document.querySelector(".custome-alert-box");
var alertContent = document.querySelector(".alert-content");
var alertExit = document.querySelector(".exit2");
// must listened inputs
var passwordCreate = document.getElementById("password1");
var confirmPassword = document.getElementById("password2");


// setting some functions
var egnoreAlert = function() {
    var time = setTimeout(() => {
        alertDiv.style.left = "-100%";
        alertContent.textContent = "";
    }, 3000);
}

var egnoreBorder = function(input) {
    var time = setTimeout(() => {
        input.style.border = "1px solid gold";
    }, 3000);
}
var egnoreErrorMessage = function(element) {
    var time = setTimeout(() => {
        element.innerHTML = "";
    }, 3000);
}
var makeAlert = function(message) {
    alertContent.textContent = message;
    alertDiv.style.left = "1em";
    egnoreAlert();
}
var inputCheker = function(input) {
    if (input.value.length == 0) {
        input.style.border = "1px solid red";
        egnoreBorder(input);
        // forinput1.innerHTML = "this filled is needed!";
        // egnoreErrorMessage(forinput1);
        return true;
    } else {
        return false;
    }
}
var makeErrorMessage = function(message, element) {
    element.innerHTML = message;
    egnoreErrorMessage(element);
}
var makeAllRed1 = function() {
    input1.style.border = "1px solid red";
    egnoreBorder(input1);
    input2.style.border = "1px solid red";
    egnoreBorder(input2);
    input3.style.border = "1px solid red";
    egnoreBorder(input3);
    input4.style.border = "1px solid red";
    egnoreBorder(input4);
}
var makeAllRed2 = function() {
    input1.style.border = "1px solid red";
    egnoreBorder(input1);
    input2.style.border = "1px solid red";
    egnoreBorder(input2);
}
var isAllEmpty1 = function() {
    var count1 = input1.value.length;
    var count2 = input2.value.length;
    var count3 = input3.value.length;
    var count4 = input4.value.length;
    if (count1 == 0 && count2 == 0 && count3 == 0 && count4 == 0) {
        return true;
    } else
        return false;

}
var isAllEmpty2 = function() {
    var count1 = input1.value.length;
    var count2 = input2.value.length;
    if (count1 == 0 && count2 == 0) {
        return true;
    } else
        return false;
}


form.addEventListener("submit", function(e) {
    var submitterName = e.submitter.name;
    if (submitterName == "signup") {
        if (isAllEmpty1()) {
            e.preventDefault();
            makeAlert("please fill the whole filds!");
            egnoreAlert();
            makeAllRed1();
        } else {
            if (inputCheker(input1)) {
                e.preventDefault();
                makeErrorMessage("name fild is needed!", forinput1);
            } else if (inputCheker(input2)) {
                e.preventDefault();
                makeErrorMessage("email is needed!", forinput2);
            } else if (inputCheker(input3)) {
                e.preventDefault();
                makeErrorMessage("you must have password", forinput3);
            } else if (inputCheker(input4)) {
                e.preventDefault();
                makeErrorMessage("confirm the password please!", forinput4);
            }
        }
    } else if (submitterName == "login") {
        if (isAllEmpty2()) {
            e.preventDefault();
            makeAlert("please fill the whole filds!");
            egnoreAlert();
            makeAllRed2();
        } else {
            if (inputCheker(input1)) {
                e.preventDefault();
                makeErrorMessage("fill the email to login!", forinput1);
            } else if (inputCheker(input2)) {
                e.preventDefault();
                makeErrorMessage("fill the password to login!", forinput2);
            }
        }
    } else {
        e.preventDefault();
    }
});

// alert close funcitonality
alertExit.addEventListener("click", function(e) {
    alertDiv.style.left = "-100%";
});

// listening the password fild
passwordCreate.addEventListener("input", function(e) {
    var count = this.value.length;
    input4.style.border = "1px solid gold";
    confirmPassword.disabled = false;
    if (count == 0) {
        this.style.border = "1px solid gold";
        forinput3.innerHTML = "";
    } else if (count < 12) {
        this.style.border = "1px solid red";
        forinput3.style.color = "red";
        forinput3.innerHTML = "*week!";
    } else if (count < 17) {
        this.style.border = "1px solid yellow";
        forinput3.style.color = "gold";
        forinput3.innerHTML = "*meddium!";
    } else if (count < 25) {
        this.style.border = "1px solid green";
        forinput3.style.color = "green";
        forinput3.innerHTML = "*strogn!";
    } else {
        this.style.border = "1px solid gray";
        forinput3.style.color = "gray";
        forinput3.innerHTML = "*enough!";
    }
});

confirmPassword.addEventListener("input", function(e) {
    egnoreErrorMessage(forinput3);
    egnoreBorder(input3);
    if (passwordCreate.value.length == 0) {
        this.disabled = true;
        this.style.border = "1px solid gray";
        forinput4.innerHTML = "first fill the password fild to confirm!";
        egnoreErrorMessage(forinput4);
    } else {
        this.disabled = false;
        var count = this.value.length;
        if (count == 0) {
            this.style.border = "1px solid gold";
        } else if (count < 12) {
            this.style.border = "1px solid red";
        } else if (count < 17) {
            this.style.border = "1px solid yellow";
        } else if (count < 25) {
            this.style.border = "1px solid green";
        } else {
            this.style.border = "1px solid gray";
        }
    }

});