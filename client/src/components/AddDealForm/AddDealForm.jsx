import { Component } from "react";

class AddDealForm extends Component {
    state={
        details: '',
        errorMessage: '',
        isError: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        // Get all the selected days and put into a string
        let day = []
        if (event.target.sunday.checked) day.push('sunday')
        if (event.target.monday.checked) day.push('monday')
        if (event.target.tuesday.checked) day.push('tuesday')
        if (event.target.wednesday.checked) day.push('wednesday')
        if (event.target.thursday.checked) day.push('thursday')
        if (event.target.friday.checked) day.push('friday')
        if (event.target.saturday.checked) day.push('saturday')
        day = day.join('/')

        // Check all fields are filled in
        if (!day || !(event.target.until.value) || !this.state.details) {
            this.setState({errorMessage: 'Please fill out all fields', isError: true})
            return false
        }

        // Submit validated information and reset error flag
        this.props.handleSubmitDeal({day: day, until: event.target.until.value, details: event.target.details.value})
        this.setState({errorMessage: '', isError: false})
    }

    render() {
        return(
            <section className='new-deal'>
                <form className ='new-deal__form' onSubmit={this.handleSubmit}>
                    <div>
                        <p>Which day/s will your deal run</p>
                        <input type="checkbox" name="sunday" value="sunday" />
                        <label for="sunday">Sunday</label>
                        <input type="checkbox" name="monday" value="monday" />
                        <label for="sunday">Monday</label>
                        <input type="checkbox" name="tuesday" value="tuesday" />
                        <label for="sunday">Tuesday</label>
                        <input type="checkbox" name="wednesday" value="wednesday" />
                        <label for="sunday">Wednesday</label>
                        <input type="checkbox" name="thursday" value="thursday" />
                        <label for="sunday">Thursday</label>
                        <input type="checkbox" name="friday" value="friday" />
                        <label for="sunday">Friday</label>
                        <input type="checkbox" name="saturday" value="saturday" />
                        <label for="sunday">Saturday</label>
                    </div>
                    <div>
                        <p>A short but detailed description of the deal you'd like to offer</p>
                        <input type='textarea' resize='false' name='details' value={this.state.description} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <p>Please select the final day your deal will run</p>
                        <input type='date' name='until' onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button type="submit">Add new deal</button>
                        <button onClick={this.props.handleCancel}>Cancel</button>
                    </div>
                    {this.state.isError ? <p>{this.state.errorMessage}</p> : <></>}
                </form>
            </section>
        );
    }
}

export default AddDealForm