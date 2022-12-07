import { SLIDE_VIEW_4 } from 'utils/slide'
import { CardBook, Title } from 'components'
import React from 'react'
import Slider from 'react-slick'
import './HotBooks.scss'
function HotBooks(props) {
  const books = props.books
  console.log(books)
  return (
    <section>
      <div className="hotproducts">
        <div className="container">
            <div className='title'>
              <p>Best Seller</p>
            </div>
            <div>
            <Slider {...SLIDE_VIEW_4}>
              {books.map(book => {
                console.log(book)
                return (
                  <div key={book.b_id}>
                    <CardBook book={book} />
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HotBooks
