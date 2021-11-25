import { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    isLoggedIn: false,

  }

  handleSignup = () => {

  }

  renderUserPage = (token) => {
    return (< UserPage />)
  }

  render() {
    if (!isLoggedIn){
      <>
        <h1>Welcome to Deal-ite</h1>
        <button onClick={handleSignup}>Sign up here</button>
      </>
    }
    if (isLoggedIn){
      renderUserPage()
    }
    
  }
}

export default App;
