export const undoTransformQuals = (profs) =>
  Object.values(profs).map(({ value, label, ...rest }) => ({
    _id: value,
    name: label,
    ...rest
  }));

export const undoTransformProfs = (prof) => ({
  _id: prof.value,
  name: prof.label
});
