import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = [{
    symbol: '♥',
    color: 'red'
  },
  {
    symbol: '♦',
    color: 'red'
  },
  {
    symbol: '♣',
    color: 'black'
  },
  {
    symbol: '♠',
    color: 'black'
  }
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Mapa de posiciones según el count (número de pips)
const pipMap = {
  1: [5],
  2: [2, 8],
  3: [2, 5, 8],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 3, 4, 6, 7, 9],
  7: [1, 3, 4, 5, 6, 7, 9],
  8: [1, 2, 3, 4, 6, 7, 8, 9],
  9: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  10: [1, 2, 3, 4, 6, 7, 8, 9, 5]
};

function generateCard() {
  const value = getRandomItem(values);
  const suit = getRandomItem(suits);

  // Determinar count
  let count;
  if (value === 'A') {
    count = 1;
  } else if (['J', 'Q', 'K'].includes(value)) {
    count = 1;
  } else {
    count = parseInt(value, 10);
  }

  // Esquinas (top/bottom valor y palo)
  ['value-top', 'value-bottom'].forEach(id => {
    const el = document.getElementById(id);
    el.textContent = value;
    el.className = suit.color === 'red' ? `${id} red` : id;
  });
  ['suit-top', 'suit-bottom'].forEach(id => {
    const el = document.getElementById(id);
    el.textContent = suit.symbol;
    el.className = suit.color === 'red' ? `${id} red` : id;
  });

  // Centro: limpio y genero spans individuales
  const center = document.getElementById('value-center');
  center.innerHTML = '';
  const positions = pipMap[count] || [5];
  positions.forEach(pos => {
    const span = document.createElement('span');
    span.classList.add('pip', `position-${pos}`);
    span.textContent = suit.symbol;
    if (suit.color === 'red') span.classList.add('red');
    center.appendChild(span);
  });
}

window.onload = generateCard;