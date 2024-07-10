let ans = "";
let hiddenCalc = "";
const screen = document.querySelector(".screen");
const keyboard = document.querySelector(".keyboard");

keyboard.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className != "keyboard")
    handleKeyboard({ srcElement: e.target });
});

function handleKeyboard({ srcElement }) {
  const { className, textContent, id } = srcElement;
  if (className === "key num") {
    screen.textContent += textContent.toString();
    hiddenCalc += textContent.toString();
  } else if (id === "clear") {
    screen.textContent = hiddenCalc = "";
  } else if (id === "plus") {
    hiddenCalc += "+";
    screen.textContent += textContent;
  } else if (id === "minus") {
    hiddenCalc += "-";
    screen.textContent += textContent;
  } else if (id === "times") {
    hiddenCalc += "*";
    screen.textContent += textContent;
  } else if (id === "divide") {
    hiddenCalc += "/";
    screen.textContent += textContent;
  } else if (screen.textContent && id === "equal") {
    try {
      screen.textContent = hiddenCalc = ans = eval(hiddenCalc);
    } catch {
      screen.textContent = "Error";
      hiddenCalc = "";
    }
  } else if (id === "ans") {
    screen.textContent = hiddenCalc = ans.toString();
  } else if (id === "remove" || id === "arrow") {
    screen.textContent = screen.textContent.slice(0, -1);
    hiddenCalc = hiddenCalc.toString().slice(0, -1);
  }
}
