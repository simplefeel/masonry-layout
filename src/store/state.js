const colorList = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#8e44ad",
  "#e67e22",
  "#2c3e50"
];

const state = {
  cardList: random()
};

function random() {
  let array = [],
    num = 10;
  for (let i = 0; i < num; i++) {
    array.push({
      w: 170,
      h: Math.floor(Math.random() * 200 + 100),
      b: colorList[Math.floor(Math.random() * 5)]
    });
  }
  return array;
}

export default state;
