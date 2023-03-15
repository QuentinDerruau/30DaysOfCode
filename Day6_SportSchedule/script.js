let container = document.getElementById("container")
let DaysArray = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",]
let week = ``
let state = ["rest","global","legs","arms"]
for (let i in DaysArray){
	week += `
	<div id=${DaysArray[i]}>
	<h2>${DaysArray[i]}</h2>
	<div class="value" id=${DaysArray[i]} draggable="true">
	<h3>Nothing</h3>
	</div>
	</div>
	`
	container.innerHTML = week	
}
const daysBox = document.querySelectorAll('.value')

for (let index of daysBox){
	console.log(index)
	index.ondragstart = (e) => {
		e.dataTransfer.setData('text/plain', index.innerHTML)
		console.log('start')
	};

	index.ondragover = (e) => {
		e.preventDefault();
		console.log('dsdq')
	}

	index.ondrop = (e) => {
		index.innerHTML = e.dataTransfer.getData('text/plain')
		console.log('oui')
	}
}
