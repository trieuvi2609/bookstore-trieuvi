import { resetCart, selectCart } from 'features/cart/cartSlice'
import { logOut, selectCurrentUser } from 'features/session/sessionSlice'
import { selectTypes } from 'features/books/booksSlice'
import React from 'react'
import { TiShoppingCart, TiDeleteOutline } from 'react-icons/ti'
import { CgMenuGridR } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import './Navbar.scss'
import { STORE_NAME } from 'utils/static'
import instance from 'api/axios'
import backgroundNavbar from '../../assets/images/bgNavbar.png'
function Navbar() {
  const currentUser = useSelector(selectCurrentUser)
  const items = useSelector(selectCart)
  const bookTypes = useSelector(selectTypes)
  const history = useHistory()
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const dispatch = useDispatch()
  const handleLogout = async () => {
    await instance.post('/logout')
    const itemUpdate = items.map(item => ({ itemId: item.item.b_id, price: item.item.b_price, quantity: item.number }))
    await instance.post(`/cart/${currentUser.id}`, itemUpdate)
    dispatch(logOut())
    dispatch(resetCart())
    history.push('/')
  }
  return (
    <>
      <header
        className="sticky"
        // style={{ background: `url(${backgroundNavbar})`}}
        style={{ backgroundImage: `url(${backgroundNavbar})` }}
      >
        <span className="slogan">The easiest way to find any book.</span>
        <div
          className="navbar"
          // style={{ backgroundImage: `url(${backgroundNavbar})`}}
        >
          <div className="container">
            <Link to="/" className="navbar__logo">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h4>{STORE_NAME}</h4>
            </Link>

            <div className="navbar__links">
              <div>
                <Link to="/" className="navbar__link">
                  Home
                </Link>
                <Link to="/books" className="navbar__link dropdown">
                  Book List
                </Link>
                {bookTypes && (
                  <div className="navbar__link dropdown">
                    Categories
                    <div className="dropdown-content">
                      <ul>
                        {bookTypes.map(type => (
                          <li key={type.cat_id}>
                            <Link to={`/type/${type.cat_nm}`}>{type.cat_nm}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ marginLeft: '', display: 'flex' }}>
                <Link to="/cart" className="navbar__cart">
                  {items.length !== 0 && <span className="navbar__cart-count">{items.length}</span>}
                  <TiShoppingCart fontSize="20pt" />
                </Link>
                {currentUser.username ? (
                  <div style={{ display: 'flex' }}>
                    <Link to="/profile" className="navbar__user">
                      {!currentUser.imageUrl ? (
                        <img
                          src={require('assets/images/maleAvatar.png').default}
                          alt=""
                          className="navbar__user-avt"
                        />
                      ) : (
                        <img src={currentUser.imageUrl} alt="" className="navbar__user-avt" />
                      )}
                      <span className="navbar__user-name">{currentUser.fullName}</span>
                    </Link>
                    <button className="navbar__btn" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="navbar__btn">Sign in</button>
                  </Link>
                )}
              </div>
            </div>

            <div className="navbar__hidden">
              <CgMenuGridR fontSize="20pt" onClick={() => setNavbarOpen(!navbarOpen)} />
            </div>
          </div>
        </div>
      </header>

      {navbarOpen && (
        <div className="navbar__hidden menu-hidden">
          <div className="menu-hidden-close" onClick={() => setNavbarOpen(!navbarOpen)}>
            <TiDeleteOutline fontSize="30pt" />
          </div>
          <Link to="/" className="menu-hidden-link" onClick={() => setNavbarOpen(!navbarOpen)}>
            Home
          </Link>
          <hr />
          <Link to="/books" className="menu-hidden-link" onClick={() => setNavbarOpen(!navbarOpen)}>
            Book List
          </Link>
          <hr />
          {currentUser.username ? (
            <>
              <Link to="/profile" className="navbar__user menu-hidden-link" onClick={() => setNavbarOpen(!navbarOpen)}>
                <span className="navbar__user-name">{currentUser.fullName}</span>
              </Link>
              <hr />
              <button className="navbar__btn " onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setNavbarOpen(!navbarOpen)}>
              <button className="navbar__btn">Sign in</button>
            </Link>
          )}
        </div>
      )}

      <Link to="/cart" className="navbar__cart-hidden navbar__hidden">
        <div className="navbar__cart">
          {items.length !== 0 && <span className="navbar__cart-count">{items.length}</span>}
          <TiShoppingCart fontSize="20pt" />
        </div>
      </Link>
    </>
  )
}
export default Navbar
