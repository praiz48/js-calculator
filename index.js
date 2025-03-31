const display = document.getElementById("diplay");
let result = 0;
let stuff = "19+2";
result = display.value;
// stuff.length;
function displaying(value) {
  if (display.value === "") {
    if (value === "*" || value === "/") {
      value = "1";
    }
  }
  display.value += value;
  if (display.value.length >= 11) {
    display.style.fontSize = "2rem";
  }
}
function clearing() {
  display.value = "";
  //   display.focus = true;
}

function removing() {
  if (display.value !== "") {
    display.value = display.value.slice(0, -1);
  }
}
function calculating() {
  display.value = eval(display.value);
}
// console.log(eval(stuff));
console.log(stuff[0]);
// stuff = stuff.slice(0, -1);
// console.log(stuff);
// console.log(display.value.length);
// displaying(" hello");
