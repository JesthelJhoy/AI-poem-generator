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
  let context = "You are a poem expert who likes to make 4 line poems.";
  let prompt = `Generate a poem about ${instructionsBox}`;
  let apiKey = "4a023e13f571a05co054c10eb0t37f34";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(answer);

  console.log("generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
}

let formElement = document.querySelector("#form-box");
formElement.addEventListener("submit", generatePoem);
