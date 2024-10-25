var username = document.getElementById('username');
var loginForm = document.getElementById('login-form')
//Change
username.addEventListener('input', function(event) {
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);
    username.value = currentValue;
});

// Focus
username.addEventListener('focus', function() {
    console.log('Element Focused');
})

//Blur
username.addEventListener('blur', function() {
    console.log('Element Lost Focus');
})

//Submit
loginForm.addEventListener('submit', function() {
    alert('Submit Button Clicked');
    event.preventDefault() //prevents the data being appended to the URL
});