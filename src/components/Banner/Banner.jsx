import React, { useState } from 'react'
import { BANNER_HOME } from 'utils/static'
import './Banner.scss'
import { useSelector } from 'react-redux'
import { selectBooks } from 'features/books/booksSlice'
import { useHistory } from 'react-router'
function Banner(props) {
  const history = useHistory()
  const handleSearch = () => {
    const objBook = books.find(item => item.b_nm === choose)
    history.push(`/book/${objBook.b_id}`)
  }
  const [choose, setChoose] = useState('')
  const books = useSelector(selectBooks)
  const onChange = ({ target }) => {
    setChoose(target.value)
  }
  return (
    <section>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${BANNER_HOME.img})`
        }}
      >
        <h3 className="banner__header">{BANNER_HOME.title}</h3>
        <p className="banner__text">{BANNER_HOME.text}</p>
        <div className="banner__search">
          <h5 className="">{BANNER_HOME.searchTitle}</h5>
          <input
            type="text"
            className="banner__search-input"
            placeholder={BANNER_HOME.searchInput}
            list="browsers"
            value={choose}
            onChange={onChange}
          />
          <datalist id="browsers">
            {books.map(item => (
              <option key={item.b_id} value={item.b_nm} />
            ))}
          </datalist>{' '}
          <button className="banner__search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
