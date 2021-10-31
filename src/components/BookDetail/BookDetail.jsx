import { selectBooks } from 'features/books/booksSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import './BookDetail.scss'
import { MdStars } from 'react-icons/md'
import { addCart } from 'features/cart/cartSlice'
import { selectCurrentUser } from 'features/session/sessionSlice'
import { selectTypes } from 'features/books/booksSlice'
import instance from 'api/axios'

function BookDetail(props) {
  const [hidden, setHidden] = useState('hidden')
  const [comment, setComment] = useState('')
  const books = useSelector(selectBooks)
  const { id } = useParams()
  const dispatch = useDispatch()
  const currentBook = books.find(book => book.b_id === id)
  const currentUser = useSelector(selectCurrentUser)
  const types = useSelector(selectTypes)
  const [visible, setVisible] = useState(2)
  const [listComment, setListComment] = useState([])
  const [getList, setGetList] = useState([])
  const listCmt = getList.length === 0 ? currentBook.comment_list : getList
  const showMore = () => {
    setVisible(oldValue => oldValue + 2)
  }
  const handleComment = ({ target }) => {
    setComment(target.value)
  }
  const addComment = async comment => {
    const data = {
      userId: currentUser.id,
      comment: comment,
      bookId: id,
      fullName: currentUser.fullName
    }
    await instance.post('/comment/add', data)
  }
  useEffect(() => {
    const getComment = async () => {
      const resp = await instance.get(`/books/${id}`)
      setGetList(resp.data.book_details.list_comment)
    }
    getComment()
  }, [id])
  const { b_publisher, b_price, b_nm, b_subcat, b_img, b_desc, b_edition } = currentBook
  const typeUsed = types.findIndex(type => type.cat_id === b_subcat)
  const typeField = types[typeUsed].cat_nm.toUpperCase()
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
              <div className="bookdetail__banner-title-author">Author: {b_publisher}</div>
              <div className="bookdetail__banner-title-price">
                Price:{' '}
                {Number(b_price).toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND'
                })}
              </div>
              <div className="bookdetail__banner-title-type">Book category: {typeField}</div>
              <div className="bookdetail__banner-title-type">Publishing year: {b_edition}</div>
              {currentUser.username && (
                <div className="bookdetail__banner-title-btn">
                  <button
                    onClick={() => {
                      dispatch(addCart(currentBook))
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
              <button onClick={() => setHidden('')}>Add new +</button>
            </div>
            <div className="bookdetail__comment-list">
              <div className={'w-full bg-white flex ' + hidden}>
                <img
                  alt="..."
                  src={require('assets/images/maleAvatar.png').default}
                  style={{
                    width: '3.75rem',
                    height: '3.75rem'
                  }}
                />
                <div style={{ padding: '0 15px' }} className="w-full">
                  <p
                    style={{
                      fontSize: 'large',
                      fontWeight: 500
                    }}
                  >
                    {currentUser.fullName}
                  </p>
                  <textarea
                    className="w-full px-2 border rounded"
                    style={{
                      height: '5rem'
                    }}
                    spellCheck={false}
                    value={comment}
                    onChange={handleComment}
                    placeholder="What you think about this book"
                  />
                  <button
                    style={{
                      marginTop: '0.5rem',
                      marginBottom: '1rem'
                    }}
                    onClick={() => {
                      if (comment) {
                        addComment(comment)
                        // getComment()
                        setListComment(prev => [comment, ...prev])
                      }
                      setComment('')
                      setHidden('hidden')
                    }}
                  >
                    Submit Comment
                  </button>
                </div>
              </div>
              {listComment.map((item, idx) => (
                <div className="w-full bg-white flex border-b-2 py-2" key={idx}>
                  <img
                    alt="..."
                    src={require('assets/images/maleAvatar.png').default}
                    style={{
                      width: '3.75rem',
                      height: '3.75rem'
                    }}
                  />
                  <div style={{ padding: '0 15px' }} className="w-full">
                    <p
                      style={{
                        fontSize: 'large',
                        fontWeight: 500,
                        margin: '0px'
                      }}
                    >
                      {currentUser.fullName}
                    </p>
                    <p className="-mt-4" style={{ color: 'grey' }}>
                      {item}
                    </p>
                  </div>
                  <hr />
                </div>
              ))}
              {listCmt.slice(0, visible).map((item, idx) => {
                return (
                  <div className="w-full bg-white flex border-b-2 py-2" key={idx}>
                    <img
                      alt="..."
                      src={require('assets/images/maleAvatar.png').default}
                      style={{
                        width: '3.75rem',
                        height: '3.75rem'
                      }}
                    />
                    <div style={{ padding: '0 15px' }} className="w-full">
                      <p
                        style={{
                          fontSize: 'large',
                          fontWeight: 500,
                          margin: '0px'
                        }}
                      >
                        {item.fullName}
                      </p>
                      <p className="-mt-4" style={{ color: 'grey' }}>
                        {item.comment}
                      </p>
                    </div>
                    <hr />
                  </div>
                )
              })}
            </div>
            {visible !== listCmt.length && listCmt.length > 0 && (
              <div className="bookdetail__comment-morebtn">
                <button onClick={showMore}>Show more</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
