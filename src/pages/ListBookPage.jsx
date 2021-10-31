import { CardBook, SearchBar, Title } from 'components'
import { selectBooks } from 'features/books/booksSlice'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function ListBookPage(props) {
  const [visible, setVisible] = useState(8)
  const books = useSelector(selectBooks)
  const [bookShow, setBookShow] = useState([...books])

  const handleSearchString = searchString => {
    let newBooks = []
    if (searchString === '') {
      newBooks = [...books]
    } else {
      newBooks = books.filter(book => {
        const name = book.b_nm.toLowerCase()
        return name.includes(searchString.toLowerCase())
      })
    }
    setBookShow([...newBooks])
  }

  function handleClickType(types) {
    const newBooks = bookShow.filter(book => {
      let check = false
      const n = types.length
      for (let i = 0; i < n; i++) {
        if (types[i].cat_id === book.b_subcat) {
          check = true
          break
        }
      }
      return check
    })
    setBookShow([...newBooks])
  }
  function handleClickPrice(price) {
    const newBooks = bookShow.filter(book => book.b_price >= price[0] * 1000 && book.b_price <= (price[0] + 99) * 1000)
    setBookShow([...newBooks])
  }
  function handleClear() {
    setBookShow([...books])
  }

  const showMore = () => {
    setVisible(oldValue => oldValue + 4)
  }

  return (
    <main className="py-10 bg-blueGray-200">
      <div className="container">
        <Title title="List of Books" text="You can search all the books you want to buy here!" />
        <hr />

        <SearchBar
          handleSearchString={handleSearchString}
          handleClickType={handleClickType}
          handleClickPrice={handleClickPrice}
          handleClear={handleClear}
        />

        <div className="row">
          {bookShow.slice(0, visible).map((book, index) => {
            return (
              <div key={index} className="col-10 col-md-6 col-lg-3 mx-auto mb-3">
                <CardBook book={book} />
              </div>
            )
          })}
        </div>
        {visible === bookShow.length ? null : (
          <div className="row">
            <div style={{ textAlign: 'center' }} className="col-10 mx-auto pt-3">
              <hr />
              <button onClick={showMore} className="mb-5">
                Show more
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default ListBookPage
