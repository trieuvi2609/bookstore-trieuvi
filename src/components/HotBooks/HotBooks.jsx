import { SLIDE_VIEW_4 } from "app/slide";
import { Title } from "components";
import React from "react";
import Slider from "react-slick";
import "./HotBooks.scss";
import NewCardBook from "components/CardBook/NewCardBook";
function HotBooks(props) {
  const books = props.books;
  console.log(books);
  return (
    <section>
      <div className="hotproducts">
        <div className="container">
          <div className="home__header">
            <Title
              title="HOT BOOKS"
              text="Best-seller books in year 2021. Almost people like these books"
            />
          </div>
          <div>
            <Slider {...SLIDE_VIEW_4}>
              {books.map((book) => {
                return (
                  <div key={book.b_id}>
                    <NewCardBook book={book} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotBooks;
