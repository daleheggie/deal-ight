import { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";
import './SignupForm.scss'

class SignupForm extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
        isError: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
       
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {name, username, password, confirmPassword} = this.state

        if (!name || !username || !password || !confirmPassword) {
            this.setState({errorMessage: 'All fields are required for signup', isError: true})
        }
        else if (password !== confirmPassword){
            this.setState({errorMessage: 'Passwords do not match', isError: true})
        }
        else if (password.length < 8) {
            this.setState({errorMessage: 'Password must be at least 8 characters long', isError: true})
        }
        else {
            axios
                .get(`http://localhost:5000/${username}`)
                .then(res => {
                    if (res.data.message) {
                        this.setState({errorMessage: 'This username is already taken, please choose another', isError: true})
                        return false
                    }   
                    else {
                        let userInfo = {
                            name: name,
                            username: username,
                            password: password,
                            confirmPassword: confirmPassword
                        }
                        axios
                            .post('http://localhost:5000/signup', userInfo)
                            .then(res => {
                                // Responds with the id of the new user
                            })
                        this.props.handleClearSignup();
                        return <Redirect to='/' />
                    }
                })
        }
    }

    validateUsername = () => {
        console.log(this.state.username)
        // axios
        //     .get(`http://localhost:5000/${this.state.username}`)
        //     .then(res => {
        //         console.log(res)
        //     })

        return true
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
            <section className='signup'>
                    <form id='signup-form' className='signup__form' onSubmit={this.handleSubmit}>
                        <input type='text' 
                                name='name' 
                                placeholder='Your Name' 
                                value={this.state.name}
                                onChange={this.handleChange}
                                autoFocus
                                className='signup__input'></input>
                        <input type='text' 
                                name='username' 
                                placeholder='Your Username' 
                                value={this.state.username}
                                onChange={this.handleChange}
                                className='signup__input'></input>
                        <input type='password' 
                                name='password' 
                                placeholder='<password>' 
                                value={this.state.password}
                                onChange={this.handleChange}
                                className='signup__input'></input>
                        <input type='password' 
                                name='confirmPassword' 
                                placeholder='<confirm your password>' 
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                className='signup__input'></input>
                    </form>
                    {this.state.isError ? <p>{this.state.errorMessage}</p> : <></>}
                <div className='signup__button-container'>
                    <button className='signup__sign-button' type='submit' form='signup-form'>Sign up</button>
                    <button className='signup__return-button' onClick={this.handleReturnToLogin}>Return to Log in</button>
                </div>
            </section>
        );
    }
}

export default SignupForm