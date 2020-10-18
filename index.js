//Detecting button press

var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    function handleClick() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    }
}

//Detecting keyboard press

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var anbilAvan1 = new Audio("sounds/Anbil Avan remix 1.mp3");
            anbilAvan1.play();
            break;
        case "a":
            var anbilAvan2 = new Audio("sounds/Anbil Avan remix 2.mp3");
            anbilAvan2.play();
            break;
        case "s":
            var nanjamma1 = new Audio("sounds/Nanjamma remix 1.mp3");
            nanjamma1.play();
            break;
        case "d":
            var whiteTown1 = new Audio("sounds/White_Town remix 1.mp3");
            whiteTown1.play();
            break;
        case "j":
            var kalki1 = new Audio("sounds/KALKI remix 1.mp3");
            kalki1.play();
            break;
        case "k":
            var kalki2 = new Audio("sounds/KALKI remix 2.mp3");
            kalki2.play();
            break;
        case "l":
            var kalki3 = new Audio("sounds/KALKI remix 3.mp3");
            kalki3.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

