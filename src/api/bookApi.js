import axios from "./axios";

const bookApi = {
  getAllBook: async () => {
    // const url = "/api/books";
    const path = "/books";
    let books = [];
    await axios
      .get(path)
      .then((res) => {
        books = res.data.book_list;
      })
      .catch((error) => {
        //   handle error follow messages
        console.log(error);
      });
    return books;
  },
};

export default bookApi;
