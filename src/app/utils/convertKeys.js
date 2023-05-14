export const convertProfKeys = (profs) =>
  Object.keys(profs).map((profName) => ({
    label: profs[profName].name,
    value: profs[profName]._id
  }));

export const convertQualKeys = (quals) =>
  Object.keys(quals).map((qualName) => ({
    value: quals[qualName]._id,
    label: quals[qualName].name,
    color: quals[qualName].color
  }));
