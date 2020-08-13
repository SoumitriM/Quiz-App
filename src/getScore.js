var scores = [
  { _id: 1, point: 0 },
  { _id: 2, point: 0 },
  { _id: 3, point: 0 },
  { _id: 4, point: 0 },
  { _id: 5, point: 0 },
  { _id: 6, point: 0 },
  { _id: 7, point: 0 },
  { _id: 8, point: 0 },
  { _id: 9, point: 0 },
  { _id: 10, point: 0 },
];

export function saveScore(id, selectedOption, answer) {
  let scoreInDb = scores.find((x) => x._id === id);
  if (parseInt(selectedOption) === parseInt(answer.oId)) {
    scoreInDb.point = 1;
  } else if (selectedOption !== answer.oId) {
    scoreInDb.point = 0;
  }
  return scoreInDb.point;
}

let sc = [1, 2, 3];

export function getScore(score) {
  sc.push("8");
  return sc.length;
}

export function getSc() {
  let len = sc.length;
  return len;
}
