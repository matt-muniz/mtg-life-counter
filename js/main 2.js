import { Player } from "./Player.js";
const roll_die_btn = document.querySelector(".roll_die");
const die_roll_height = document.querySelector(".die_roll");
const die_roll_ul = document.querySelector(".die_roll ul");
const coin_flip_btn = document.querySelector(".coin_flip");
const outcome = document.querySelector(".outcome");
const die_outcome = document.querySelector(".die_outcome");
const ouctome_text = document.querySelector(".outcome p span");
const die_outcome_text = document.querySelector(".die_outcome p span");
const reset = document.querySelector(".reset");
const d20 = document.querySelector(".d20");
const d12 = document.querySelector(".d12");
const d6 = document.querySelector(".d6");
const settings_btn = document.querySelector(".settings");
const settings_nav = document.querySelector(".settings_nav");
const player_name = document.querySelector(".player_name input");
const add_player = document.querySelector(".add_player");
const minus_player = document.querySelector(".minus_player");
const set_life_total = document.querySelector(".set_life_total input");
const player_arr = [];

let root = document.documentElement;

const player = new Player("Matt");
player.createPlayer();

function createNewPlayer() {
  add_player.addEventListener("click", () => {
    player_name.value == "" ? players("Player") : players(player_name.value);
  });
}

function players(playerName) {
  const newPlayer = new Player(playerName);
  newPlayer.createPlayer();
  root.style.setProperty("--grid-rule", "1fr 1fr");
  player_arr.push(newPlayer);
  newPlayer.checkForLifeValue(newPlayer);
}

function removePlayer() {
  minus_player.addEventListener("click", () => {
    if (player_arr.length > 0) {
      const last = player_arr.pop();
      const container = document.querySelector(".container");
      const remove_player = document.querySelector(".player");
      container.removeChild(last.player);
    }
    if (player_arr.length == 0) {
      root.style.setProperty("--grid-rule", "1fr");
    }
  });
}

function dieRoll() {
  roll_die_btn.addEventListener("click", e => {
    die_roll_height.classList.toggle("die_roll_height");
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
    }
  });
}

function resetLifeTotal() {
  reset.addEventListener("click", () => {
    reset.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(-45deg)" }],
      { duration: 500, fill: "forwards" }
    );
    reset.animate(
      [{ transform: "rotate(-45deg)" }, { transform: "rotate(0deg)" }],
      { duration: 200, delay: 700, fill: "forwards" }
    );

    player.resetLife();
    const player_life_total = document.querySelectorAll(".life_total span");
    player_life_total.forEach(i => {
      i.innerHTML = player.player_life_total.innerHTML;
    });
  });
}
function settings() {
  settings_btn.addEventListener("click", () => {
    settings_nav.classList.toggle("move_left");
  });
}
window.addEventListener("click", e => {
  if (
    e.target != roll_die_btn &&
    e.target != die_roll_height &&
    e.target != die_roll_ul
  ) {
    die_roll_height.classList.remove("die_roll_height");
  }
  if (e.target != coin_flip_btn) {
    outcome.classList.remove("coin_flip_height");
  }
  if (
    e.target != settings_btn &&
    e.target != document.querySelector(".fa-cog") &&
    e.target != settings_nav &&
    e.target != player_name &&
    e.target != set_life_total
  ) {
    settings_nav.classList.remove("move_left");
  }
  if (e.target == d20) {
    die_outcome.classList.toggle("die_outcome_height");
    const rand_roll = Math.floor(Math.random() * 20);
    die_outcome_text.innerHTML = rand_roll;
  } else if (e.target == d12) {
    die_outcome.classList.toggle("die_outcome_height");
    const rand_roll = Math.floor(Math.random() * 12);
    die_outcome_text.innerHTML = rand_roll;
  } else if (e.target == d6) {
    die_outcome.classList.toggle("die_outcome_height");
    const rand_roll = Math.floor(Math.random() * 6);
    die_outcome_text.innerHTML = rand_roll;
  } else {
    die_outcome.classList.remove("die_outcome_height");
  }
});

createNewPlayer();
removePlayer();
dieRoll();
coinFlip();
resetLifeTotal();
settings();
