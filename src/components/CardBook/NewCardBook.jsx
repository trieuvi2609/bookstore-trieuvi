import { selectTypes} from "features/books/booksSlice";
import { addCart } from "features/cart/cartSlice";
import { selectCurrentUser } from "features/session/sessionSlice";
import React from "react";
import { IoMdContacts } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CardBook.scss";

function NewCardBook(props) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const types = useSelector(selectTypes);
  const currentBook = props.book;
  const { b_id, b_hot, b_price, b_nm, b_subcat, b_publisher, b_edition, b_img} = currentBook;
  const typeUsed = types.findIndex((type)=>type.cat_id===b_subcat);
  const typeField = types[typeUsed].cat_nm.toUpperCase();
  const url = "/book/" + b_id;
  return (
  <div className ="relative flex flex-col rounded-lg overflow-hidden shadow-2xl mx-3 my-2">
  <div className = "relative px-4 bg-blueGray-50 py-2 h-80">
      <img className = "w-full" src={b_img} alt = {b_nm}></img>
      <div className = "absolute right-0 top-0 text-white"> {b_hot && <span className="cardbook__top-hot">HOT</span>}</div>
      <div className = "absolute bottom-0 left-0"><span className="cardbook__top-price text-white">
          {Number(b_price).toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </span></div>
  </div>
  <div className = "relative bg-white px-2 py-2 flex flex-col justify-start">
      <h2 className = "text-2xl h-16 truncate px-2"><Link to={url}>{b_nm}</Link></h2>
      <span className = "font-normal px-2">{typeField}</span>
      <div className="flex flex-row justify-between text-sm px-2">
          <div className = "flex flex-row items-center">
          <IoMdContacts />
          <span>{b_publisher}</span>
          </div>
          <span>{b_edition}</span>
      </div>
      <div className = "self-center px-2 pt-2">
        {currentUser.username && (
          <button
            onClick={() => {
              dispatch(addCart(currentBook));
            }}
          >
            Add to cart
          </button>
        )}
      </div>
  </div>
  </div>
    // <div className="cardbook">
    //   <div className="cardbook__top">
    //     <Link to={url} title={b_desc}>
    //       <img src={b_img} alt="" className="cardbook__top-img" />
    //     </Link>
    //     {b_hot && <span className="cardbook__top-hot">HOT</span>}
        // <span className="cardbook__top-price">
        //   {Number(b_price).toLocaleString("it-IT", {
        //     style: "currency",
        //     currency: "VND",
        //   })}
        // </span>
    //   </div>
    //   <div className="cardbook__body">
    //     <h2 className="cardbook__body-title">
    //       <Link to={url}>{b_nm}</Link>
    //     </h2>
    //     <p className="cardbook__body-type">{typeField}</p>
    //   </div>
    //   <div className="cardbook__end">
    //     <span className="cardbook__end-left">
    //       <IoMdContacts /> {b_publisher}
    //     </span>
    //     <span className="cardbook__end-right">{b_edition}</span>
    //   </div>
    //   <div className="cardbook__btn">
    //     {currentUser.username && (
    //       <button
    //         onClick={() => {
    //           dispatch(addCart(currentBook));
    //         }}
    //       >
    //         Add to cart
    //       </button>
    //     )}
    //   </div>
    // </div>
  );
}

export default NewCardBook;