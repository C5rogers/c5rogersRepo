var hide = document.getElementById("hide");
hide.addEventListener("click", function() {
    document.getElementById("navigationContainer").style.top = "-100%";
});
var display = document.getElementById("appear");
display.addEventListener("click", function() {
    document.getElementById("navigationContainer").style.top = "0%";
});