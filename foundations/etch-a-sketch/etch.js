const DEFAULT_SIZE = 16;

//Clears the grid
function removeGrid() {
    const oldList = document.querySelectorAll(".child");
    oldList.forEach((div) => {
        papaContainer.removeChild(div);        
    });
}

function setupGrid(gridFactor) {
//Create grid based on user input
    for (let i=0; i<(gridFactor*gridFactor); i++) {
        const childDiv = document.createElement("div");
        childDiv.textContent = i;
        childDiv.classList.add("child");
        childDiv.style.flexBasis = 100/gridFactor + "%"; //Makes the grid wrap at the desired gridlength
        papaContainer.appendChild(childDiv);

        //Hover logic
        const childList = document.querySelectorAll(".child");
        childList.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.classList.add("hover");
                //Generates a random RGB value for the background color
                const red = Math.floor(Math.random() * 255);
                const green = Math.floor(Math.random() * 255);
                const blue = Math.floor(Math.random() * 255);
                div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            });
        });
    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE)
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
            setupGrid(gridFactor);
        }
    }
    catch (e) {
        alert("Error: " + e);
        gridFactor = 16;
    }
});
