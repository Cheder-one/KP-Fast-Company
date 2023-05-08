export const qualities = {
  tedious: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "Нудила",
    color: "primary"
  },
  strange: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "Странный",
    color: "warning"
  },
  humorist: {
    _id: "67rdca3eeb7f6fgeed4711012",
    name: "Юморист",
    color: "success"
  },
  difficile: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "Несговорчивый",
    color: "danger"
  },
  handsome: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Красавчик",
    color: "info"
  },
  uncertain: {
    _id: "67rdca3eeb7f6fgeed471103",
    name: "Робкий",
    color: "dark"
  }
};

const fetchAll = () =>
  new Promise((resolve) => {
    setTimeout(function () {
      resolve(qualities);
    }, 500);
  });

export default {
  fetchAll
};
