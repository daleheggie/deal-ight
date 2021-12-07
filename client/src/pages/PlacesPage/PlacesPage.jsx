import {Component} from 'react';
import axios from 'axios';
import PlacesList from '../../components/PlacesList'
import './PlacesPage.scss'

class PlacesPage extends Component {

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

    render() {
        return (
            <>
                <PlacesList user={this.state.user}/>
            </>
        )
    }
}

export default PlacesPage