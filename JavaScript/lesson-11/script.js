// // const text = document.getElementById("text");

// // console.dir(text);

// // text.textContent = "Хей! Цей текст було змінено за допомогою JS!!!";

// // const btnContainer = document.getElementById("btnContainer");

// // const color = "red";
// // const button = `<button class='button' style="background-color: ${color}">Це кнопка</button>`;

// // btnContainer.insertAdjacentHTML("beforeend", button);

// // // Task: у вас є масив з технологій, потрібно через js ствоити список (ul li) і додати технології на сторінку

// // const technologies = ["HTML", "CSS", "JS", "GIT", "React.js"];

// // /*
// // <ul>
// //   <li>HTML</li>
// //   <li>CSS</li>
// //   <li>JS</li>
// //   <li>GIT</li>
// //   <li>React.js</li>
// // </ul>
// // */



// // const ul = document.createElement("ul");


// // for (let i = 0; i < technologies.length; i++) {
// //     const li = document.createElement("li");
// //     li.textContent = technologies[i];
// //     ul.appendChild(li);
// // }


// // document.body.appendChild(ul);


// // // 1 спосіб

// // const container = document.getElementById("container");
// // let list = "";

// // for (let i = 0; i < technologies.length; i += 1) {
// //   list += `<li>${technologies[i]}</li>`;
// // }

// // container.insertAdjacentHTML("beforeend", `<ul>${list}</ul>`);

// // // 2 спосіб

// // const container = document.getElementById("container");
// // const ulEl = document.createElement("ul");

// // for (let i = 0; i < technologies.length; i += 1) {
// //   const liEl = document.createElement("li");
// //   liEl.textContent = technologies[i];
// //   ulEl.appendChild(liEl);
// // }

// // container.appendChild(ulEl);

// //Task: Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// const colors = [
//     {
//         label: "red",
//         color: "#FF0000",
//     },
//     {
//         label: "green",
//         color: "#00FF00",
//     },
//     {
//         label: "blue",
//         color: "#0000FF",
//     },
//     {
//         label: "yellow",
//         color: "#FFFF00",
//     },
// ];

// Alexey17: 24
//     < p id = "text" > Lorem ipsum dolor sit amet.</p >
//         <div id="btnContainer"></div>
// const text = document.getElementById("text");

// console.dir(text);

// text.textContent = "Хей! Цей текст було змінено за допомогою JS!!!";

// const btnContainer = document.getElementById("btnContainer");
// const button = "<button class='button'>Це кнопка</button>";

// btnContainer.insertAdjacentHTML("beforeend", button);
// Alexey17: 28
// const color = "red";
// const button = `<button class='button' style="background-color: ${color}">Це кнопка</button>`;
// Alexey17: 31
// // Task: у вас є масив з технологій, потрібно через js ствоити список (ul li) і додати технології на сторінку

// const technologies = ["HTML", "CSS", "JS", "GIT", "React.js"];

// /*
// <ul>
//   <li>HTML</li>
//   <li>CSS</li>
//   <li>JS</li>
//   <li>GIT</li>
//   <li>React.js</li>
// </ul>
// */

// // 1 спосіб

// const container = document.getElementById("container");
// let list = "";

// for (let i = 0; i < technologies.length; i += 1) {
//     list += `<li>${technologies[i]}</li>`;
// }

// container.insertAdjacentHTML("beforeend", `<ul>${list}</ul>`);
// Alexey18: 22
// // 2 спосіб

// const container = document.getElementById("container");
// const ulEl = document.createElement("ul");

// for (let i = 0; i < technologies.length; i += 1) {
//     const liEl = document.createElement("li");
//     liEl.textContent = technologies[i];
//     ulEl.appendChild(liEl);
// }

// container.appendChild(ulEl);


// //Task: Створити кілька кнопок на основі масива з обєктами використовуючи createElement

const colors = [
    {
        label: "red",
        color: "#FF0000",
    },
    {
        label: "green",
        color: "#00FF00",
    },
    {
        label: "blue",
        color: "#0000FF",
    },
    {
        label: "yellow",
        color: "#FFFF00",
    },
];

const container = document.createElement("div");

for (const button of colors) {
    const buttonEL = document.createElement("button")
    buttonEL.textContent = button.label;
    buttonEL.style.backgroundColor = button.color
    container.appendChild(buttonEL);

}

document.body.appendChild(container)