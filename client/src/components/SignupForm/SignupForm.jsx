import { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";

class SignupForm extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userInfo = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password
        }
        axios
            .post('http://localhost:5000/signup', userInfo)
            .then(res => {
                
            })
        this.props.handleClearSignup();
        return <Redirect to='/' />
    }

    handleReturnToLogin = () => {
        this.props.handleClearSignup();
        return <Redirect to='/' />
    }

    componentWillUnmount() {
        this.setState({
            name: '',
            username: '',
            password: '',
            confirmPassword: ''
        })
    }

    render() {
        return(
            <>
                <h1>Signup</h1>
                    <form id='signup-form' onSubmit={this.handleSubmit}>
                        <input type='text' 
                                name='name' 
                                placeholder='Your Name' 
                                value={this.state.name}
                                onChange={this.handleChange}></input>
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
                        <input type='password' 
                                name='confirmPassword' 
                                placeholder='<confirm your password>' 
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}></input>
                    </form>
                <button type='submit' form='signup-form'>Sign up</button>
                <button onClick={this.handleReturnToLogin}>Return to Log in</button>
            </>
        );
    }
}

export default SignupForm