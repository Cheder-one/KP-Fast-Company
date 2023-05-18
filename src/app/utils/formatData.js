const formatData = (obj, id = "_id", name = "name") => {
  return Object.values(obj).map((elem) => {
    const { [id]: itemId, [name]: itemName, ...rest } = elem;
    return {
      value: itemId,
      label: itemName,
      ...rest
    };
  });
};

export default formatData;

formatData({
  d: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" }
});
