function getTime() {
    let now = new Date();
    let hour = now.getHours() % 12;
    let minute = now.getMinutes();
    let second = now.getSeconds();
    return { hour, minute, second };
  }
  
  function setHands(hour, minute, second) {
    let hourHand = document.querySelector("#hour-hand");
    let minuteHand = document.querySelector("#minute-hand");
    let secondHand = document.querySelector("#second-hand");
  
    let hourAngle = (hour + minute / 60) * 30;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
  
    let minuteAngle = minute * 6;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  
    let secondAngle = second * 6;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
  }
  
  setInterval(() => {
    let time = getTime();
    setHands(time.hour, time.minute, time.second);
  }, 1000);