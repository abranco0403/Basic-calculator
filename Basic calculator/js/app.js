let actions = document.querySelectorAll(".actions");
let numbers = document.querySelectorAll(".numbers");

// NUMBERS AND DECIMAL POINT
for(let number of numbers) {
  number.addEventListener("click", ()=> {
    let btnValue = parseFloat(number.innerText);
    const screen = document.querySelector(".screen");
    screen.value += btnValue;
  })
}

// MATH OPERATIONS AND EQUAL SIGN
for(let action of actions) {
  action.addEventListener("click", ()=> {
    let btnValue = action.innerText;
    const screen = document.querySelector(".screen");
    screen.value += btnValue;
    if(btnValue === "AC") {
      screen.value = "";
    }
    if(btnValue === "=") {
      let screenValue =  document.querySelector(".screen").value;
      let calc = screenValue.slice(0,-1);
      screen.value = eval(calc.toString());
    }
  })
}