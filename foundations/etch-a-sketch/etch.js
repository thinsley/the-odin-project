function removeGrid() {
    const oldList = document.querySelectorAll(".child");
    oldList.forEach((div) => {
        papaContainer.removeChild(div);        
    });
}

//Define parent container
const papaContainer = document.querySelector("#papa-container");
const gridButton = document.querySelector(".newGrid");
let gridFactor;
gridButton.addEventListener('click', () => {
    try {
        gridFactor = prompt('Enter the number of squares you want on each side');
        if(gridFactor >= 31) {
            throw("Grid length cannot exceed 30");
        }
        else {
            //Remove old grid
            removeGrid();
            //Create grid based on user input
            for (let i=0; i<(gridFactor*gridFactor); i++) {
                const childDiv = document.createElement("div");
                childDiv.textContent = i;
                childDiv.classList.add("child");
                childDiv.style.flexBasis = 100/gridFactor + "%";
                papaContainer.appendChild(childDiv);

                //Hover logic
                const childList = document.querySelectorAll(".child");
                childList.forEach((div) => {
                    div.addEventListener('mouseover', () => {
                        div.classList.add("hover");
                    });
                });
            }
        }
    }
    catch (e) {
        alert("Error: " + e);
        gridFactor = 16;
    }
});
