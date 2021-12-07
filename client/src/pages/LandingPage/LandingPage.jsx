import { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';
import LandingBanner from '../../components/LandingBanner';
import Footer from '../../components/Footer';
import './LandingPage.scss'

class LandingPage extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        showSignup: false
    }

    handleShowSignup = () => {
        this.setState({ showSignup: true })
    }
    handleClearSignup = () => {
        this.setState({ showSignup: false })
    }
    render() {
        return (
            <section className='landing-page'>
                <LandingBanner />
                {this.state.showSignup ? <SignupForm handleClearSignup={this.handleClearSignup} /> : <LoginForm handleLogin={this.props.handleLogin} handleShowSignup={this.handleShowSignup} />}
                <h2 className='landing-page__subtitle'>Your hand-held guide to all the local's only food and drink specials in town</h2>
                <p className='landing-page__about'>If you're anything like us, you've undoubtedly been stuck wondering if that awesome happy hour special at your favourite bar is still running, or if the 3-course special is still going at the fancy place in the village.</p>
                <p className='landing-page__about'>Well, we are here to tell you, never again. Just log in to Deal-ight to keep up to date with all the local specials and even keep tabs on all your favourites in one handy location. Goodbye scouring facebook newsfeeds, Hello Deal-ight!</p>
                <Footer />
            </section>
        );
    }
}

export default LandingPage;