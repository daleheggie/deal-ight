import { Component } from "react";
import axios from 'axios';
import WeeklyList from "../../components/WeeklyList/WeeklyList";
import FavouritePlacesList from "../../components/FavouritePlacesList";
import FavouriteDealsList from "../../components/FavouriteDealsList";

class UserPage extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        // Get user details from token
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

    render() {
        if (!this.state.user) {
            return (<p>LOADING ... </p>)
        }
        return (
            <>
                <h1>Welcome {this.state.user.name}</h1>
                <button onClick={this.props.handleLogout}>Log Out</button>
                <FavouritePlacesList />
                <FavouriteDealsList />
                <WeeklyList today={new Date()} />
            </>
        )
    }
}

export default UserPage