import { Component } from "react";
import axios from 'axios';
import DealsList from "../../components/DealsList";
import BusinessHeader from "../../components/BusinessHeader";
import BusinessDashboard from "../../components/BusinessDashboard";
import './BusinessPage.scss'

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
                <BusinessHeader establishment={this.state.establishment} />
                {/* {console.log(this.state.establishment.id)} */}
                <h4 className='business-page__deals-header'>Our Deals</h4>
                <ul className='business-page__list-headings'>
                    <li className='deal-list__entry--headings'>
                        <div className='deal-list__day-column'>Day</div>
                        <div className='deal-list__deal-column'>Deal</div>
                    </li>
                </ul>
                {this.state.establishment.owner_id === this.state.user.id ? <DealsList establishment_id={this.state.establishment.id} removeButton={true} />
                                                                        : <DealsList establishment_id={this.state.establishment.id} user={this.state.user}/>}
                {this.state.establishment.owner_id === this.state.user.id ? <BusinessDashboard establishment_id={this.state.establishment.id}/> : <></>}
            </section>
        );
    }
}

export default BusinessPage