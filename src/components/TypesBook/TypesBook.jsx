import { SLIDE_VIEW_4 } from 'utils/slide'
import { Title } from 'components'
import { selectTypes } from 'features/books/booksSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import CardTypesBook from '../CardTypesBook/CardTypesBook'
import './TypesBook.scss'

function TypesBook(props) {
  const types = useSelector(selectTypes)

  return (
    <section>
      <div className="typesbook">
        <div className="container">
          <div className="typesbook__header">
            <span className='hot-categories'>Hot Categories</span>
          </div>
          <div>
            <Slider {...SLIDE_VIEW_4}>
              {types.map((type, index) => {
                return (
                  <div key={index}>
                    <CardTypesBook key={type.cat_id} name={type.cat_nm} id={type.cat_id} />
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
export default TypesBook
