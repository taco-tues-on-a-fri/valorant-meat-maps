
const pressEnter = (inputId) => {
  // Key Code for ENTER = 13
  if ((event.keyCode == 13)) {
    document.getElementById(`${inputId}`).focus({preventScroll:false})
  }
}

let form = document.getElementById("user-form")

const mapSwitch = (number) => {
  switch(number) {
    case 1:
      return "static/Map-01@3x.png"
    case 2:
      return "static/Map-02@3x.png"
    case 3:
      return "static/Map-03@3x.png"
  }
}

const shuffleArray = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const getRandomHeatMap = () => {
  let heatMapArray = [1, 2, 3]
  shuffleArray(heatMapArray)
  
  return mapSwitch(heatMapArray[0])
}

const handleHeatMapImage = () => {
  let checkElementExists = document.getElementById("heat-map-image")

  if (checkElementExists === null) {
    const img = document.createElement("img")
    img.id = "heat-map-image"
    img.alt = "all the places you died"
    img.src = getRandomHeatMap()
    const matchHistoryContainer = document.getElementById("match-history-container")
    matchHistoryContainer.appendChild(img)
  } else {
    const img = document.getElementById("heat-map-image")
    img.src = getRandomHeatMap()
  }
}

const handleForm = (event) => { 
  console.log('handleForm()=> executed: event===', event)

  event.preventDefault() 
  handleHeatMapImage()
} 

form.addEventListener('submit', handleForm)