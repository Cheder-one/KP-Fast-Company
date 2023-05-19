const initialFormatData = (obj, id = "value", name = "label") => {
  return Object.values(obj).map((elem) => {
    const { [id]: itemId, [name]: itemName, ...rest } = elem;
    return {
      _id: itemId,
      name: itemName,
      ...rest
    };
  });
};

export default initialFormatData;
