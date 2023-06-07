const transformData = (profs) =>
  Object.values(profs).map(({ _id, name, ...rest }) => ({
    value: _id,
    label: name,
    ...rest
  }));

export default transformData;
