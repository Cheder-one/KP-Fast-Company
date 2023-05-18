const convertFormatData = (obj, id = "_id", name = "name") => {
  return Object.values(obj).map((elem) => {
    const { [id]: itemId, [name]: itemName, ...rest } = elem;
    return {
      value: itemId,
      label: itemName,
      ...rest
    };
  });
};

export default convertFormatData;
