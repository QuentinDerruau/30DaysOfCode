const board = document.getElementById('board')
let player = [9,10]
var foodPosition =[]
var direction = "up"
var foodScore = 0
const score = document.getElementById('score')
const statusGame = document.getElementById('status')
const startButton = document.getElementById('startButton')
var inter
var boardGame = false
var game = false


document.body.addEventListener("keydown", (e) => {
    const key = event.key;
    switch (key) {
        case "ArrowLeft":
            direction = "left";
            break;
        case "ArrowRight":
            direction = "right";
            break;
        case "ArrowUp":
            direction = "up";
            break;
        case "ArrowDown":
            direction = "down";
            break;
    }
});


function move(){
    switch (direction){
        case "up":
            if ( player[0]-1 < 0 ){
                clearInterval(inter)
                document.getElementById('['+player[0]+','+player[1]+']').classList.remove("active")
                player = [9,10]
                document.getElementById('['+foodPosition[0]+','+foodPosition[1]+']').classList.remove("food")
                game =false
                boardGame =true
                startButton.classList.remove('hide')
                statusGame.innerHTML = "Loose"
            }
            else{
            document.getElementById('['+player[0]+','+player[1]+']').classList.remove("active")
            player = [player[0]-1, player[1]]
            document.getElementById('['+player[0]+','+player[1]+']').classList.add("active")
            break;
            }
        case "down":
            if (player[0]+1 > 19 ){
                clearInterval(inter)
                document.getElementById('['+player[0]+','+player[1]+']').classList.remove("active")
                player = [9,10]
                document.getElementById('['+foodPosition[0]+','+foodPosition[1]+']').classList.remove("food")
                game =false
                boardGame =true
                startButton.classList.remove('hide')
                statusGame.innerHTML = "Loose"
                
            }
            else{
            document.getElementById('['+player[0]+','+player[1]+']').classList.remove("active")
            player = [player[0]+1, player[1]]
            document.getElementById('['+player[0]+','+player[1]+']').classList.add("active")  
            break;
            }
        case "left":
            if (player[1]-1 < 0 ){
                clearInterval(inter)
                document.getElementById('['+player[0]+','+player[1]+']').classList.remove("active")
                player = [9,10]
                document.getElementById('['+foodPosition[0]+','+foodPosition[1]+']').classList.remove("food")
                game =false
                boardGame =true
                startButton.classList.remove('hide')
                statusGame.innerHTML = "Loose"
                
            }
            else{
            document.getElementById('['+player[0]+','+player[1]+']').classList.remove("active")
            player = [player[0], player[1] -1]
            document.getElementById('['+player[0]+','+player[1]+']').classList.add("active")  
            break;
            }
        case "right":
            if (player[1]+1 > 19){
                clearInterval(inter)
                document.getElementById('['+player[0]+','+player[1]+']').classList.remove("active")
                player = [9,10]
                document.getElementById('['+foodPosition[0]+','+foodPosition[1]+']').classList.remove("food")
                game =false
                boardGame =true
                startButton.classList.remove('hide')
                statusGame.innerHTML = "Loose"
                
            }
            else{
            document.getElementById('['+player[0]+','+player[1]+']').classList.remove("active")
            player = [player[0], player[1]+1]
            document.getElementById('['+player[0]+','+player[1]+']').classList.add("active")  
            break;
            }
    }
    
}


function food(){
    x = Math.floor(Math.random() * 19)
    y= Math.floor(Math.random() * 19)
    foodPosition = [x,y];
    document.getElementById('['+x+','+y+']').classList.add("food")  
}

function setBoard (){
    let container = document.createElement('div');
    container.classList.add("container")
    board.append(container)
    for (let y=0; y < 20; y++) {
        let row = document.createElement('div');
        row.classList.add("row");
        container.append(row) 
        for (let x = 0 ; x < 20; x++){
            let position = document.createElement("div");
            position.id = '['+y+","+x+']'

            row.append(position)
        }
    }
}


function checkFood(){
    if (player[0] == foodPosition[0] && player[1] == foodPosition[1]){
        document.getElementById('['+foodPosition[0]+','+foodPosition[1]+']').classList.remove("food")
        foodScore ++
        score.innerHTML = "Score : " + foodScore 
        clearInterval(inter)
        inter = setInterval(function() {
            move()
            checkFood()
            }, 200 - foodScore*10);
        food()
    }
}

startButton.addEventListener('click', event => {
    startButton.classList.add('hide')
    if (boardGame === false){
        setBoard()
    }
    boardGame = true
    foodScore = 0
    score.innerHTML = "Score : " + foodScore 
    statusGame.innerHTML = ""
    if (game == false){
        console.log(player)
        game =true
        document.getElementById('['+player[0]+','+player[1]+']').classList.add("active")
        inter = setInterval(function() {
            move()
            checkFood()
            }, 200);
        food()
    }
})






