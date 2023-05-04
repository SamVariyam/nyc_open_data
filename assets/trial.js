let myData;
let totalPopulation = document.getElementById("population-total");



fetch("assets/data.json")
    .then(response => response.json())
    .then(data => (
        myData = data)
    .then(addAllYears())
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
                var height = (item.nycConsumptionPerDay/2000)*100;
                darkBlue.style.height = `${height}%`; 
                console.log(height);
                lightBlue.style.height = `${(100-height)}%`;

            }

            waterFunction();

        console.log(yearParent)
    })})};
