function curtainOnClick(curtain) {
    curtain.classList.add('upped');
    curtain.classList.remove("hoverable");
}

function lamp1(lamp) {
    lamp.classList.toggle("onmousedown");
    document.onmouseup = () => {
        lamp.classList.toggle("onmousedown");
        document.onmouseup = null;
        document.getElementById("triangle")
            .classList
            .toggle("triangle");
        document.getElementById("wizard")
            .classList
            .toggle("wizard");
        document.getElementById("magic-hat")
            .classList
            .toggle("magic-hat");
    }
}

function changeAnimal(){
    let animal = document.getElementById("animal");
    animal.classList.toggle("animal-anim-up");
    animal.classList.toggle("animal-anim-down");
    setTimeout(() => {
        animal.classList.toggle("animal-anim-up");
        animal.classList.toggle("animal-anim-down");
        animal.classList.toggle("bunny");
        animal.classList.toggle("bird");
    }, 500)
}
