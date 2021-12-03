import { Component } from "react"
import AddDealForm from '../AddDealForm'

class BusinessDashboard extends Component {
    state={
        showAddDeal: false
    }

    handleAddDeal = () => {
        this.setState({showAddDeal: true})
    }
    
    render() {
        if (this.state.showAddDeal) {
            return(
                <AddDealForm />
            );
        }
        return(
            <>
                <button onClick={this.handleAddDeal}>Add a new deal</button>
            </>
        );
    }
}

export default BusinessDashboard