import { Component } from "react";
import axios from 'axios';
import DealsList from "../../components/DealsList";

class BusinessPage extends Component {
    state={
        user: null,
        establishment: null
    }
    componentDidMount() {
        axios
            .get(`http://localhost:5000/places/${this.props.match.params.establishment_id}`)
            .then(res => {
                this.setState({establishment: res.data[0]})
            })
    }
    render() {
        if (!this.state.establishment) return <p></p>
        return(
            <section className='business-page'>
                <h1>{this.state.establishment.name}</h1>
                {/* {console.log(this.state.establishment.id)} */}
                <DealsList establishment_id={this.state.establishment.id}/>
            </section>
        );
    }
}

export default BusinessPage