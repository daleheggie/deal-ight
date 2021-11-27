import { Component } from 'react';

class SignupPage extends Component {
    state = {
        name: '',
        username: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userInfo = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password
        }
        console.log(userInfo)
        // axios post request to the users table
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <section>
                <h1>Signup page</h1>
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
                </form>
                <button type='submit' form='signup-form'>Sign up</button>
            </section>
        );
    } 
}

export default SignupPage;