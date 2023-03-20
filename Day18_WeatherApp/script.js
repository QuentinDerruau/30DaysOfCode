const form = document.querySelector('form');
const cityInput = document.getElementById('city');
const weatherDiv = document.getElementById('weather');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const city = cityInput.value;
	getWeather(city);
});

async function getWeather(city) {
	try {
        //Add your own api key 
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
		
        const data = await response.json();
		showWeather(data);
	} catch (error) {
		console.error(error);
	}
}

function showWeather(data) {
	const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
	const temperature = `${data.main.temp.toFixed(1)}°C`;
	const description = data.weather[0].description;
	const html = `
		<img src="${icon}" alt="${description}">
		<h2>${temperature}</h2>
		<p>${description}</p>
	`;
	weatherDiv.innerHTML = html;
}