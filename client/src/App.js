import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { setCurrentUser } from './actions/auth_actions'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import jwt_decode from 'jwt-decode'
import Login from './components/Login'
import Register from './components/register'
import setAuthToken from './utils/set_auth_token'

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
            <Route exact path="/login" component={Login}/>
            
            <Route exact path="/register" component={Register}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
