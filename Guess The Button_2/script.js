function createButtons() {
  document.getElementById("buttons_And_message").innerHTML = " ";
  let number = document.getElementById("numberReceived").value;
  let winningButton = Math.floor(Math.random() * number) + 1;
  for (let i = 1; i <= number; ++i) {
    let button = document.createElement("button");
    Object.assign(button, {
      id: i,
      textContent: ":)",
      className: "button-class",
      onclick: () => findOut(i, winningButton),
    });
    document.getElementById("buttons_And_message").appendChild(button);
  }
}

function restart() {
  document.getElementById("buttons_And_message").innerHTML = " ";
  document.getElementById("numberReceived").value = "";
}

function findOut(selectedButton, winningButton) {
  if (selectedButton == winningButton) {
    document.getElementById("buttons_And_message").innerHTML =
      "You guessed it!";
  } else {
    document.getElementById("buttons_And_message").innerHTML =
      "You didn't guess it!";
  }
}
