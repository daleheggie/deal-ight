import { Component } from "react";
import axios from 'axios';
import DealsList from "../../components/DealsList";
import BusinessHeader from "../../components/BusinessHeader";
import BusinessDashboard from "../../components/BusinessDashboard";

class BusinessPage extends Component {
    state={
        user: {id: null},
        establishment: null,
        privateView: false
    }
    componentDidMount() {
        axios
            .get(`http://localhost:5000/places/${this.props.match.params.establishment_id}`)
            .then(res => {
                this.setState({establishment: res.data[0]})
                axios
                    .get(`http://localhost:5000/profile`, {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem('token')}`
                        }
                    })
                    .then(res => {
                        this.setState({user: res.data[0]})
                    })
            })
    }
    render() {
        if (!this.state.establishment) return <></>
        return(
            <section className='business-page'>
                {this.state.establishment.owner_id === this.state.user.id ? <BusinessDashboard establishment_id={this.state.establishment.id}/> : <></>}
                <BusinessHeader establishment={this.state.establishment} />
                <h4>Our Deals</h4>
                {this.state.establishment.owner_id === this.state.user.id ? <DealsList establishment_id={this.state.establishment.id} removeButton={true} />
                                                                        : <DealsList establishment_id={this.state.establishment.id} user={this.state.user.id}/>}
            </section>
        );
    }
}

export default BusinessPage