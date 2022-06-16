import apiClient from "./client";

const getAll = async () => {
  try {
    const response = await apiClient.get("/books");

    if (response.data.success) {
      return response.data.books;
    }
  } catch (error) {
    console.log("Error while getting all books.", error.message);
    return [];
  }
};

const getSingle = async (id) => {
  try {
    const response = await apiClient.get(`/books/single/${id}`);

    if (response.data.success) {
      return response.data.books;
    }
  } catch (error) {
    console.log("error while getting single book", error);
  }
};

const getByCategory = async (category, qty) => {
  const endpoint = qty ? `/books/${category}/${qty}` : `/books/${category}`;

  try {
    const response = await apiClient.get(endpoint);

    if (response.data.success) {
      return response.data.books;
    }
  } catch (error) {
    console.log("Error while getting categories books.", error.message);
    return [];
  }
};

const searchPost = async (query) => {
  if (!query) return {};
  try {
    const response = await apiClient.post(`/books/search/${query}`);
    return response.data;
  } catch (error) {
    console.log("Error while searching - searchPost booksAPi", error);
  }
};

export default {
  getAll,
  getByCategory,
  getSingle,
  searchPost,
};
