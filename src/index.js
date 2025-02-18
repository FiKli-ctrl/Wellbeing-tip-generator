function displayTip(response) {

    console.log("tip generated");
  new Typewriter("#tip", { 
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}


function generateTip(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#instructions");
    let apiKey = "b9d4b0f1302d1ta5ba14cob9718ff6e7";
    let prompt = `Generate a short health and wellbeing tip regarding ${instructionsInput.value}`;
    let context = "You are a helpful assistant who is passionate about people's wellbeing";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let tipElement = document.querySelector("#tip");
    tipElement.classList.remove("hidden");
    tipElement.innerHTML = `⏳Generating your wellbeing tip about ${instructionsInput.value}`;

    console.log("generating tip");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context; ${context}`);
    
    axios.get(apiURL).then(displayTip);


  


}

let tipFormElement = document.querySelector("#wellbeing-tip-form");
tipFormElement.addEventListener("submit", generateTip);