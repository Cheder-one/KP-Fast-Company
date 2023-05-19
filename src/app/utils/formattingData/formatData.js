const formatData = (data, id = "_id", name = "name") => {
  const shellIsExist = JSON.stringify(data).slice(1, -1).match(/\{|\}/g);
  if (!shellIsExist) {
    data = [data];
  }
  const result = Object.values(data).map(
    ({ [id]: itemId, [name]: itemName, ...rest }) => ({
      value: itemId,
      label: itemName,
      ...rest
    })
  );
  return result.length > 1 ? result : result[0];
};

export default formatData;
