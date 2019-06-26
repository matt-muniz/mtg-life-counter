export class Player {
  constructor(name) {
    this.name = name;
    this.life = 20;
    this.life_total = this.life;
    this.player = document.createElement('section');
    this.player.setAttribute('class', 'player');
    this.player_life_total = document.createElement('div');
    this.spanEle = document.createElement('span');
    this.plus_btn1 = document.createElement('button');
    this.minus_btn1 = document.createElement('button');
    this.plus_btn5 = document.createElement('button');
    this.minus_btn5 = document.createElement('button');
    this.container = document.querySelector('.container');
  }
  createPlayer() {
    this.playerName();
    this.topBtns();
    this.lifeTotal();
    this.bottomBtns();
    this.updateLife();
    this.updateNewLife();
    // this.resetLife();
    this.container.appendChild(this.player);
  }
  playerName() {
    const player_name = document.createElement('div');
    player_name.setAttribute('class', 'player_name');
    player_name.innerHTML = this.name;
    this.player.appendChild(player_name);
  }
  topBtns() {
    const top_btns = document.createElement('div');
    const plus = document.createElement('div');
    const minus = document.createElement('div');
    this.plus_btn1.innerHTML = '+1';
    this.minus_btn1.innerHTML = '-1';
    top_btns.setAttribute('class', 'top_btns');
    plus.setAttribute('class', 'plus1');
    minus.setAttribute('class', 'minus1');
    plus.appendChild(this.plus_btn1);
    minus.appendChild(this.minus_btn1);
    top_btns.appendChild(plus);
    top_btns.appendChild(minus);
    this.player.appendChild(top_btns);
  }
  lifeTotal() {
    this.player_life_total.setAttribute('class', 'life_total');
    this.spanEle.innerHTML = this.life_total;
    this.player_life_total.appendChild(this.spanEle);
    this.player.appendChild(this.player_life_total);
  }
  bottomBtns() {
    const bottom_btns = document.createElement('div');
    const plus = document.createElement('div');
    const minus = document.createElement('div');
    this.plus_btn5.innerHTML = '+5';
    this.minus_btn5.innerHTML = '-5';
    bottom_btns.setAttribute('class', 'bottom_btns');
    plus.setAttribute('class', 'plus5');
    minus.setAttribute('class', 'minus5');
    plus.appendChild(this.plus_btn5);
    minus.appendChild(this.minus_btn5);
    bottom_btns.appendChild(plus);
    bottom_btns.appendChild(minus);
    this.player.appendChild(bottom_btns);
  }

  updateLife() {
    this.plus_btn1.addEventListener('click', () => {
      this.life_total += 1;
      this.spanEle.innerHTML = this.life_total;
      this.animateLife();
    });
    this.plus_btn5.addEventListener('click', () => {
      this.life_total += 5;
      this.spanEle.innerHTML = this.life_total;
      this.animateLife();
    });
    this.minus_btn1.addEventListener('click', () => {
      this.life_total -= 1;
      this.spanEle.innerHTML = this.life_total;
      this.animateLife();
    });
    this.minus_btn5.addEventListener('click', () => {
      this.life_total -= 5;
      this.spanEle.innerHTML = this.life_total;
      this.animateLife();
    });
  }
  updateNewLife() {
    const submit_life = document.querySelector('.submit_life');
    submit_life.addEventListener('click', () => {
      this.checkForLifeValue(this);

      const player_life_total = document.querySelectorAll('.life_total span');
      player_life_total.forEach(i => {
        i.innerHTML = this.spanEle.innerHTML;
      });
    });
  }
  checkForLifeValue(obj) {
    const set_life_total = document.querySelector('.set_life_total input');

    if (set_life_total.value == '') {
      obj.life = 20;
      obj.life_total = obj.life;
      obj.spanEle.innerHTML = obj.life_total;
    } else {
      obj.life = parseInt(set_life_total.value);
      obj.life_total = obj.life;
      obj.spanEle.innerHTML = obj.life_total;
    }
  }
  animateLife() {
    this.spanEle.animate([{ opacity: '0.0' }, { opacity: '1.0' }], { duration: 1500, fill: 'forwards' });
  }

  resetLife() {
    this.life_total = this.life;
    this.spanEle.innerHTML = this.life;
  }
}
