import React, { useState } from 'react'
import { selectCurrentUser } from 'features/session/sessionSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from 'features/session/sessionSlice'
import instance from 'api/axios'
export default function ProfilePage() {
  const currentUser = useSelector(selectCurrentUser)
  console.log(currentUser)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const hidden = show ? 'hidden' : ''
  const hidden2 = !show ? 'hidden' : ''
  const [name, setName] = useState(currentUser.fullName)
  const [phone, setPhone] = useState(currentUser.contact)
  const [email, setEmail] = useState(currentUser.email)
  const handleName = ({ target }) => {
    setName(target.value)
  }
  const handlePhone = ({ target }) => {
    setPhone(target.value)
  }
  const handleEmail = ({ target }) => {
    setEmail(target.value)
  }
  const updateInfo = async (phone, email, fullName) => {
    const updateBody = { email: email, contact: phone, fullName: fullName }
    await instance.post(`/updateInfo/${currentUser.id}`, updateBody)
    dispatch(setUser(updateBody))
  }
  return (
    <>
      <main className="profile-page">
        <section className="relative block min-h-screen-50">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: 'url(' + require('assets/images/banner-bg.png').default + ')'
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container flex justify-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-xl rounded-lg -mt-64 w-7/12">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require('assets/images/maleAvatar.png').default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-auto max-w-180-px"
                      />
                    </div>
                  </div>
                </div>
                <h3
                  className={
                    'text-center mt-12 pt-20 text-3xl font-semibold leading-normal text-blueGray-700 mb-2 ml-3 ' +
                    hidden
                  }
                >
                  {name}
                </h3>
                <div
                  className={
                    'text-center mt-12 pt-20 text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 ml-3 ' +
                    hidden2
                  }
                >
                  <input value={name} type="text" className="border rounded-lg" onChange={handleName} />
                </div>
                <div className="flex flex-row justify-center flex-wrap">
                  <div className="w-1/3 text-lg leading-normal text-blueGray-400 font-bold uppercase px-4 ">
                    <div className="mb-10">Phone</div>
                    <div className="mb-10">Email</div>
                    <div className="mb-10">Address</div>
                  </div>
                  <div className="text-lg leading-normal text-blueGray-400">
                    {}
                    <div className={'mb-10 ' + hidden}>{phone}</div>
                    <div className={'mb-6 ' + hidden2}>
                      <input
                        className="w-full border rounded-lg text-sm p-2 text-black"
                        value={phone}
                        onChange={handlePhone}
                      />
                    </div>

                    <div className={'mb-10 ' + hidden}>{email}</div>
                    <div className={'mb-8 ' + hidden2}>
                      <input
                        className="border rounded-lg text-sm p-2 text-black w-full"
                        value={email}
                        onChange={handleEmail}
                      />
                    </div>
                    <div className="mb-8">475 Cong Hoa, Tan Binh District, Ho Chi Minh City, VietNam</div>
                  </div>
                </div>
                <div className="flex justify-center py-6">
                  <button
                    onClick={() => setShow(true)}
                    className={
                      'bg-lightBlue-500 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 ' +
                      hidden
                    }
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      updateInfo(phone, email, name)
                      setShow(false)
                    }}
                    className={
                      'bg-lightBlue-500 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 ' +
                      hidden2
                    }
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
