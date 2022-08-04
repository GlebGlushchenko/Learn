const input = document.querySelector("#input");
const input2 = document.querySelector("#input2");
const btn2 = document.querySelector("#btn");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

const setLocalStorage = () =>(document.body.style.backgroundColor = localStorage.getItem("bgcolor"));


const backgroundColor = {
  set bg(value) {
    localStorage.setItem("bgcolor", value);
    document.body.style.backgroundColor = value;
  },
};


const setColors = () => {
    const li = document.querySelectorAll(".item");
  
    li.forEach((i) => {
      i.addEventListener("click", () => {
        backgroundColor.bg = i.innerHTML;
      });
    });
  };

const changeColor = () => {
  backgroundColor.bg = input.value;
  input.value = "";
};

btn.addEventListener("click", changeColor);


function setColor(color) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(color));
  li.classList.add("item");
  li.style.backgroundColor = color;
  ul.appendChild(li);
}



const setLi = (...color) => {
  for (let i = 0; i < color.length; i++) {
    setColor(color[i]);
  }
  setColors();
};


const saveColor = () => {
  const value = input2.value;
  if (value) {
    setLi(value);
    setColors()
    input2.value = "";
  }
};

btn2.addEventListener("click", saveColor);


setLi('#f7d368','#68f7e9')

setLocalStorage();

setColors()
