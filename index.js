import {IoMdSend} from 'react-icons/io'
import {MdPerson} from 'react-icons/md'

import './index.css'

const ChatSection = props => {
  const {name} = props
  return (
    <div className="chat-section-container">
      <div className="all-user-container">
        <h1 className="app-heading">ChatHub</h1>
        <div className="users-container">
          <h2
            style={{
              textAlign: 'center',
              backgroundColor: 'lightgrey',
              borderRadius: '5px',
              fontSize: '25px',
            }}
          >
            All User
          </h2>
          <div className="names-container">
            <div className="stored-username-container">
              <MdPerson className="person-icon" />
              <p className="stored-username">Sam Altman</p>
            </div>

            <div className="stored-username-container">
              <MdPerson className="person-icon" />
              <p className="stored-username">Mark Zucker</p>
            </div>

            <div className="stored-username-container">
              <MdPerson className="person-icon" />
              <p className="stored-username">Tony</p>
            </div>

            <div className="stored-username-container">
              <MdPerson className="person-icon" />
              <p className="stored-username">Satya Nadella</p>
            </div>
            <div className="stored-username-container">
              <MdPerson className="person-icon" />
              <p className="stored-username">Sunder Pichai</p>
            </div>
            <div className="stored-username-container">
              <MdPerson className="person-icon" />
              <p className="stored-username">Steve Job</p>
            </div>
            <div className="stored-username-container">
              <MdPerson className="person-icon" />
              <p className="stored-username">Warren Buffett</p>
            </div>
            <div className="stored-username-container">
              <MdPerson className="person-icon" />
              <p className="stored-username">Nick Vujicic</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-container">
        <h1 className="user-name">Welcome {name}</h1>
        <div className="chat-name">
          <p className="chat-name-heading">Sam Altman</p>
        </div>
        <div className="chat">
          <div>
            <div className="receive">
              <p className="receive-message">Hi, How are you ? </p>
            </div>
            <div className="send">
              <p className="send-message">I am good, How are you ? </p>
            </div>

            <div className="receive">
              <p className="receive-message">I am good too? </p>
            </div>
            <div className="receive">
              <p className="receive-message">All set for Presentation? </p>
            </div>

            <div className="send">
              <p className="send-message">Yes, Excited! </p>
            </div>
          </div>
          <div className="type-send-container">
            <input
              type="text"
              className="type-container"
              placeholder="Type your message here...."
            />
            <div className="enter-icon-container">
              <IoMdSend className="enter-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatSection
