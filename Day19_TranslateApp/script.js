
const inputTextElement = document.getElementById("input-text");
const outputTextElement = document.getElementById("output-text");
const sourceLanguageElement = document.getElementById("source-language");
const targetLanguageElement = document.getElementById("target-language");
const translateButton = document.getElementById("translate-button");


function translateText() {
    const sourceLanguage = sourceLanguageElement.value;
    const targetLanguage = targetLanguageElement.value;
    const inputText = inputTextElement.value;

    const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(inputText)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            const translation = data[0][0][0];

            
            outputTextElement.value = translation;
        })
        .catch(error => console.error(error));
}


translateButton.addEventListener("click", translateText);