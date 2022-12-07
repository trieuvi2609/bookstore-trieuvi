import React, { useState } from 'react'
import { BANNER_HOME } from 'utils/static'
import './BannerSearch.scss'
import { useSelector } from 'react-redux'
import { selectBooks } from 'features/books/booksSlice'
import { useHistory } from 'react-router'
function BannerSearch(props) {
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
        <div className="banner__search">
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
            Find book
          </button>
        </div>
        // <div>213</div>
  )
}

export default BannerSearch;
