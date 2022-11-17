import { selectTypes } from 'features/books/booksSlice'
import { addCart } from 'features/cart/cartSlice'
import { selectCurrentUser } from 'features/session/sessionSlice'
import React from 'react'
import { Button } from 'react-bootstrap'
import { IoMdContacts } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './CardBook.scss'

function CardBook({book}) {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const types = useSelector(selectTypes)
  const currentBook = book

  const { b_id, b_hot, b_price, b_nm, b_subcat, b_publisher, b_edition, b_img, b_desc } = currentBook
  const typeUsed = types.findIndex(type => type.cat_id === b_subcat)
  const typeField = types[typeUsed]?.cat_nm.toUpperCase()

  const url = '/book/' + b_id

  return (
    <div className="cardbook">
      <div className="cardbook__top">
        <Link to={url} title={b_desc}>
          <img src={b_img} alt="" className="cardbook__top-img" />
        </Link>
        {b_hot && <span className="cardbook__top-hot">BEST SELLER</span>}
        <span className="cardbook__top-price">
          {Number(b_price).toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND'
          })}
        </span>
      </div>
      <div className="cardbook__body">
        <h2 className="cardbook__body-title">
          <Link to={url}>{b_nm}</Link>
        </h2>
        <p className="cardbook__body-type">{typeField}</p>
        <div className="cardbook__btn">
          {currentUser.username && (
            <Button
              variant="outline-warning"
              onClick={() => {
                dispatch(addCart(currentBook))
              }}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
      <hr />
      <div className="cardbook__end">
        <span className="cardbook__end-left">
          <IoMdContacts /> {b_publisher}
        </span>
        <span className="cardbook__end-right">{b_edition}</span>
      </div>
    </div>
  )
}

export default CardBook
