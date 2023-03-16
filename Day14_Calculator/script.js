const keys = document.querySelector('.keys');
const displayExpression = document.querySelector('.expression');
const displayResult = document.querySelector('.result');

let expression = '';  // initialiser l'expression

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
  displayExpression.textContent = expression;
}

// Fonction pour gérer les clics sur les touches
keys.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    const key = event.target;
    const keyValue = key.value;

    // Gérer les touches numériques
    if (/\d/.test(keyValue)) {
      expression += keyValue;
      updateDisplay();
    }

    // Gérer les touches d'opération
    if (key.classList.contains('operator')) {
      expression += ` ${keyValue} `;
      updateDisplay();
    }

    // Gérer la touche point
    if (keyValue === '.') {
      if (!/\./.test(expression)) {  // empêcher la saisie de plusieurs points
        expression += keyValue;
        updateDisplay();
      }
    }

    // Gérer la touche C (effacer)
    if (keyValue === 'C') {
      expression = '';
      updateDisplay();
    }

    // Gérer la touche égale (=)
    if (keyValue === '=') {
      try {
        const result = eval(expression);
        displayResult.textContent = result;
      } catch (error) {
        displayResult.textContent = 'Error';
      }
    }
  }
});