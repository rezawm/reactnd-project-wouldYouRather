import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setLoginUser } from '../actions/authedUser'


class Login extends Component {
  state = {
    authedUser: '',
    toHome: false
  }

  handleChange = (e) => {
    const userId = e.target.value
    this.props.dispatch( setLoginUser(userId) )

    this.setState(() => ({
      authedUser: userId,
      toHome: userId !== null ? true : false
    }))
  }

  componentDidMount () {
    this.setState(() => ({
      authedUser: this.props.authedUser
    }))
  }

  render () {
    const { usersId, users } = this.props

    if ( this.state.toHome ) {
      return <Redirect to='/' />
    }

    return (
      <div className="login">
        <h3>Login</h3>
        <select value={this.state.authedUser} onChange={this.handleChange}>
            <option value='' disabled>Select a User</option>
          {usersId.map((uid) => (
            <option key={uid} value={uid}>{users[uid].name}</option>
          ))}
        </select>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser: authedUser === null ? '' : authedUser,
    usersId: Object.keys(users),
    users
  }
}

export default connect(mapStateToProps)(Login)