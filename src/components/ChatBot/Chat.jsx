
import './chatBot.scss'
import react, { useEffect, useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { BiBot, BiUser } from 'react-icons/bi'
import axios from 'axios';

function ChatBot() {
  const [chat,setChat] = useState([]);
  const [inputMessage,setInputMessage] = useState('');
  const [botTyping,setbotTyping] = useState(false);

  
 useEffect(()=>{
 
      console.log("called");
      const objDiv = document.getElementById('messageArea');
      objDiv.scrollTop = objDiv.scrollHeight;
      
  
  },[chat])

  


  const handleSubmit=(evt)=>{
      evt.preventDefault();
      const name = "Khoa";
      const request_temp = {sender : "user", recipient_id : name , msg : inputMessage};
      
      if(inputMessage !== ""){
          
          setChat(chat => [...chat, request_temp]);
          setbotTyping(true);
          setInputMessage('');
          rasaAPI(name,inputMessage);
      }
      else{
          window.alert("Please enter valid message");
      }
      
  }


  const rasaAPI = async function handleClick(name,msg) {
  
      //chatData.push({sender : "user", sender_id : name, msg : msg});
      const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
              "sender" : name, "message" : msg
            })
      const {data} = response      
      if (data){
        const temp = data[0]
        console.log(temp)
        const recipient_id = temp?.recipient_id 
        const recipient_msg = temp?.text || "'Hệ thống đang lỗi, xin quý khách chờ trong giây lát ...'"
        const response_temp = {sender: "bot", recipient_id: recipient_id, msg: recipient_msg}
        setbotTyping(false)
        setChat(chat => [...chat, response_temp])
      }
      // .then((response) => {
      //     if(response){
      //         const temp = response[0];
      //         const recipient_id = temp["recipient_id"];
      //         const recipient_msg = temp["text"];        


              // const response_temp = {sender: "bot",recipient_id : recipient_id,msg: recipient_msg};
      //         setbotTyping(false);
              
      //         setChat(chat => [...chat, response_temp]);
      //        // scrollBottom();

      //     }
      // }) 
  }

  console.log(chat);

  const stylecard = {
      maxWidth : '35rem',
      border: '1px solid black',
      paddingLeft: '0px',
      paddingRight: '0px',
      borderRadius: '30px',
      boxShadow: '0 16px 20px 0 rgba(0,0,0,0.4)'

  }
  const styleHeader = {
      height: '4.5rem',
      borderBottom : '1px solid black',
      borderRadius: '30px 30px 0px 0px',
      backgroundColor: 'rgb(185, 90, 27)',
      display: 'flex',
      alignItems: 'center'

  }
  const styleFooter = {
      //maxWidth : '32rem',
      borderTop : '1px solid black',
      borderRadius: '0px 0px 30px 30px',
      backgroundColor: 'rgb(185, 90, 27)',
      
      
  }
  const styleBody = {
      paddingTop : '10px',
      height: '28rem',
      overflowY: 'a',
      overflowX: 'hidden',
      
  }

  return (
    <div>
      <div className="container-chatbot">
      <div className="row justify-content-center">
          
              <div className="card" style={stylecard}>
                  <div className="cardHeader text-white" style={styleHeader}>
                      <h3 style={{marginLeft:'5px'}}>HCMUT Book</h3>
                      {botTyping ? <h6>Bot Typing....</h6> : null}
                  </div>
                  <div className="cardBody" id="messageArea" style={styleBody}>
                      <div className="row msgarea">
                          {chat.map((user,key) => (
                              <div key={key}>
                                  {user.sender==='bot' ?
                                      (
                                          <div className= 'msgalignstart'>
                                              <BiBot className="botIcon"  /><h5 className="botmsg">{user.msg}</h5>
                                          </div>
                                      )
                                      :(
                                          <div className= 'msgalignend'>
                                              <h5 className="usermsg">{user.msg}</h5><BiUser className="userIcon" />
                                          </div>
                                      )
                                  }
                              </div>
                          ))}
                          
                      </div>
                  </div>
                  <div className="cardFooter" style={styleFooter}>
                      <div className="row">
                          <form style={{display: 'flex'}} onSubmit={handleSubmit}>
                              <div className="col-10" style={{paddingRight:'0px'}}>
                                  <input onChange={e => setInputMessage(e.target.value)} value={inputMessage} type="text" className="msginp"></input>
                              </div>
                              <div className="col-2 cola">
                                  <button type="submit" className="circleBtn" ><IoMdSend className="sendBtn" /></button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
      </div>
      </div>
    </div>
  );
}

export default ChatBot
