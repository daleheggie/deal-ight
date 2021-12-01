import { Component } from "react";
import axios from 'axios';
import WeeklyList from "../../components/WeeklyList/WeeklyList";

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
                <WeeklyList today={new Date()} userId={this.state.user.id}/>

            </>
        )
    }
}

export default UserPage