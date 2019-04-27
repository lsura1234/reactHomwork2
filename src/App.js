
import React, { Component } from 'react';
// import Routes from './router/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Header from './pages/header'
import Register from './pages/register'
import Insert from './pages/insert'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/insert" component={Insert} />
        </Router>
      </div>
    )
  }
}

export default App;
