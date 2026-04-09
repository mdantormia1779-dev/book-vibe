const getAllReadlistFromDb = () => {
  const allreadlist = localStorage.getItem("readlist");

  try {
    if (allreadlist) {
      return JSON.parse(allreadlist);
    }
  } catch (error) {
    console.error("Error parsing readlist:", error);
  }

  return [];
};

const addReadlist = (book) => {
  const allbook = getAllReadlistFromDb();

  const isAlreadyExist = allbook.find(
    (bk) => console.log(bk,book)
  );

  if (!isAlreadyExist) {
    allbook.push(book);
    localStorage.setItem("readlist", JSON.stringify(allbook));
  } else {
    console.log("Book already exists in readlist");
  }
};

export { getAllReadlistFromDb, addReadlist };