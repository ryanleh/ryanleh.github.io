

function SlideMainbarIn() {
    var mainbar = document.getElementById("mainbar");
    var maintext = document.getElementById("maintext");
    var about_me = document.getElementById("about_me");

    maintext.style.transition = "opacity 3s ease";
    about_me.style.transition = "opacity .75s ease";

	mainbar.style.width = "30%";
    about_me.style.opacity = "0";
    setTimeout(function() 
        { 
            about_me.style.visibility = "hidden";  
        }, 500);
    maintext.style.visibility = "visible";
    maintext.style.opacity = "1";
    
}

function SlideMainbarOut() {
    var mainbar = document.getElementById("mainbar");
    var maintext = document.getElementById("maintext");
    var about_me = document.getElementById("about_me");

    maintext.style.transition = "opacity .5s ease";
    about_me.style.transition = "opacity 4s ease";

    mainbar.style.width = "50%";
    maintext.style.opacity = "0";
    setTimeout(function() 
        { 
            maintext.style.visibility = "hidden";  
        }, 500);
    about_me.style.visibility = "visible";
    about_me.style.opacity = "1";
}


