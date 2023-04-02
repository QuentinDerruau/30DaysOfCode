const boardSize = 9;
    const emptyCellValue = '';
    let grid = Array.from({ length: boardSize }, () => Array.from({ length: boardSize }, () => 0));

    function createTable() {
      const table = document.getElementById('sudoku-board');

      for (let row = 0; row < boardSize; row++) {
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);

        for (let col = 0; col < boardSize; col++) {
          const tableCell = document.createElement('td');
          const input = document.createElement('input');
          input.maxLength = 1;
          input.type = 'text';
          input.addEventListener('input', validateInput);
          tableCell.appendChild(input);
          tableRow.appendChild(tableCell);
        }
      }
    }

    function validateInput(event) {
      const input = event.target;
      const value = input.value;

      if (value === emptyCellValue || (value >= 1 && value <= 9)) {
        input.dataset.previousValue = value;
      } else {
        input.value = input.dataset.previousValue || emptyCellValue;
      }
    }
    function isValid(row, col, num) {
      for (let i = 0; i < boardSize; i++) {
        if (grid[row][i] === num || grid[i][col] === num) {
          return false;
        }
      }
      const regionRow = Math.floor(row / 3) * 3;
      const regionCol = Math.floor(col / 3) * 3;
    
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[regionRow + i][regionCol + j] === num) {
            return false;
          }
        }
      }
      return true;
    }
    function solveSudoku(row, col) {
      if (row === boardSize) {
        return true;
      }
    
      if (grid[row][col] !== 0) {
        if (col === boardSize - 1) {
          return solveSudoku(row + 1, 0);
        } else {
          return solveSudoku(row, col + 1);
        }
      }

      for (let num = 1; num <= boardSize; num++) {
        if (isValid(row, col, num)) {
          grid[row][col] = num;
    
          if (col === boardSize - 1) {
            if (solveSudoku(row + 1, 0)) {
              return true;
            }
          } else {
            if (solveSudoku(row, col + 1)) {
              return true;
            }
          }
        }
      }
      grid[row][col] = 0;
      return false;
    }

    const solveButton = document.getElementById('solve-button');

    solveButton.addEventListener('click', () => {

      const inputs = document.querySelectorAll('input');
      for (let i = 0; i < inputs.length; i++) {
        const row = Math.floor(i / boardSize);
        const col = i % boardSize;
        const value = inputs[i].value.trim();

        if (value === emptyCellValue) {
          grid[row][col] = 0;
        } else {
          grid[row][col] = parseInt(value);
        }
      }


      if (solveSudoku(0, 0)) {

        for (let row = 0; row < boardSize; row++) {
          for (let col = 0; col < boardSize; col++) {
            const input = document.querySelectorAll('input')[row * boardSize + col];
            input.value = grid[row][col];
          }
        }
      }
      else {
        alert('Cant be resolve');
      }
    });
    createTable();