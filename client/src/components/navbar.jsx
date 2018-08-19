import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { logoutUser } from "../actions/auth_actions"
import { connect } from 'react-redux'

class Navbar extends React.Component{

  noAuthLinks(){
    return (
      <div className="no-auth-links">
        <Link className="login" to="/login">Login</Link>
        <Link className="register" to="/register">Register</Link>
      </div>
    )
  }

  authLinks(){
    return (
      <div className="auth-links">
        <Link to='/logout'>Logout</Link>
      </div>
    )
  }
  render(){
    window.props = this.props
    return(
      <div className='navbar'>
        <div className="logo">JCent</div>
        {this.props.isAuthenticated ? this.authLinks() : this.noAuthLinks()}
      </div>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => {
  return {auth: state.auth}
}

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar))
