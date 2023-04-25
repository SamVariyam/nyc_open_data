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
        <h2 class="activity-title">Active Squirrels: ${runningTrue.length / collection.length * 100}%</h2>
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
                          <p>${item.Language}</p>
                          <div class="mother">${item.wordForMother}</div>
                          <p><em> ${item.placeOfOrigin}
                      </div>
                  </div>
              `;
  
      listItem.insertAdjacentHTML("beforeend", itemDetails); // Which can we then insert
  
      // You can build logic from your data, too
      if (item.timeOfOrigin == "old") {
        // If this is `false`
        listItem.classList.add("old"); // Add this class to the whole `li`
      }
  
      if (item.timeOfOrigin == "middle") {
        // If this is `true`
        listItem.classList.add("middle"); // Add this class to the whole `li`
      }
  
      if (item.timeOfOrigin == "late") {
        // If this is `true`
        listItem.classList.add("late"); // Add this class to the whole `li`
      }
  
      if (item.timeOfOrigin == "modern") {
        // If this is `true`
        listItem.classList.add("modern"); // Add this class to the whole `li`
      }

  dotContainer.addEventListener('mouseover',()=> {
    audio.play()
    })

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
//draggable box
    const dragElement = (element, dragzone) => {
      let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
  //MouseUp occurs when the user releases the mouse button
      const dragMouseUp = () => {
        document.onmouseup = null;
  //onmousemove attribute fires when the pointer is moving while it is over an element.
        document.onmousemove = null;
  
        element.classList.remove("drag");
      };
  
      const dragMouseMove = (event) => {
  
        event.preventDefault();
  //clientX property returns the horizontal coordinate of the mouse pointer
        pos1 = pos3 - event.clientX;
  //clientY property returns the vertical coordinate of the mouse pointer
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
  //offsetTop property returns the top position relative to the parent
        element.style.top = `${element.offsetTop - pos2}px`;
        element.style.left = `${element.offsetLeft - pos1}px`;
      };
  
      const dragMouseDown = (event) => {
        event.preventDefault();
  
        pos3 = event.clientX;
        pos4 = event.clientY;
  
        element.classList.add("drag");
  
        document.onmouseup = dragMouseUp;
        document.onmousemove = dragMouseMove;
      };
  
      dragzone.onmousedown = dragMouseDown;
    };
  
    const dragable = document.getElementById("dragable"),
      dragzone = document.getElementById("dragzone");
  
    dragElement(dragable, dragzone);

