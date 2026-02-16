import { BASE_URL } from "./baseurl";

const fetchAllBooks = async () => {
  const res = await fetch(`${BASE_URL}/api/books`);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();
  return data; 
};

export default fetchAllBooks;
