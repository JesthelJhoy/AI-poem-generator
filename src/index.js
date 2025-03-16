function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Hello World"],
    autoStart: true,
    delay: 1,
  });
}

let formElement = document.querySelector("#form-box");
formElement.addEventListener("submit", generatePoem);
