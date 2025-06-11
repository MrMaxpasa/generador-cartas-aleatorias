import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const suits = [
  { symbol: '♥', color: 'red' },
  { symbol: '♦', color: 'red' },
  { symbol: '♣', color: 'black' },
  { symbol: '♠', color: 'black' }
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateCard() {
  const value = getRandomItem(values);
  const suit = getRandomItem(suits);
  const elements = ['value-top', 'value-bottom', 'suit-top', 'suit-bottom', 'value-center'];

  elements.forEach(id => {
    const el = document.getElementById(id);
      if (id.includes('value')) {
        el.textContent = value;
      } else {
        el.textContent = suit.symbol;
      }
      el.className = suit.color === 'red' ? `${id} red` : id;
  });
}
window.onload = generateCard;