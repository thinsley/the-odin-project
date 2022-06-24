//Define parent container
const papaContainer = document.querySelector("#papa-container");

//Create 16x16 grid
for (let i=0; i<256; i++) {
    const childDiv = document.createElement("div");
    childDiv.textContent = i;
    childDiv.classList.add("child");
    papaContainer.appendChild(childDiv);
}

//Hover logic
const childList = document.querySelectorAll(".child");
childList.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("hover")
    });
});
