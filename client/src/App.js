import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import PlacesPage from './pages/PlacesPage';
import BusinessPage from './pages/BusinessPage';
import DealsPage from './pages/DealsPage';
import Header from './components/Header';
import './App.css';

class App extends Component {
  state={
    isLoggedIn: false
  }

  componentDidMount() {
    if (sessionStorage.getItem('token')) {
        this.setState({isLoggedIn: true})
    }
  }

  handleLogin = () => {
    this.setState({isLoggedIn: true});
  }
  
  handleLogout = () => {
    this.setState({isLoggedIn: false})
    sessionStorage.removeItem('token')
  }

  render() {
    
    return (
      <>
        <Header />
        <Switch>
          <Route path='/' exact>
              {!this.state.isLoggedIn ? <LandingPage handleLogin={this.handleLogin}/> : <UserPage handleLogout={this.handleLogout}/>}
          </Route>
          <Route path='/places' exact>
              <PlacesPage />
          </Route>
          <Route path='/places/:establishment_id' exact component={BusinessPage}/>
          <Route path='/deals'>
              <DealsPage />
          </Route>
        </Switch>
      </>
    )
    
    
  }
}

export default App;
