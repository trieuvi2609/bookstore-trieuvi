import { selectTypes } from 'features/books/booksSlice'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './SearchBar.scss'

function SearchBar(props) {
  const [searchString, setSearchString] = useState('')
  const [typeSearch, setTypeSearch] = useState([])
  const [priceSearch, setPriceSearch] = useState([])
  const types = useSelector(selectTypes)
  const price = [0, 100, 200, 300, 400]
  function handleSearchString() {
    props.handleSearchString(searchString)
  }
  function countPrice(price) {
    const pr1 = (price * 1000).toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND'
    })
    const pr2 = ((price + 99) * 1000).toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND'
    })
    return `${pr1} - ${pr2}`
  }
  function handleClickPrice(price) {
    if (priceSearch.length === 0) {
      const newPrices = [...priceSearch, price]
      setPriceSearch(newPrices)
      props.handleClickPrice(newPrices)
    }
  }
  function handleClickType(type) {
    if (typeSearch.length === 0) {
      const newTypes = [...typeSearch, type]
      setTypeSearch(newTypes)
      props.handleClickType(newTypes)
    }
  }

  function handleRemoveType(type) {
    const newTypes = typeSearch.filter(typ => typ.cat_id !== type.cat_id)
    setTypeSearch([...newTypes])
    props.handleClickType(typeSearch)
  }

  function handleLinkClick(str) {
    setSearchString(str)
    props.handleSearchString(str)
  }

  function handleClear() {
    props.handleClear()
    setTypeSearch([])
    setPriceSearch([])
    setSearchString('')
  }

  const popularSearch = ['Programming', 'Debugging', 'Physics', 'Computer', 'Beginner', 'Server', 'History']

  return (
    <section>
      <div className="searchbar">
        <div className="container">
          <div className="searchbar__search">
            <input
              type="text"
              placeholder="...."
              onChange={e => setSearchString(e.target.value)}
              className="searchbar__search-input"
            />
            <button className="searchbar__search-btn" onClick={handleSearchString}>
              Search
            </button>
          </div>
          <div className="searchbar__links">
            {popularSearch.map((linkItem, index) => (
              <span key={index} onClick={() => handleLinkClick(linkItem)}>
                {' '}
                {linkItem},
              </span>
            ))}
            .....
          </div>
          <div className="searchbar__types">
            {types.map(type => (
              <button key={type.cat_id} onClick={() => handleClickType(type)}>
                {type.cat_nm}
              </button>
            ))}
          </div>
          <div className="searchbar__types">
            {price.map((item, idx) => (
              <button key={idx} onClick={() => handleClickPrice(item)}>
                {countPrice(item)}
              </button>
            ))}
          </div>
          <hr />
          <div className="currentsearch">
            <div className="currentsearch__title">
              <h5>Result searching for:</h5>
              <Button variant="outline-info" onClick={() => handleClear()}>
                Clear
              </Button>
            </div>

            <div className="currentsearch__links">{searchString}</div>
            <div className="currentsearch__types">
              {typeSearch.map(type => (
                <button key={type.cat_id} onClick={() => handleRemoveType(type)}>
                  {type.cat_nm}
                </button>
              ))}
              {priceSearch.map((item, idx) => (
                <button key={idx}>{countPrice(item)}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchBar
