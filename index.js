import {Component} from 'react'

import {signInWithPopup} from 'firebase/auth'

import {auth, provider} from '../googleSignIn/config'

import ChatSection from '../ChatSection'

import './index.css'

class LoginPage extends Component {
  state = {username: '', showError: false, show: false, value: ''}

  submitUserName = event => {
    event.preventDefault()
    const {username} = this.state

    if (username === '') {
      this.setState({show: false})
      this.setState({showError: true})
    } else {
      this.setState({show: true})
    }
  }

  onChangeUsername = event => {
    const {username} = this.state
    this.setState({username: event.target.value})
    if (username.length >= 1) {
      this.setState({showError: false})
    }
  }

  onSubmitSuccess = () => {
    const {username} = this.state

    return <ChatSection name={username} />
  }

  handleClick = () => {
    const {value} = this.state
    signInWithPopup(auth, provider).then(data => {
      this.setState((value: data.user.email))
      localStorage.setItem('Email', data.user.email)
    })
  }

  renderUsernameField = () => {
    const {username, showError} = this.state

    return (
      <>
        <h1 className="chat-hub-heading">Chat Hub</h1>
        <label className="username-label" htmlFor="username">
          USER NAME
        </label>
        <input
          className="username-input"
          id="username"
          value={username}
          type="text"
          placeholder="Enter user name"
          onChange={this.onChangeUsername}
        />
        <button className="enter-button" type="submit">
          Enter
        </button>

        {showError && <p className="error-message">*Enter User name </p>}

        <div className="sign-in-container">
          <button
            className="sign-in-button"
            type="button"
            onClick={this.handleClick}
          >
            Sign In
          </button>
        </div>
      </>
    )
  }

  render() {
    const {show} = this.state
    return (
      <div className="app-container">
        {show ? (
          this.onSubmitSuccess()
        ) : (
          <div className="login-container">
            <form className="name-container" onSubmit={this.submitUserName}>
              {this.renderUsernameField()}
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default LoginPage
