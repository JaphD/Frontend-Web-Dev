var btn = document.getElementById("btn");
var mainDiv = document.querySelector("header div");

console.log(mainDiv)

function onBtnClick() {
    var randomNumber = Math.floor(Math.random() * 255);
    alert("clicked");
    //btn.style.backgroundColor = rgb()
    mainDiv.style.backgroundColor = "rgb(" + randomNumber + ", " + Math.floor(Math.random() * 255) + ","+ Math.floor(Math.random() * 255) +")";
}

// Using Event handler method
    //Using anonymous method
   /* btn.onclick = function() {
        alert("Button Clicked");
    }
    //Using function reference
    btn.onclick = onBtnClick;
    */

// Using the add event listener method
    //Method One
    btn.addEventListener("click", function() {
        alert("Anonymous Function Called")
    })
    //Method Two
    btn.addEventListener("click", onBtnClick)
