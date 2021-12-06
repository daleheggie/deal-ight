import { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';
import LandingBanner from '../../components/LandingBanner';
import Footer from '../../components/Footer';

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
            <section>
                {this.state.showSignup ? <SignupForm handleClearSignup={this.handleClearSignup} /> : <LoginForm handleLogin={this.props.handleLogin} handleShowSignup={this.handleShowSignup} />}
                <LandingBanner />
                <p>If you're anything like us, you've undoubtedly been stuck wondering if that awesome happy hour special at your favourite bar is still running, or if the 3-course special is still going at the fancy place in the village.</p>
                <p>Well, we are here to tell you, never again. Just log in to Deal-ight to keep up to date with all the local specials and even keep tabs on all your favourites in one handy location. Goodbye scouring facebook newsfeeds, Hello Deal-ight!</p>
                <Footer />
            </section>
        );
    }
}

export default LandingPage;