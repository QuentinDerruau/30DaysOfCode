const keys = document.querySelector('.keys');
const displayExpression = document.querySelector('.expression');
const displayResult = document.querySelector('.result');

let expression = '';


function updateDisplay() {
  displayExpression.textContent = expression;
}


keys.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    const key = event.target;
    const keyValue = key.value;


    if (/\d/.test(keyValue)) {
      expression += keyValue;
      updateDisplay();
    }


    if (key.classList.contains('operator')) {
      expression += ` ${keyValue} `;
      updateDisplay();
    }


    if (keyValue === '.') {
      if (!/\./.test(expression)) {  
        expression += keyValue;
        updateDisplay();
      }
    }

    if (keyValue === 'C') {
      expression = '';
      updateDisplay();
    }

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