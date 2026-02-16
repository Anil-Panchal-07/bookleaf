import { BASE_URL } from "./baseurl";

const fetchBookById = async (id) => {
  const res = await fetch(`${BASE_URL}/api/books`);
  const data = await res.json();

  //if book id matches with id which is coming by clicking on any book then return that book

  const book = data.find((b) => b.id === Number(id));
  return book;
};

export default fetchBookById;
