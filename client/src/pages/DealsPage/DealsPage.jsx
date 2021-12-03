import {Component} from 'react';
import axios from 'axios';
import DealsList from '../../components/DealsList'

class DealsPage extends Component {

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
                <DealsList user={this.state.user}/>
            </>
        )
    }
}

export default DealsPage