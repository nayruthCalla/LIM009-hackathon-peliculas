const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === "name" && sortOrder === "a-z") {
    data.sort((a, b) => (a.Title < b.Title ? -1 : 0));
  } else if (sortBy === "name" && sortOrder === "z-a") {
    data.sort((a, b) => (a.Title > b.Title ? -1 : 0));
  }
  return data;
};
window.GlobalPoke = {
  sortData
};
