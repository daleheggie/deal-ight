import { Component } from "react";
import axios from 'axios';

class UserPage extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/profile`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(res => {
                this.setState({user: res.data[0]})
            })
    }

    componentWillUnmount() {
        sessionStorage.removeItem('token')
    }

    render() {
        if (!this.state.user) {
            return (<p>LOADING ... </p>)
        }
        return (
            <>
                <h1>Welcome {this.state.user.name}</h1>
                <button onClick={this.props.handleLogout}>Log Out</button>
            </>
        )
    }
}

export default UserPage