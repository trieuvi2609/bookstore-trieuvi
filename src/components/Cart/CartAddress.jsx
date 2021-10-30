import { useState, useEffect } from 'react'
import instance from 'api/axios'
export default function CartAddress(props) {
  const [provinceList, setProvinceList] = useState([])
  const [districtList, setDistrictList] = useState([])
  const [wardList, setWardList] = useState([])
  const [distId, setDistId] = useState('')
  const [wardId, setWardId] = useState('')
  const [cost, setCost] = useState(0)
  const getProvince = async () => {
    const resp = await instance.get('/ghn/province/')
    setProvinceList(resp.data.list_province)
  }
  const [province, setProvince] = useState('')
  const onChangeProvince = ({ target }) => {
    setProvince(target.value)
  }
  const [district, setDistrict] = useState('')
  const onChangeDistrict = ({ target }) => {
    setDistrict(target.value)
  }
  const [ward, setWard] = useState('')
  const onChangeWard = ({ target }) => {
    setWard(target.value)
  }
  const [address, setAddress] = useState('')
  const onChangeAddress = ({ target }) => {
    setAddress(target.value)
  }
  const getDistrict = async provinceId => {
    const resp = await instance.get(`/ghn/district/${provinceId}`)
    setDistrictList(resp.data.list_district)
  }
  const getWard = async districtId => {
    const resp = await instance.get(`/ghn/ward/${districtId}`)
    setWardList(resp.data.list_ward)
  }
  const getCost = async (distId, wardId) => {
    const body = {
      district_no: distId,
      ward_no: wardId
    }
    const resp = await instance.post('/ghn/cost', body)
    setCost(resp.data.data.total)
  }
  useEffect(() => {
    getProvince()
  }, [])
  useEffect(() => {
    const pr = provinceList.find(item => item.provinceName === province)
    if (pr) {
      getDistrict(pr.provinceId)
    }
  }, [province, provinceList])
  useEffect(() => {
    const dis = districtList.find(item => item.districtName === district)
    if (dis) {
      getWard(dis.districtId)
      setDistId(`${dis.districtId}`)
    }
  }, [district, districtList])
  useEffect(() => {
    const wd = wardList.find(item => item.wardName === ward)
    if (wd) {
      getCost(distId, wd.wardId)
      setWardId(wd.wardId)
    }
  }, [ward, wardList, distId])
  return (
    <>
      <p className="text-center">Please fill in your shipping address. We will ship your order to this address</p>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <div className="relative w-full mb-3">
            <label className="block text-blueGray-600 text-xs font-bold mb-2 uppercase">Your City/Province</label>
            <input
              type="text"
              className="border rounded-lg px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="City/Province"
              value={province}
              onChange={onChangeProvince}
              list="provinces"
              spellCheck={false}
            />
            <datalist id="provinces">
              {provinceList.map(item => (
                <option key={item.provinceId} value={item.provinceName} />
              ))}
            </datalist>
          </div>
          <div className="relative w-full mb-3">
            <label className="block text-blueGray-600 text-xs font-bold mb-2 uppercase">Your District</label>
            <input
              type="text"
              className="border rounded-lg px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="District"
              value={district}
              onChange={onChangeDistrict}
              list="districts"
              spellCheck={false}
            />
            <datalist id="districts">
              {districtList.map(item => (
                <option key={item.districtId} value={item.districtName} />
              ))}
            </datalist>
          </div>
          <div className="relative w-full mb-3">
            <label className="block text-blueGray-600 text-xs font-bold mb-2 uppercase">Your Ward</label>
            <input
              type="text"
              className="border rounded-lg px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Ward"
              value={ward}
              onChange={onChangeWard}
              list="wards"
              spellCheck={false}
            />
            <datalist id="wards">
              {wardList.map(item => (
                <option key={item.wardId} value={item.wardName} />
              ))}
            </datalist>
          </div>
          <div className="relative w-full">
            <label className="block text-blueGray-600 text-xs font-bold mb-2 uppercase">Your Address</label>
            <input
              type="text"
              className="border rounded-lg px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Address"
              value={address}
              onChange={onChangeAddress}
              spellCheck={false}
            />
          </div>
        </form>
      </div>
      <div className="flex justify-between w-full">
        <button
          className="bg-lightBlue-500 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-2 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          onClick={props.handleClose}
        >
          Cancel
        </button>
        <button
          className="bg-lightBlue-500 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-2 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          onClick={() => {
            const addr = `${address}, ${ward}, ${district}, ${province}`
            props.handleAddress(addr)
            props.saveWardDistrict(wardId, distId)
            props.handleCost(cost)
            props.handleClose()
            props.handleShow()
          }}
        >
          Confirm
        </button>
      </div>
    </>
  )
}
