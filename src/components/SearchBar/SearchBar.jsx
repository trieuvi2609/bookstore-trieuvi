import { selectTypes } from 'features/books/booksSlice'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './SearchBar.scss'

function SearchBar(props) {
  const [searchString, setSearchString] = useState('')
  const [typeSearch, setTypeSearch] = useState([])
  const types = useSelector(selectTypes)

  function handleSearchString() {
    props.handleSearchString(searchString)
  }

  function handleClickType(type) {
    const newTypes = [...typeSearch, type]
    setTypeSearch(newTypes)
    props.handleClickType(newTypes)
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchBar
