window.addEventListener("DOMContentLoaded", function() {
    numberDisplay = document.getElementById("number");
    decreaseButton = document.getElementById("decrease-button");
    increaseButton = document.getElementById("increase-button");
    resetButton = document.getElementById("reset-button");
    themeSwitch = document.querySelector(".input");
    let clickAudio = new Audio('assets/sounds/click-sound.mp3');
    let compteur = 0;

    function playClickSound() {
        clickAudio.pause();
        clickAudio.currentTime = 0;
        clickAudio.play();
    }

    function changecolor() {
        if (compteur > 0) {
            numberDisplay.style.color = '#00FF00';
        } else if (compteur < 0) {
            numberDisplay.style.color = '#ff0d1a';
        } else {
            numberDisplay.style.color = '#010203';
        }
    }

    decreaseButton.addEventListener("click", function() {
        compteur--;
        numberDisplay.textContent = compteur;
        changecolor();
        playClickSound();
    });

    increaseButton.addEventListener("click", function() {
        compteur++;
        numberDisplay.textContent = compteur;
        changecolor();
        playClickSound();
    });

    resetButton.addEventListener("click", function() {
        compteur = 0;
        numberDisplay.textContent = compteur;
        changecolor();
        playClickSound();
    });

    themeSwitch.addEventListener("change", function() {
        document.body.classList.toggle("dark-theme", themeSwitch.checked);
    });
});
