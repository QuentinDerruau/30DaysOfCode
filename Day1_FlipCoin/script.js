// Get all element

let button = document.getElementById("flipButton")
let result = document.getElementById("result")
let head = document.getElementById('head')
let tail = document.getElementById('tail')

// Set variable for incrementation
var counter = 1;
let active = 0

// Set Flip Function to add and remove "flip class"
function Flip(one, two){
    one.classList.add('flip');
    two.classList.remove('flip');
}
// Set a function to display the result
function displayResult(){
    // if even -> Head
    if (counter++ % 2) {
        result.innerHTML = "Result : Head"
        
    } 
    // if odd -> Tail
    else {
        result.innerHTML = "Result : Tail"
    }
}
// Event on click on button
button.addEventListener('click', event => {
    // If button already clicked don't start script else start it
    if (active == 0) {
        active = 1
            // Create variable with an interval every 0.2s  
            var inter = setInterval(function() {
                // if even -> flp tail to head
                if (counter++ % 2) {
                    Flip(head , tail);
                    
                } 
                // if even -> flp head to tail
                else {
                    Flip(tail , head);
                }
            }, 200);
            // random Timeout between 1s and 5s on interval
            setTimeout(() => {
                clearInterval(inter);
                displayResult();
                active = 0
            }, 1000 + Math.random() * (5000 - 1000))
        }


  });