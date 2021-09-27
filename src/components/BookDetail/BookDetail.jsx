import { selectBooks } from "features/books/booksSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "./BookDetail.scss";
import { MdStars } from "react-icons/md";
import { addCart } from "features/cart/cartSlice";
import { selectCurrentUser } from "features/session/sessionSlice";
import { Comment } from "components";
import { selectTypes } from "features/books/booksSlice";
function BookDetail(props) {
  const books = useSelector(selectBooks);
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentBook = books.find((book) => book.b_id === id);
  const currentUser = useSelector(selectCurrentUser);
  const types = useSelector(selectTypes);
  const [visible, setVisible] = useState(2);

  const showMore = () => {
    setVisible((oldValue) => oldValue + 2);
  };

  const test_array_comment = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(currentBook);
  const { b_publisher, b_price, b_nm, b_subcat, b_img, b_desc, b_edition } =
    currentBook;
    const typeUsed = types.findIndex((type)=>type.cat_id===b_subcat);
  const typeField = types[typeUsed].cat_nm.toUpperCase();
  return (
    <div className="bg-bookdetail">
      <div className="container">
        <div className="bookdetail">
          <div className="bookdetail__banner">
            <img src={b_img} alt="" className="bookdetail__banner-img" />
            <div className="bookdetail__banner-title">
              <div className="bookdetail__banner-title-name">
                <h1>{b_nm}</h1>
              </div>
              <div className="bookdetail__banner-title-star">
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars />
                <MdStars />
              </div>
              <div className="bookdetail__banner-title-author">
                Author: {b_publisher}
              </div>
              <div className="bookdetail__banner-title-price">
                Price: {b_price}
              </div>
              <div className="bookdetail__banner-title-type">
                Book category: {typeField}
              </div>
              <div className="bookdetail__banner-title-type">
                Publishing year: {b_edition}
              </div>
              {currentUser.username && (
                <div className="bookdetail__banner-title-btn">
                  <button
                    onClick={() => {
                      dispatch(addCart(currentBook));
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          </div>
          <hr />
          <div className="bookdetail__body">
            <h4 className="bookdetail__body-title">Description:</h4>
            <div className="bookdetail__body-content">{b_desc}</div>
          </div>
          <hr />
          <div className="bookdetail__comment">
            <div className="bookdetail__comment-title">
              <h4>Comments</h4>
              <button>Add new +</button>
            </div>
            <div className="bookdetail__comment-list">
              {test_array_comment.slice(0, visible).map((idx) => {
                return (
                  <div key = {idx}>
                    <Comment />
                    <hr />
                  </div>
                );
              })}
            </div>
            {visible !== test_array_comment.length && (
              <div className="bookdetail__comment-morebtn">
                <button onClick={showMore}>Show more</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
