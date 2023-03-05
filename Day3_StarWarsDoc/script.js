const fetchDatasVehicles = async(url, container) => { 
  document.getElementById(container).innerHTML = "loading"
  let end = 0
  let internalUrl = url
  let globalData = ""
  while (end == 0){
    let fetchUrl = await fetch(internalUrl);
    let { results,next } = await fetchUrl.json()
    
    for (let i =0; i< results.length;i++){
      globalData += `<div>
      
        <h2>${results[i].name}</h2>
        <p>model : ${results[i].model}</p>
        <p>credit : ${results[i].cost_in_credits} $</p>
        <p>class : ${results[i].vehicle_class}</p>
        <p>crew : ${results[i].crew}</p>
      
      </div>`;
      
    }

    if (next == null){
      end = 1  
      document.getElementById(container).innerHTML = globalData
    }
    else{
      internalUrl = next
    }
  }
  
}
const fetchDatasFilms = async(url, container) => { 
  document.getElementById(container).innerHTML = "loading"
  let end = 0
  let internalUrl = url
  let globalData = ""
  while (end == 0){
    let fetchUrl = await fetch(internalUrl);
    let { results,next } = await fetchUrl.json()
    for (let i =0; i< results.length;i++){
      globalData += `<div>
      
        <h2>${results[i].title}</h2>
        <p>episode number : ${results[i].episode_id}</p>
        <p>director : ${results[i].director}</p>
        <p>producer : ${results[i].producer}</p>
        <p>release date : ${results[i].release_date}</p>
      
      </div>`;
    }
    document.getElementById(container).innerHTML = globalData
    if (next == null){
      end = 1  
      document.getElementById(container).innerHTML = globalData
    }
    else{
      internalUrl = next
    }
  }
  
}
const fetchDatasPeople = async(url, container) => { 
  document.getElementById(container).innerHTML = "loading"
  let end = 0
  let internalUrl = url
  let globalData = ""
  while (end == 0){
    let fetchUrl = await fetch(internalUrl);
    let { results,next } = await fetchUrl.json()
    for (let i =0; i< results.length;i++){
      globalData += `<div>
      
        <h2>${results[i].name}</h2>
        <p>height : ${results[i].height}</p>
        <p>mass : ${results[i].mass}</p>
        <p> birth year : ${results[i].birth_year}</p>
        <p> gender : ${results[i].gender}</p>
      </div>`;
    }
    
    if (next == null){
      end = 1  
      document.getElementById(container).innerHTML = globalData
    }
    else{
      internalUrl = next
    }
  }
  
}
const fetchDatasPlanets = async(url, container) => { 
  document.getElementById(container).innerHTML = "loading"
  let end = 0
  let internalUrl = url
  let globalData = ""
  while (end == 0){
    let fetchUrl = await fetch(internalUrl);
    let { results,next } = await fetchUrl.json()
    for (let i =0; i< results.length;i++){
      globalData += `<div>
      
        <h2>${results[i].name}</h2>
        <p>climate : ${results[i].climate}</p>
        <p>gravity : ${results[i].gravity}</p>
        <p>terrain : ${results[i].terrain}</p>
        <p>population : ${results[i].population}</p>
      
      </div>`;
    }

    if (next == null){
      end = 1  
      document.getElementById(container).innerHTML = globalData
    }
    else{
      internalUrl = next
    }
  }
  
}
const fetchDatasSpecies = async(url, container) => {  
  document.getElementById(container).innerHTML = "loading"
  let end = 0
  let internalUrl = url
  let globalData = ""
  while (end == 0){
    let fetchUrl = await fetch(internalUrl);
    let { results,next } = await fetchUrl.json()
    for (let i =0; i< results.length;i++){
      globalData += `<div>
      
        <h2>${results[i].name}</h2>
        <p>classification : ${results[i].classification}</p>
        <p>average height : ${results[i].average_height}</p>
        <p>average lifespan${results[i].average_lifespan}</p>
        <p>language${results[i].language}</p>
      
      </div>`;
    }
    if (next == null){
      end = 1  
      document.getElementById(container).innerHTML = globalData
    }
    else{
      internalUrl = next
    }
  }
}
const fetchDatasStarships = async(url, container) => { 
  document.getElementById(container).innerHTML = "loading"
  let end = 0
  let internalUrl = url
  let globalData = ""
  while (end == 0){
    let fetchUrl = await fetch(internalUrl);
    let { results,next } = await fetchUrl.json()
    for (let i =0; i< results.length;i++){
      globalData += `<div>
      
        <h2>${results[i].name}</h2>
        <p>model : ${results[i].model}</p>
        <p>credits : ${results[i].cost_in_credits} $</p>
        <p>passengers : ${results[i].passengers}</p>
        <p>crew : ${results[i].crew}</p>
      
      </div>`;
    }
    
    if (next == null){
      end = 1  
      document.getElementById(container).innerHTML = globalData
    }
    else{
      internalUrl = next
    }
  }
  
}

fetchDatasVehicles("https://swapi.dev/api/vehicles/", "tabVehicles")
fetchDatasFilms("https://swapi.dev/api/films/", "tabFilms")
fetchDatasPeople("https://swapi.dev/api/people/", "tabPeople")
fetchDatasPlanets("https://swapi.dev/api/planets/", "tabPlanets")
fetchDatasSpecies("https://swapi.dev/api/species/", "tabSpecies")
fetchDatasStarships("https://swapi.dev/api/starships/", "tabStarships")


let htmlSegment = `<div class="user">
      <h2>Salut</h2>
    </div>`;
