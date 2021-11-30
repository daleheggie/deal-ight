import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import './App.css';

class App extends Component {
  state={
    isLoggedIn: false
  }

  handleLogin = () => {
    this.setState({isLoggedIn: true});
  }
  handleLogout = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    
    return (
      <Switch>
        <Route path='/' exact>
            {!this.state.isLoggedIn ? <LandingPage handleLogin={this.handleLogin}/> : <UserPage handleLogout={this.handleLogout}/>}
        </Route>
      </Switch>
    )
    
    
  }
}

export default App;
