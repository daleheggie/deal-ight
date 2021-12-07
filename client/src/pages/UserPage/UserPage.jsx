import { Component } from "react";
import axios from 'axios';
import WeeklyList from "../../components/WeeklyList/WeeklyList";
import FavouritePlacesList from "../../components/FavouritePlacesList";
import FavouriteDealsList from "../../components/FavouriteDealsList";
import './UserPage.scss'

class UserPage extends Component {

    state = {
        user: null,
        favouriteDeals: []
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
            .catch(err => {
                this.props.handleLogout()
            })
    }

    setFavouriteDeals = (deals) => {
        let deal_ids = deals.map(deal => {
            return(deal.id)
        })
        if (deal_ids !== this.state.favouriteDeals) {
            this.setState({favouriteDeals: deal_ids})
        }
    }

    render() {
        if (!this.state.user) {
            return (<p>LOADING ... </p>)
        }
        return (
            <section className='user-page'>
                <h1 className='user-page__greeting'>Welcome {this.state.user.name}</h1>
                <button className='user-page__logout' onClick={this.props.handleLogout}>Log Out</button>
                <FavouritePlacesList />
                <FavouriteDealsList setFavouriteDeals={this.setFavouriteDeals}/>
                <WeeklyList today={new Date()} />
            </section>
        )
    }
}

export default UserPage