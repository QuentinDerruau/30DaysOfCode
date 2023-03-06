const glass = 2800
let addedWater = 0
const frontGlass = document.getElementById("innerWater")
const container = document.getElementById("container")
let percentage = 0

for (let i =0 ; i < 8 ; i++){
    let littleCup = document.createElement('div');
    littleCup.classList = 'littleGlass'
    let id = "littleGlass"+i
    littleCup.id = id
    let text = document.createElement("p")
    text.innerHTML = "350ml"
    littleCup.append(text)
    littleCup.onclick = function() {
        addWater(id)
    }
    container.append(littleCup)
}
function addWater(id){
    console.log(id)
    let thisGlass = document.getElementById(id)
    
    if (thisGlass.classList.contains("active")){
        thisGlass.classList.remove("active")
        addedWater -= 350
    }
    else{
        thisGlass.classList.add("active")
        addedWater += 350
    }
    console.log(addedWater)
    updateGlass()
}
function updateGlass(){
    percentage = addedWater /glass 
    height = percentage * 300 + "px"
    frontGlass.style.height = height
    document.getElementById('liter').innerHTML = 'Liter in the Big glass :' + addedWater /1000 +' L'
    if (addedWater == 0 ){
        document.getElementById("literIndicator").classList.add('hidden')
    }
    else if (addedWater == glass){
        document.getElementById("literIndicator").classList.add('hidden')
    }
    else{
        document.getElementById("literIndicator").classList.remove('hidden')
        let remaining = glass - addedWater
        document.getElementById("literIndicator").innerHTML = 'Remaining : ' +remaining + "ml"
    }
    
}