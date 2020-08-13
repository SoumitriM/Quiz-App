const questions = [
  {
    _id: 1,
    title: "What is my favourite Color?",
    options: [
      { _id: 1, option: "red" },
      { _id: 2, option: "blue" },
      { _id: 3, option: "white" },
    ],
  },
  {
    _id: 2,
    title: "What is my favourite Cuisine?",
    options: [
      { _id: 1, option: "Chinese" },
      { _id: 2, option: "North Indian" },
      { _id: 3, option: "Italian" },
    ],
  },
  {
    _id: 3,
    title: "Who is my first bollywood crush?",
    options: [
      { _id: 1, option: "Hritik Roshan" },
      { _id: 2, option: "ShahRukh" },
      { _id: 3, option: "Ranbir" },
    ],
  },
  {
    _id: 4,
    title: "What is my favourite English Rom Com?",
    options: [
      { _id: 1, option: "Titanic" },
      { _id: 2, option: "Pretty Woman" },
      { _id: 3, option: "Notebook" },
    ],
  },
  {
    _id: 5,
    title: "What is my favourite Hindi Rom Com?",
    options: [
      { _id: 1, option: "Kuch Kuch Hota Hai" },
      { _id: 2, option: "Dilwale Dulhaniya Le Jayenge" },
      { _id: 3, option: "Kal Ho  Na Ho" },
    ],
  },
  {
    _id: 6,
    title: "What is my favourite Ice-Cream Flavour?",
    options: [
      { _id: 1, option: "Strawberry" },
      { _id: 2, option: "Chocolate" },
      { _id: 3, option: "Butterscotch" },
    ],
  },
  {
    _id: 7,
    title: "What is my favourite Tv series genre?",
    options: [
      { _id: 1, option: "Sci-Fi" },
      { _id: 2, option: "Thriller" },
      { _id: 3, option: "Comedy" },
    ],
  },
  {
    _id: 8,
    title:
      "What is one of the common/popular hobbies that you can relate me with?",
    options: [
      { _id: 1, option: "Sketching" },
      { _id: 2, option: "Dancing" },
      { _id: 3, option: "Writing" },
    ],
  },
  {
    _id: 9,
    title: "what are the names of my kittens?",
    options: [
      { _id: 1, option: "Doodle & Model" },
      { _id: 2, option: "Doodle & Poodle" },
      { _id: 3, option: " Model & Poodle" },
    ],
  },
  {
    _id: 10,
    title:
      "If I were to plan a holiday, where would I mostly likely choose to go?",
    options: [
      { _id: 1, option: "Mountains" },
      { _id: 2, option: "Remote Village" },
      { _id: 3, option: "Beaches" },
    ],
  },
];

export function getQustions() {
  return questions;
}

export function getQuestion(id) {
  return questions.find((q) => q._id === id);
}
