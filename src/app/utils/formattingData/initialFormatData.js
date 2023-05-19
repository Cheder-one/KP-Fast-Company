const initialFormatData = (data, id = "value", name = "label") => {
  const shellIsExist = JSON.stringify(data).slice(1, -1).match(/\{|\}/g);
  if (!shellIsExist) {
    data = [data];
  }
  const result = Object.values(data).map(
    ({ [id]: itemId, [name]: itemName, ...rest }) => ({
      _id: itemId,
      name: itemName,
      ...rest
    })
  );
  return result.length > 1 ? result : result[0];
};

export default initialFormatData;
