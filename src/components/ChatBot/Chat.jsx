import './chatBot.scss'
import React, { useEffect, useState } from 'react'
import { BiBot, BiUser } from 'react-icons/bi'
import axios from 'axios'
import sendImg from '../../assets/images/Vector.png'
import minimizeIcon from '../../assets/images/minimize-sign.png'
import chatBotIcon from '../../assets/images/symbole-messager-orange.png'

function ChatBot() {
  const [isToggleChatBot, setIsToggleChatBot] = useState(false)
  const [chat, setChat] = useState([
    { sender: 'bot', recipient_id: 0, msg: 'HCMUTBook Store xin chào bạn, không biết shop có thể giúp gì cho bạn ạ ' }
  ])

  const [inputMessage, setInputMessage] = useState('')
  const [botTyping, setbotTyping] = useState(false)
  useEffect(() => {
    console.log('called')
    const objDiv = document.getElementById('messageArea')
    objDiv.scrollTop = objDiv.scrollHeight
  }, [chat])
  const handleSubmit = evt => {
    evt.preventDefault()
    const name = 'Khoa'
    const request_temp = { sender: 'user', recipient_id: name, msg: inputMessage }

    if (inputMessage !== '') {
      setChat(chat => [...chat, request_temp])
      setbotTyping(true)
      setInputMessage('')
      rasaAPI(name, inputMessage)
    } else {
      window.alert('Please enter valid message')
    }
  }
  const toggleChatBox = () => {
    console.log('off')
    setIsToggleChatBot(!isToggleChatBot)
  }
  const rasaAPI = async function handleClick(name, msg) {
    const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
      sender: name,
      message: msg
    })
    const { data } = response
    if (data) {
      const temp = data[0]
      console.log(temp)
      const recipient_id = temp?.recipient_id
      const recipient_msg = temp?.text || "'Xin lỗi shop chưa hiểu ý của bạn, bạn vui lòng nhập lại câu hỏi ạ'"
      const response_temp = { sender: 'bot', recipient_id: recipient_id, msg: recipient_msg }
      setbotTyping(false)
      setChat(chat => [...chat, response_temp])
    }
  }

  console.log(chat)

  const stylecard = {
    maxWidth: '379px',
    border: '1px solid black',
    paddingLeft: '0px',
    paddingRight: '0px',
    borderRadius: '8px',
    boxShadow: '0 16px 20px 0 rgba(0,0,0,0.4)'
  }
  const styleHeader = {
    height: '72px',
    width: '379px',
    borderRadius: '8px 8px 0px 0px',
    backgroundColor: '#F1592B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '10px'
  }
  const styleFooter = {
    width: '379px',
    borderRadius: '0px 0px 30px 30px'
  }
  const styleBody = {
    paddingTop: '10px',
    height: '400px',
    overflowY: 'a',
    overflowX: 'hidden',
    width: '379px'
  }

  return (
    <div>
      {isToggleChatBot ? (
        <img
          onClick={toggleChatBox}
          src={chatBotIcon}
          alt="chatbot"
          className="chatbotIcon"
          style={{ position: 'fixed', width: '50px', bottom: '20px', right: '11px' }}
        />
      ) : (
        <div className="container-chatbot">
          <div className="row justify-content-center">
            <div className="card" style={stylecard}>
              <div className="cardHeader text-white" style={styleHeader}>
                <h3 style={{ marginLeft: '5px', fontSize: '16px' }}>HCMUT BookStore</h3>
                <div onClick={toggleChatBox} style={{ cursor: 'pointer' }}>
                  <img src={minimizeIcon} alt="minimize-icon" style={{ width: '30px' }} />
                </div>
              </div>
              {botTyping ? <h6>Bot Typing....</h6> : null}
              <div className="cardBody" id="messageArea" style={styleBody}>
                <div className="row msgarea">
                  {chat.map((user, key) => (
                    <div key={key}>
                      {user.sender === 'bot' ? (
                        <div className="msgalignstart">
                          <BiBot className="botIcon" />
                          <h5 className="botmsg">{user.msg}</h5>
                        </div>
                      ) : (
                        <div className="msgalignend">
                          <h5 className="usermsg">{user.msg}</h5>

                          <BiUser className="userIcon" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="cardFooter" style={styleFooter}>
                <div className="row">
                  <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
                    <div className="col-10" style={{ paddingRight: '0px' }}>
                      <input
                        onChange={e => setInputMessage(e.target.value)}
                        value={inputMessage}
                        type="text"
                        className="msginp"
                        placeholder="Vui lòng nhập câu hỏi"
                      ></input>
                    </div>
                    <div className="col-2 cola">
                      <button type="submit" className="circleBtn">
                        <img src={sendImg} alt="123" className="sendBtn" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatBot
