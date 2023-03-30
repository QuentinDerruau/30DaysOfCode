let inputText = document.getElementById("input-text");
let resultDiv = document.getElementById("result");

inputText.addEventListener("input", () => {
  let text = inputText.value.trim(); 
  let wordCount = text.split(/\s+/).length; 
  let charCount = text.length; 
  resultDiv.innerText = `Number of words : ${wordCount}\n Number of characteres : ${charCount}`;
});