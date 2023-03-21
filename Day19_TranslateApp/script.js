// Récupérer les éléments HTML
const inputTextElement = document.getElementById("input-text");
const outputTextElement = document.getElementById("output-text");
const sourceLanguageElement = document.getElementById("source-language");
const targetLanguageElement = document.getElementById("target-language");
const translateButton = document.getElementById("translate-button");

// Fonction pour traduire le texte
function translateText() {
    const sourceLanguage = sourceLanguageElement.value;
    const targetLanguage = targetLanguageElement.value;
    const inputText = inputTextElement.value;

    const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(inputText)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Récupérer la traduction à partir de la réponse
            const translation = data[0][0][0];

            // Mettre à jour le champ de texte de sortie
            outputTextElement.value = translation;
        })
        .catch(error => console.error(error));
}

// Ajouter un événement de clic sur le bouton de traduction
translateButton.addEventListener("click", translateText);