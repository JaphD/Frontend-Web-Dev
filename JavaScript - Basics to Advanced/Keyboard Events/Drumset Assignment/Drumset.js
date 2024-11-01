document.addEventListener("keydown", (event) => {
    key = event.key.toUpperCase();
    audio = document.getElementById(key);

    if (audio) {
        audio.currentTime = 0;
        audio.play();

        const button = document.querySelector(`button[data-key="${key}"]`);
        if (button) {
            button.classList.add("playing");
            setTimeout(() => button.classList.remove("playing"), 100);
        }
    }
})