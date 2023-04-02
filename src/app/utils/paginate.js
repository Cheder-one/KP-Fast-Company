export function paginate(users, currentPage, itemsPerPage) {
  const firstIndex = itemsPerPage * (currentPage - 1);
  return [...users].splice(firstIndex, itemsPerPage);
}
