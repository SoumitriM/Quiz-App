const answers = [
  { _id: 1, oId: "2" },
  { _id: 2, oId: "1" },
  { _id: 3, oId: "2" },
  { _id: 4, oId: "2" },
  { _id: 5, oId: "1" },
  { _id: 6, oId: "2" },
  { _id: 7, oId: "3" },
  { _id: 8, oId: "1" },
  { _id: 9, oId: "1" },
  { _id: 10, oId: "3" },
];

export function getAnswer(id) {
  return answers.find((q) => q._id === id);
}
