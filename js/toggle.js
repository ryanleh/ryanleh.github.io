
function SlideMainbarIn() {
    var mainbar = document.getElementById("mainbar");
    var maintext = document.getElementById("maintext");
    var about_me = document.getElementById("about_me");
	mainbar.style.width = "30%";
    maintext.style.visibility = "visible";
    about_me.style.visibility = "hidden";

}

function SlideMainbarOut() {
    var mainbar = document.getElementById("mainbar");
    var maintext = document.getElementById("maintext");
    var about_me = document.getElementById("about_me");
    mainbar.style.width = "50%";
    maintext.style.visibility = "hidden";
    about_me.style.visibility = "visible";
    
}
