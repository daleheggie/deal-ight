import { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';

class LandingPage extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        showSignup: false
    }
    handleShowSignup = () => {
        this.setState({showSignup: true})
    }
    handleClearSignup = () => {
        this.setState({showSignup: false})
    }
    render() {
        return(
            <section>
                {this.state.showSignup ? <SignupForm handleClearSignup={this.handleClearSignup}/> : <LoginForm handleLogin={this.props.handleLogin} handleShowSignup={this.handleShowSignup}/>}
                
            </section>
        );
    } 
}

export default LandingPage;