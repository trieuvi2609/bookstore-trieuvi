import React, { useEffect, useState } from 'react'
import { selectCurrentUser } from 'features/session/sessionSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from 'features/session/sessionSlice'
import instance from 'api/axios'
import { selectBooks } from 'features/books/booksSlice'
export default function ProfilePage() {
  const books = useSelector(selectBooks)
  const currentUser = useSelector(selectCurrentUser)
  const historyTable = []
  if (currentUser.history) {
    for (let i of currentUser.history) {
      const historyGet = i?.list_item?.map(item => {
        const idx = books.findIndex(i => Number(i.b_id) === Number(item.itemId))
        return { item: books[idx], number: item.quantity }
      })
      historyTable.push({
        list_item: historyGet,
        purchased: i.purchased,
        total: i.total,
        created_at: i.created_at,
        status: i.status,
        expected_time: i.expected_time,
        order_id: i.orderId
      })
    }
    historyTable.sort((a, b) => {
      const d1 = new Date(a.created_at)
      const d2 = new Date(b.created_at)
      return d2 - d1
    })
  }
  console.log(historyTable)
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
  const handleStatus = async orderId => {
    await instance.get(`/history/status/${orderId}`)
  }
  const getShipping = async () => {
    const respShipping = await instance.get(`history/${currentUser.id}`)
    dispatch(setUser({ ...currentUser, history: respShipping.data.list_order }))
  }
  useEffect(() => {
    getShipping()
  }, [])
  return (
    <>
      <main>
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
        <section className="relative py-16 bg-blueGray-200 flex">
          <div className="container flex flex-row justify-between">
            <div className="w-5/12 mr-4">
              <div className="relative flex flex-col break-words bg-white mb-6 shadow-xl rounded-lg -mt-64 w-full">
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
                <div className="flex flex-row mt-12 pt-20 px-5 w-full">
                  <div className="text-lg leading-normal text-blueGray-600 font-bold uppercase px-4 ">
                    <div className="mb-10">Name</div>
                    <div className="mb-10">Phone</div>
                    <div className="mb-10">Email</div>
                  </div>
                  <div className="text-lg leading-normal text-blueGray-600 w-full">
                    <div className={'mb-10 ' + hidden}> {name}</div>
                    <div className={'mb-6 ' + hidden2}>
                      <input
                        value={name}
                        type="text"
                        className="border rounded text-sm p-2 text-black w-full"
                        onChange={handleName}
                      />
                    </div>
                    <div className={'mb-10 ' + hidden}>{phone}</div>
                    <div className={'mb-6 ' + hidden2}>
                      <input
                        className="w-full border rounded text-sm p-2 text-black"
                        value={phone}
                        onChange={handlePhone}
                      />
                    </div>

                    <div className={'mb-10 ' + hidden}>{email}</div>
                    <div className={'mb-10 ' + hidden2}>
                      <input
                        className="border rounded text-sm p-2 text-black w-full"
                        value={email}
                        onChange={handleEmail}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pb-3">
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
            <div className="relative flex flex-col break-words mb-6 -mt-64 w-7/12">
              {historyTable.length === 0 && (
                <div className="w-full py-5 bg-white px-3 shadow-xl rounded-lg">
                  <p className="text-xl font-bold text-center">You don't have any purchase order </p>
                  <p className="text-center">
                    Now you don't have any purchase order. If you are interesting in our books, go to homepage and buy
                    some.
                  </p>
                </div>
              )}
              {historyTable.map((item, idx) => (
                <div className="w-full py-3 bg-white px-3 mb-6 shadow-xl rounded-lg" key={idx}>
                  <p className="text-xl font-bold text-center">Purchase Order #{item.order_id} </p>
                  <p>
                    <span className="text-blueGray-700 font-semibold">Ordered Date</span>:{' '}
                    {new Date(item.created_at).toLocaleDateString('vi-VN')}{' '}
                    {new Date(item.created_at).toLocaleTimeString()}
                  </p>
                  <p>
                    <span className="text-blueGray-700 font-semibold">Expected Delivery Time</span>:{' '}
                    {new Date(item.expected_time).toLocaleDateString('vi-VN')}{' '}
                    {new Date(item.expected_time).toLocaleTimeString()}
                  </p>

                  <p>
                    <span className="text-blueGray-700 font-semibold">Price</span>:{' '}
                    {Number(item.total).toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND'
                    })}
                  </p>
                  <p>
                    <span className="text-blueGray-700 font-semibold">Purchase Status</span>:{' '}
                    {item.purchased === true ? 'Yes' : 'No'}
                  </p>
                  <p>
                    <span className="text-blueGray-700 font-semibold">Shipping Status</span>: {item.status}
                  </p>
                  <div className="block w-full overflow-x-auto">
                    <table className="items-center bg-transparent w-full">
                      <thead>
                        <tr>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Book Name
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Quantity
                          </th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Price each book
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {item.list_item.map((book, idx) => (
                          <tr className="border" key={idx}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                              {book.item.b_nm}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                              {book.number}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {Number(book.item.b_price).toLocaleString('it-IT', {
                                style: 'currency',
                                currency: 'VND'
                              })}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {item.status !== 'Finish' && (
                      <button
                        className="bg-lightBlue-500 active:bg-blueGray-600 text-white font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 mt-3"
                        onClick={() => {
                          handleStatus(item.order_id)
                          getShipping()
                        }}
                      >
                        Confirm the order have received
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
