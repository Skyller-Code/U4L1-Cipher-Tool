/*
const text = document.getElementById("fname").value;
console.log(text);
*/


const subBut = document.getElementById("submit-btn");
subBut.addEventListener("click", function(){
    const input = document.getElementById("name");
    console.log(input.value);
});


/*
// 1. Select the elements
const inputEl = document.getElementById("name");
const buttonEl = document.getElementById("submit-btn");
const outputEl = document.getElementById("output");

// 2. Add an event listener to the button
buttonEl.addEventListener("click", function() {
  // 3. Access the .value property and use it
  const inputValue = inputEl.value;
  outputEl.textContent = inputValue;
  console.log("Input value:", inputValue);
});
*/