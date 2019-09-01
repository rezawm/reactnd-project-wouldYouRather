import React, { Component } from 'react'
import { setLogoutUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class Logout extends Component {
  render () {
    this.props.dispatch( setLogoutUser() )
    return (
      <Redirect to='/' />
    )
  }
}

export default connect()(Logout)