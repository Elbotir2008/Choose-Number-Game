let input = document.getElementById("input");
let randomNumbers = Math.floor(Math.random() * 10) + 1;
let heartCount = 0;
localStorage.setItem("randomNumbers", randomNumbers);
function handleSubmit() {
  if (input.value == randomNumbers) {
    if (alert("You Find Random Number, You Win!")) {
      location.reload();
    }
  } else if (input.value == "") {
    alert("You have to write any number from 1 to 20");
  } else {
    heartCount++;
    input.value = "";
    alert(`You did not find the given number, try again.`);
  }

  if (heartCount >= 5) {
    if (alert("Your heart is done, Repait Game!")) {
      location.reload();
    } else {
      location.reload();
    }
  }
}
