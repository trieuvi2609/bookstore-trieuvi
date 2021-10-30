import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import instance from 'api/axios'
import { signIn } from 'features/session/sessionSlice'
import { Modal } from 'react-bootstrap'
import { selectBooks } from 'features/books/booksSlice'
import { setCart } from 'features/cart/cartSlice'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
export default function Login() {
  const history = useHistory()
  const books = useSelector(selectBooks)
  const [loading, setLoading] = useState('hidden')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [showFailed, setShowFailed] = useState(false)
  const errorCommon = 'This field must not be empty'
  const [showErrorUserName, setShowErrorUserName] = useState('hidden')
  const [showErrorPassword, setShowErrorPassword] = useState('hidden')
  const [disable, setDisable] = useState(false)
  const dispatch = useDispatch()
  const goToRegister = () => {
    history.push('/register')
  }
  const onChangeUserName = ({ target }) => {
    setShowErrorUserName('hidden')
    const newUserName = target.value
    setUserName(newUserName)
  }
  const onChangePassword = ({ target }) => {
    setShowErrorPassword('hidden')
    const newPassword = target.value
    setPassword(newPassword)
  }
  const handleClose = () => {
    setShowFailed(false)
    setDisable(false)
  }
  const showError = () => setShowFailed(true)
  const validateAccount = async () => {
    setDisable(true)
    let check = true
    if (!userName) {
      setShowErrorUserName('')
      check = false
    }
    if (!password) {
      setShowErrorPassword('')
      check = false
    }
    if (check) {
      console.log(userName)
      console.log(password)
      const signInInfo = { username: userName, password: password }
      try {
        setLoading('')
        const resp = await instance.post('/login', signInInfo)
        const id = resp.data.userId
        const respUser = await instance.get(`/user/${id}`)
        const cart = await instance.get(`cart/${id}`)
        const historyResp = await instance.get(`/history/${id}`)
        const cartUse = cart.data.cart
        const cartExist = cartUse.map(item => {
          const idx = books.findIndex(i => Number(i.b_id) === Number(item.itemId))
          return { item: books[idx], number: item.quantity }
        })
        dispatch(setCart(cartExist))
        const userInfo = {
          id: id,
          ...respUser.data.user,
          history: historyResp.data.list_order
        }
        dispatch(signIn(userInfo))
        setLoading('hidden')
        history.push('/home')
      } catch (err) {
        setLoading('hidden')
        showError()
      }
    }
  }
  return (
    <main>
      <section className="relative w-full h-full py-10 min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-contain"
          style={{
            backgroundImage: 'url(' + require('assets/images/bookWallpaper.jpg').default + ')'
          }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <Modal
          show={showFailed}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 text-center text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="text-center">
              <p>Your username or password is wrong !</p>
              <p> Please try again!</p>
            </div>
          </Modal.Body>
          <Modal.Footer
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <button
              className="bg-lightBlue-500 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              onClick={handleClose}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <div className="container mx-auto px-4 h-full py-4">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-500 text-center mb-3 mt-3 font-bold text-xl flex flex-col justify-center items-center">
                    <small>SIGN IN</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        UserName
                      </label>
                      <input
                        type="userName"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Username"
                        value={userName}
                        onChange={e => onChangeUserName(e)}
                      />
                    </div>
                    <div className="relative w-full pt-1">
                      <h1 className={'block text-red-500 font-bold text-xs mb-2 ' + showErrorUserName}>
                        {errorCommon}
                      </h1>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        value={password}
                        onChange={onChangePassword}
                      />
                    </div>
                    <div className="relative w-full pt-1">
                      <h1 className={'block text-red-500 font-bold text-xs mb-2 ' + showErrorPassword}>
                        {errorCommon}
                      </h1>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        onClick={validateAccount}
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        disabled={disable}
                      >
                        <div className="flex justify-center items-center">
                          <span>Sign In</span>
                          <AiOutlineLoading3Quarters className={'ml-2 animate-spin text-xl ' + loading} />
                        </div>
                      </button>
                      <button
                        onClick={goToRegister}
                        className="bg-blueGray-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150 mt-3"
                        type="button"
                      >
                        Create New Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
