import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import './App.css';

class App extends Component {
  state={
    isLoggedIn: false,

  }

  handleSignup = () => {

  }

  renderUserPage = () => {
    // let token = sessionStorage.getItem('token');
    // return (< UserPage token={token}/>)
    <h1>Home Page</h1>
  }

  render() {
    return (
      <Switch>
        <Route path='/' exact>
            {!this.state.isLoggedIn ? <Redirect to='/signup'/> : this.renderUserPage()}
        </Route>
        <Route path='/signup' component={SignupPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    )
    
    
  }
}

export default App;
