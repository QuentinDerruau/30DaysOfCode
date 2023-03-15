const eurosEl = document.getElementById("euros");
      const dollarsEl = document.getElementById("dollars");
      const convertToDollarBtn = document.getElementById("convertToDollar");
      const convertToEuroBtn = document.getElementById("convertToEuro");

      convertToDollarBtn.addEventListener("click", () => {
        const euros = eurosEl.value;
        const rate = 1.19;
        const dollars = euros * rate;
        dollarsEl.value = dollars.toFixed(2);
      });

      convertToEuroBtn.addEventListener("click", () => {
        const dollars = dollarsEl.value;
        const rate = 0.84;
        const euros = dollars * rate;
        eurosEl.value = euros.toFixed(2);
      });