let btn = document.getElementsByClassName("ttt");

let playerLabel = document.getElementById("currPlayer");
let hint = document.getElementById("hint");

let player1 = "X",
  player2 = "O",
  currPlayer = true; //True equals player1, false equals player 2

function togglePlayer() {
  currPlayer = !currPlayer;

  playerLabel.innerText = currPlayer ? "Player 1 (X)" : "Player 2 (O)";
}

function getPlayerMark() {
  return currPlayer ? player1 : player2;
}

function setHint(msg, time = 5000) {
  hint.innerText = msg;
  setTimeout(() => (hint.innerText = ""), time);
}

function check4Win() {
  let currMark = getPlayerMark();

  console.log(currMark);

  //Horizontal
  for (let i = 0; i < btn.length / 3; i += 3) {
    if (btn[i].innerText == currMark)
      if (btn[i + 1].innerText == currMark)
        if (btn[i + 2].innerText == currMark) return true;
  }

  //Vertical
  for (let i = 0; i < 3; i++) {
    if (btn[i].innerText == currMark)
      if (btn[i + 3].innerText == currMark)
        if (btn[i + 6].innerText == currMark) return true;
  }

  //Diagonal (l to r)
  if (btn[0].innerHTML == currMark)
    if (btn[4].innerHTML == currMark)
      if (btn[8].innerHTML == currMark) return true;

  //Diagonal (r to l)
  if (btn[2].innerHTML == currMark)
    if (btn[4].innerHTML == currMark)
      if (btn[6].innerHTML == currMark) return true;
}

function winAnim() {
  for (b of btn) {
    b.innerHTML == "I";
  }

  setHint(getPlayerMark() + " WINS!!!", 10000);
}

function checkBtn(event) {
  event.preventDefault;
  if (event.target.innerText == "") {
    console.log("HERE");

    event.target.innerText = getPlayerMark();
    check4Win() ? winAnim() : togglePlayer();
  } else setHint("You already picked this field!");
}

function init() {
  for (b of btn) {
    b.addEventListener("click", checkBtn);
  }
}
init();
