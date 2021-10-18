import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Toast } from 'react-bootstrap'
import './Notification.scss'

Notification.propTypes = {
  isShow: PropTypes.bool,
  header: PropTypes.string,
  bobdy: PropTypes.string
}

Notification.defaultProps = {
  isShow: false,
  header: '',
  body: ''
}

function Notification(props) {
  const { isShow, header, body } = props
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(isShow)
    setTimeout(function () {
      setShow(false)
    }, 2500)
  }, [isShow])

  const handleClose = () => setShow(false)

  return (
    <Toast className="notification" show={show} onClose={handleClose}>
      <Toast.Header>
        <strong className="me-auto">{header}</strong>
      </Toast.Header>
      <Toast.Body className="Dark">{body}</Toast.Body>
    </Toast>
  )
}

export default Notification
