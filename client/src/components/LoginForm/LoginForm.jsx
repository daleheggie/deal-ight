import { Component } from 'react';
import axios from 'axios'
import './LoginForm.scss'

class LoginForm extends Component {

    state = {
        username: '',
        password: '',
        error: '',
        isError: false
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
                if (!res.data.token) {
                    this.setState({error: res.data.message, isError: true})
                }
                else{
                    sessionStorage.setItem('token', res.data.token)
                    this.props.handleLogin()
                }
            })
            .catch(err => {
                console.log()
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <section className='login'>
                {/* <h1>Login</h1> */}
                <form id='login-form' className='login__form' onSubmit={this.handleSubmit}>
                    <input type='text' 
                            name='username' 
                            placeholder='Username' 
                            value={this.state.username}
                            onChange={this.handleChange}
                            className='login__input'></input>
                    <input type='password' 
                            name='password' 
                            placeholder='<password>' 
                            value={this.state.password}
                            onChange={this.handleChange}
                            className='login__input'></input>
                </form>
                {this.state.isError ? <p>{this.state.error}</p> : <></>}
                <div className='login__button-container'>
                    <button className='login__log-button' type='submit' form='login-form'>Log In</button>
                    <button className='login__signup-button' onClick={this.props.handleShowSignup}>Register Here</button>
                </div>
            </section>
        );
    } 
}

export default LoginForm;