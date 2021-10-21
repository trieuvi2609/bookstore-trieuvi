import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import instance from 'api/axios'
import { signIn } from 'features/session/sessionSlice'
import { Modal } from 'react-bootstrap'
import { selectBooks } from 'features/books/booksSlice'
import { setCart } from 'features/cart/cartSlice'
export default function Login() {
  const history = useHistory()
  const books = useSelector(selectBooks)
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
        const resp = await instance.post('/login', signInInfo)
        const id = resp.data.userId
        const respUser = await instance.get(`/user/${id}`)
        const respShipping = await instance.get(`shipping_address/${id}`)
        const cart = await instance.get(`cart/${id}`)
        const cartUse = cart.data.cart
        const cartExist = cartUse.map(item => {
          const idx = books.findIndex(i => Number(i.b_id) === Number(item.itemId))
          return { item: books[idx], number: item.quantity }
        })
        dispatch(setCart(cartExist))
        const userInfo = { id: id, ...respUser.data.user, shippingAddress: respShipping.data.shipping_address }
        dispatch(signIn(userInfo))
        history.push('/home')
      } catch (err) {
        showError()
      }
    }
  }
  const googleLogin = async () => {
    try {
      const resp = await instance.get('/oauth/google/login')
      if (resp.status !== 404) {
        console.log(resp.data)
        history.push('/home')
      }
    } catch (err) {
      console.error(err)
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
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">Sign in with</h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      onClick={googleLogin}
                      className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img alt="..." className="w-5 mr-1" src={require('assets/images/google.svg').default} />
                      Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
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
                        Sign In
                      </button>
                      <button
                        onClick={goToRegister}
                        className="bg-blueGray-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Create New Account
                      </button>
                      <button
                        className="bg-blueGray-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Forgot Password?
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
