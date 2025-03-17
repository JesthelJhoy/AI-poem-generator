function answer(response) {
  console.log("generating poem");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsBox = document.querySelector("#instructions");
  let context =
    "Send an uplifting or encouragement words depending on the mood (for example: happy, sad, tired) that will be provided for you. Make sure that your asnwer is relevant and please be nice and make sure to spread only positivity";
  let prompt = `Generate an encouraging words for this mood: ${instructionsBox}`;
  let apiKey = "4a023e13f571a05co054c10eb0t37f34";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(answer);

  console.log("generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
}

let formElement = document.querySelector("#form-box");
formElement.addEventListener("submit", generatePoem);
