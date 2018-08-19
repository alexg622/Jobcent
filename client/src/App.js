import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { setCurrentUser } from './actions/auth_actions'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/App.css';
import './styles/navbar.css';
import './styles/register.css';
import jwt_decode from 'jwt-decode'
import Login from './components/Login';
import Wallet from './components/Wallet';
import Register from './components/register'
import setAuthToken from './utils/set_auth_token'
import Navbar from './components/navbar'

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Route exact path="/wallet" component={Wallet}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
