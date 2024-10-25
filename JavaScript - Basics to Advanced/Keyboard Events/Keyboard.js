//It is not specific to any html element so we can add it to the body
document.body.addEventListener('keydown', function() {
    var keycode = event.which
    if(keycode === 13) {
        console.log("Keydown for => " + keycode);
    }
   // console.log(event.which + 'A key was clicked') //You can check the code on keycode.info

})

document.body.addEventListener('keyup', function() {
    var keycode = event.which
    if(keycode === 13) {
        console.log("Keyup for => " + keycode);
    }
   // console.log(event.which + 'A key was clicked') //You can check the code on keycode.info

})

document.body.addEventListener('keypress', function() {
    var keycode = event.which
    if(keycode === 13) {
        console.log("KeyPress for => " + keycode);
    }
   // console.log(event.which + 'A key was clicked') //You can check the code on keycode.info

})
