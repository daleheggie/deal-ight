import { Component } from "react"
import axios from 'axios';
import AddDealForm from '../AddDealForm'
import { API_URL } from "../../utils/_globals"; 
import DailyCard from "../DailyCard";
import './BusinessDashboard.scss';

class BusinessDashboard extends Component {

    state={
        showAddDeal: false
    }

    handleAddDeal = () => {
        this.setState({showAddDeal: true})
    }
    handleSubmitDeal = (deal) => {
        const {day, until, details} = deal
        
        axios
            .post(`${API_URL}/deals`, {
                day: day,
                until: until,
                details: details,
                establishment_id: this.props.establishment_id
            })
            .then(res => {
                // Responds with the id of the new deal
            })

        this.setState({showAddDeal: false})
    }
    handleCancel = () => {
        this.setState({showAddDeal: false})
    }   

    render() {
        if (this.state.showAddDeal) {
            return(
                <AddDealForm handleCancel = {this.handleCancel} handleSubmitDeal={this.handleSubmitDeal}/>
            );
        }
        return(
            <section className='business-dashboard'>
                <button className='add-deal-button' onClick={this.handleAddDeal}>Add a new deal</button>
            </section>
        );
    }
}

export default BusinessDashboard