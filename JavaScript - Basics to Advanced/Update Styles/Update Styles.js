var countdownElement = document.getElementById("countdown");
var bgImage = document.getElementById("bg-image");

var initialCountdownVal = countdownElement.innerHTML;

var interval = setInterval(function(){
    countdownElement.innerHTML = initialCountdownVal > 0 ? initialCountdownVal -= 1 : 0;
    countdownElement.style.fontSize = initialCountdownVal * 80 + "px";

    bgImage.style.width = initialCountdownVal * 10 + "%";
    
    console.log(initialCountdownVal * 100 + "px");

    if(initialCountdownVal <= 0){
        clearInterval(interval);
    }
    
}, 1000);
