// Function to render your items
function renderItems(collection) {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById("collection");
  
    let runningTrue = [];
    let runningFalse = [];
  
    collection.forEach(function (item) {
      if (item.running == false) {
        runningFalse.push(item);
      } else if (item.running == true) {
        runningTrue.push(item);
      }
    });
  
    const dotContainer = document.createElement("div")
    dotContainer.classList.add('dot-container')
    collectionList.appendChild(dotContainer)

    //create audio element 
    const audio = document.createElement("audio");
  
    const activeDot = document.createElement("div");
    activeDot.style.background = "#000";
    activeDot.style.width = `${runningTrue.length / collection.length * 100}vw`
    activeDot.style.height = '100vh'
  
    const activeTitle = `
        <h2 class="activity-title">NYC Water Consumption: ${runningTrue.length / collection.length * 100}%</h2>
    `
  
    activeDot.insertAdjacentHTML('beforeend', activeTitle)
  
    const lazyDot = document.createElement("div");
    lazyDot.style.background = "#ff0000";
    lazyDot.style.width = `${runningFalse.length / collection.length * 100}vw`
    lazyDot.style.height = '100vh'
  
    dotContainer.appendChild(activeDot)
    dotContainer.appendChild(lazyDot)
  
  //   item.style.width = runningTrue.length / collection.length} + '%'
  
    // Loop through each item in the collection array
    collection.forEach(function (item) {
      const listItem = document.createElement("div"); // Make the `div
      listItem.classList.add("mother-box");
  
      // This can get annoying, so we can use “template literals” instead
      const itemDetails = `
                  <div class="data-container">
                      <div class="data-point" style="left: ${item.leftPosition};"></div>
                      <div class="data-details">
                          <p>${item.Year}</p>
                          <div class="population">${item.newYorkCityPopulation}</div>
                          <p> ${item.nycConsumptionPerDay}</p>
                          <p> ${item.perCapita}</p>
                      </div>
                  </div>
              `;
  
      listItem.insertAdjacentHTML("beforeend", itemDetails); // Which can we then insert

      collectionList.appendChild(listItem); // Then add the whole `li` into the `ul`
    });
  }
  
  // Fetch gets your JSON file.
  fetch("assets/data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (collection) {
      // And passes the data to the function, above!
      renderItems(collection.reverse()); // In reverse order
    });