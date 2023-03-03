let button = document.getElementById("flipButton")
let result = document.getElementById("result")
let head = document.getElementById('head')
let tail = document.getElementById('tail')
var counter = 1;
let active = 0

function Flip(one, two){
    one.classList.add('flip');
    two.classList.remove('flip');
}
function displayResult(){
    if (counter++ % 2) {
        result.innerHTML = "Result : Head"
        
    } else {
        result.innerHTML = "Result : Tail"
    }
}
button.addEventListener('click', event => {
    
   if (active == 0) {
    active = 1 
        var inter = setInterval(function() {
            if (counter++ % 2) {
                Flip(head , tail);
                
            } else {
                Flip(tail , head);

            }
        }, 200);
        setTimeout(() => {
            clearInterval(inter);
            displayResult();
            active = 0
          }, 1000 + Math.random() * (5000 - 1000))
    }


  });