import { Player } from "./Player.js";
const roll_die_btn = document.querySelector(".roll_die");
const die_roll_height = document.querySelector(".die_roll");
const coin_flip_btn = document.querySelector(".coin_flip");
const outcome = document.querySelector(".outcome");
const ouctome_text = document.querySelector(".outcome p span");
const reset = document.querySelector(".reset");
let root = document.documentElement;

const player = new Player("Matt");
player.createPlayer();
function dieRoll() {
  roll_die_btn.addEventListener("click", e => {
    die_roll_height.classList.toggle("die_roll_height");
    //   setInterval(() => die_roll_height.classList.remove("die_roll_height"), 2000);
    //   const newPlayer = new Player("Matt");
    //   newPlayer.createPlayer();
    //   root.style.setProperty("--grid-rule", "1fr 1fr");
  });
}

function coinFlip() {
  coin_flip_btn.addEventListener("click", () => {
    outcome.classList.toggle("coin_flip_height");
    const rand_flip = Math.random();
    if (outcome.className != "outcome") {
      rand_flip > 0.5
        ? (ouctome_text.innerHTML = "heads")
        : (ouctome_text.innerHTML = "tails");
    } else if (coin_flip_btn.className == "outcome coin_flip_height") {
      setInterval(() => outcome.classList.remove("coin_flip_height"), 2000);
    }
  });
}

function resetLifeTotal() {
  reset.addEventListener("click", () => {
    player.resetLife();
    const player_life_total = document.querySelectorAll(".life_total");
    player_life_total.forEach(i => {
      i.innerHTML = player.player_life_total.innerHTML;
    });
  });
}
body.addEventListener(e => {
  if (e.target != roll_die_btn) {
    die_roll_height.classList.remove("die_roll_height");
  }
});

dieRoll();
coinFlip();
resetLifeTotal();
