const UPPER_TABLE = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "W",
  "X",
  "Y",
  "Z",
];
const LOWER_TABLE = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "w",
  "x",
  "y",
  "z",
];

const NUM_TABLE = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const RANDOM_TABLE = [...UPPER_TABLE, ...NUM_TABLE, ...LOWER_TABLE];

const RANDOM_SIZE = RANDOM_TABLE.length;

const UID_SIZE = 25;

// S7l91TGys8jN4wq7ce8zcZIGF

const createUid = () => {
  const uid = [];
  for (let idx = 0; idx < UID_SIZE; idx++) {
    const random = Math.floor(Math.random() * RANDOM_SIZE);
    uid.push(RANDOM_TABLE[random]);
  }
  return uid.join("");
};

module.exports = { createUid };
