function generateTip(event) {
    event.preventDefault();

    new Typewriter("#tip", { 
        strings: "Prioritize your sleep and go to bed early.",
        autoStart: true,
        delay: 1,
        cursor: "",
    });


}

let tipFormElement = document.querySelector("#wellbeing-tip-form");
tipFormElement.addEventListener("submit", generateTip);