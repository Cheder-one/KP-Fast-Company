export function paginate(items, curntPageNum, pageSize) {
  const startIndex = (curntPageNum - 1) * pageSize;
  return [...items].splice(startIndex, pageSize);
}
