import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { setCurrentUser } from './actions/auth_actions'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/App.css';
import './styles/navbar.css';
import './styles/register.css';
import './styles/HomePage.css';
import jwt_decode from 'jwt-decode'
import Login from './components/Login'
import HomePage from './components/HomePage'
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
            <Navbar />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/register" component={Register}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
