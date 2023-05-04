let myData;
let totalPopulation = document.getElementById("population-total");



fetch("assets/data.json")
    .then(response => response.json())
    .then(data => (
        myData = data)
    .then(addAllYears())
    .then(setup())
    )


function logData(){
    console.log(myData[0].Year)
}

function addAllYears(data, divId){
    const yearParent = document.getElementById("year-num");
    myData.forEach(function (item) {
        const years = document.createElement("h1");
        years.innerHTML = item.Year;
        years.classList.add('year-numbers');
        yearParent.appendChild(years);
        const populationDisplay = document.getElementById
        ("population-total")
        const nycConsumption = document.getElementById ("consumption-total")
        const nycPerCapita = document.getElementById ("per-capita")
        
        years.addEventListener("click", function(event){
            
            populationDisplay.innerHTML = `<span class="population-data-point">POPULATION: ${item.newYorkCityPopulation}</span>`;
            console.log("this div was clicked")

            nycConsumption.innerHTML = `<span class="consumption-data-point"> ${item.nycConsumptionPerDay} GALLONS/DAY</span>`;
            console.log("consumption div was clicked")

            nycPerCapita.innerHTML = `<span class="perperson-data-point"> ${item.perCapita} GALLONS/PERSON/DAY</span>`;
            console.log("consumption div was clicked");
            
            function waterFunction(){
                const darkBlue = document.getElementById('dark-blue');
                const lightBlue = document.getElementById('light-blue')
                var height = ((item.nycConsumptionPerDay/2000)*100);
                darkBlue.style.height = `${height}%`; 
                console.log(height);
                lightBlue.style.height = `${(100-height)}%`;

            }

            waterFunction();

            // Initialize the canvas
function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  // Set up the main bubble and trailing bubbles
  let mainBubble = {
    x: 0,
    y: 0,
    size: 50
  };
  
  let trailBubbles = [];
  
  // Draw the bubbles on the canvas
  function draw() {
    // Clear the canvas
    background(255);
  
    // Update the position of the main bubble to follow the cursor
    mainBubble.x = mouseX;
    mainBubble.y = mouseY;
  
    // Draw the main bubble
    fill(200, 200, 255);
    noStroke();
    ellipse(mainBubble.x, mainBubble.y, mainBubble.size, mainBubble.size);
  
    // Add a new trail bubble every 5 frames
    if (frameCount % 5 === 0) {
      trailBubbles.push({
        x: mainBubble.x,
        y: mainBubble.y,
        size: random(5, 20)
      });
    }
  
    // Draw the trail bubbles
    for (let i = 0; i < trailBubbles.length; i++) {
      fill(200, 200, 255, 100);
      noStroke();
      ellipse(trailBubbles[i].x, trailBubbles[i].y, trailBubbles[i].size, trailBubbles[i].size);
  
      // Move the trail bubbles towards the main bubble
      let dx = mainBubble.x - trailBubbles[i].x;
      let dy = mainBubble.y - trailBubbles[i].y;
      let angle = atan2(dy, dx);
      let speed = map(trailBubbles[i].size, 5, 20, 2, 8);
      trailBubbles[i].x += cos(angle) * speed;
      trailBubbles[i].y += sin(angle) * speed;
    }
  
    // Remove trail bubbles that have gone off-screen
    for (let i = trailBubbles.length - 1; i >= 0; i--) {
      if (trailBubbles[i].x < -50 || trailBubbles[i].x > width + 50 || trailBubbles[i].y < -50 || trailBubbles[i].y > height + 50) {
        trailBubbles.splice(i, 1);
      }
    }
    
    console.log()
  }

  

        console.log(yearParent)
    })})};
