import instance from "api/axios";
import { AboutUs, Banner, HotBooks, TypesBook } from "components";
import { selectBooks,setBooks } from "features/books/booksSlice";
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
function HomePage(props) {
  const books = useSelector(selectBooks);
  const hotbook = books.filter((book) => book.hot === true);
  useEffect(()=>{
    const getBooks = async ()=>{
    const bookGetResp = await instance.get('/books');
    const bookGet = bookGetResp.data;
    console.log(bookGet.book_list);
  };
  getBooks();
},[])
  return (
    <main>
      <Banner />
      <HotBooks books={hotbook} />
      <TypesBook />
      <AboutUs />
    </main>
  );
}

export default HomePage;
