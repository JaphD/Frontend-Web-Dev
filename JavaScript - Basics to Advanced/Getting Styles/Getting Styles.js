var mainHeading = document.getElementById('main-heading');
var btnDecreaseFont = document.getElementById('btn-decrease');
var btnIncreaseFont = document.getElementById('btn-increase');

var initialFontSize = window.getComputedStyle(mainHeading).fontSize; // Because this fetches the size plus the string px, we have to clip the unwanted portion then parse it into Integer
initialFontSize = parseInt(initialFontSize.substr(0, (initialFontSize.length - 2)));

btnIncreaseFont.onclick = function() {
    initialFontSize += 10 ;
    mainHeading.style.fontSize = initialFontSize + 'px';
}

btnDecreaseFont.addEventListener('click',function(){
    initialFontSize -= 10 ;
    mainHeading.style.fontSize = initialFontSize + 'px';
})
/*
//For external styles
console.log(window.getComputedStyle(btnDecreaseFont).backgroundColor);
//For inline styles
console.log(btnIncreaseFont.style.marginRight);
*/