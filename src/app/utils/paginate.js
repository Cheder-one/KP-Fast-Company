export function getPageItems(items, currentPage, itemsPerPage) {
  const firstIndex = itemsPerPage * (currentPage - 1);
  return [...items].splice(firstIndex, itemsPerPage);
}
