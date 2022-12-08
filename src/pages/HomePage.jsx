import { AboutUs, HotBooks, TypesBook } from 'components'
import BannerSearch from 'components/Banner/BannerSearch'
import ChatBot from 'components/ChatBot/Chat'
import { selectBooks } from 'features/books/booksSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import { BOOKS } from 'utils/static'
function HomePage(props) {
  // let books = useSelector(selectBooks)
  const books = BOOKS.book_list
  const hotbook = books.filter(book => book.b_hot === true)

  return (
    <main>
      <BannerSearch />
      <HotBooks books={hotbook} />
      <TypesBook />
      <AboutUs />
      <ChatBot />
    </main>
  )
}

export default HomePage
