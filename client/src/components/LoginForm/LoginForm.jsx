import { Component } from 'react';
import axios from 'axios'

class LoginForm extends Component {

    state = {
        username: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userInfo = {
            username: this.state.username,
            password: this.state.password
        }
        this.setState({username: '', password: ''})
        
        axios
            .post('http://localhost:5000/login', userInfo)
            .then(res => {
                sessionStorage.setItem('token', res.data.token)
                this.props.handleLogin()
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <>
                <h1>Login</h1>
                <form id='login-form' onSubmit={this.handleSubmit}>
                    <input type='text' 
                            name='username' 
                            placeholder='Your Username' 
                            value={this.state.username}
                            onChange={this.handleChange}></input>
                    <input type='password' 
                            name='password' 
                            placeholder='<password>' 
                            value={this.state.password}
                            onChange={this.handleChange}></input>
                </form>
                <button type='submit' form='login-form'>Log In</button>
                <button onClick={this.props.handleShowSignup}>Register Here</button>
            </>
        );
    } 
}

export default LoginForm;