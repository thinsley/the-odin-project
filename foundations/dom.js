//Exercise 1
const container = document.querySelector("#container");
   
const ex1Content = document.createElement("p");
ex1Content.classList.add('ex1Content');
ex1Content.textContent = "Hey I'm red!"
ex1Content.style.color = "red";
container.appendChild(ex1Content);

//Exercise 2
const headerContent = document.createElement("h3");
headerContent.classList.add("headerContent");
headerContent.textContent = "I'm a blue h3!";
headerContent.style.color = "blue";
container.appendChild(headerContent);

//Exercise 3
const divBox = document.createElement("div");
divBox.classList.add("divBox");
divBox.setAttribute('style', 'background-color: pink; border: solid; border-color: black;');

const inADiv = document.createElement("h1");
inADiv.textContent = "I'm in a div";
divBox.appendChild(inADiv);

const meToo = document.createElement("p");
meToo.textContent = "ME TOO!";
divBox.appendChild(meToo);

container.appendChild(divBox);

