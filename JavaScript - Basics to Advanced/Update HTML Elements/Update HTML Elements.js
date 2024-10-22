console.log("JS Loaded");

var countdownElement = document.getElementById("countdown");
var bgImageElement = document.getElementById('bg-image');

var initialCountdownVal = countdownElement.innerHTML;

setInterval(function() {
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1: 0;

    countdownElement.innerHTML = initialCountdownVal;
    var backImgPath = initialCountdownVal % 2 === 0 ? 'https://images.unsplash.com/photo-1658162952344-edf1be328186?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyZWVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D' : 'https://images.unsplash.com/photo-1612153018787-4899c6e056d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdyZWVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D'

    bgImageElement.src = backImgPath;
}, 1000)
