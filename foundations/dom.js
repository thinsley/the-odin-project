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

//Events Exercises

//Method 2
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World, method 2");

// //Method 3 (PREFERRED)
// const btn3 = document.querySelector("#btn3");
// btn3.addEventListener('click', function (e) {
//     e.target.style.background = "blue";
//     //Turns the background of btn3 blue
//     alert("Hello World Listener");
// });

const buttons = document.querySelectorAll('button');
//buttons now stores a nodelist of all buttons
buttons.forEach((button) => {
    //iterates through all buttons and attached listener event
    button.addEventListener('click', () => {
        //alerts the ID of the button
        alert(button.id);
    });
});
