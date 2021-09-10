/*eslint-disable*/
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentUser } from "features/session/sessionSlice";
import { selectCart, resetCart } from "features/cart/cartSlice";
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';
// components
export default function Navbar(props) {
  const { attr } = props;
  let navAttr = '';
  let textColor = 'text-blueGray-500';
  if (attr === "fixed") navAttr = "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow text-blueGray-500";
  else {
    navAttr = "top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg text-white";
    textColor = "lg:text-blueGray-200 text-blueGray-400"
  }
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const items = useSelector(selectCart);
  const handleLogout = e => {
    dispatch(logOut());
    dispatch(resetCart());
    history.push('/homepage');
  }
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const goSignIn = () => {
    history.push(
      "/auth/login"
    )
  }
  return (
    <>
      <nav className={navAttr}>
        <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <Link
                to="/homepage"
                className={"hover:text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase " + textColor}
              >
                Book Store
              </Link>
              <form className={"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                (navbarOpen ? " hidden" : " hidden")}>
                {attr === "fixed" ? <div className="flex inline-flex border-b-2 py-2 ">
                  <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight outline-none focus:outline-none focus:border-transparent" type="text" placeholder="Find your books" aria-label="Full name" />
                  <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
                    Search
                  </button>
                </div> : <></>}
              </form>
            </div>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li>
              </li>
              <li className="flex items-center">
                <Link
                  to={currentUser.username ? "/cart" : "/auth/login"}
                  className={"hover:text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold " + textColor}
                >

                  <i className={"hover:text-blueGray-700 fas fa-shopping-cart text-lg leading-lg" + textColor} />
                  {items && currentUser.username ? <span className="inline-block ml-1 mb-4 inline-flex justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">{items.length}</span> : <></>}


                  <span className="lg:hidden inline-block ml-2">Cart</span>
                </Link>
              </li>
              <li className="flex items-center">{currentUser.username ? (<Link
                to="/profile"
                className={"hover:text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold " + textColor}
              >
                <Avatar size="30" round={true} src={require("assets/img/maleAvatar.png").default} />
                <span className="inline-block ml-2">{currentUser.username ?? 'Unknown'}</span>
              </Link>) : (<></>)}
              </li>
              <li className="flex items-center">
                {
                  currentUser.username ? (
                    <button onClick={handleLogout}
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                    > Log Out
                    </button>
                  ) : (
                    <button onClick={goSignIn}
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                    > Sign In
                    </button>
                  )
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
