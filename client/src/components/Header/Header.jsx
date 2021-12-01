import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <section className='Header'>
            <img src='http://localhost:5000/Dealight-logo.png' alt='Main logo'></img>
            <ul>
                <li><NavLink to='/' exact className={(isActive) => "header__link" + (isActive ? "--active" : "")}>Home</NavLink></li>
                <li><NavLink to='/places' exact className={(isActive) => "header__link" + (isActive ? "--active" : "")}>Places</NavLink></li>
                <li><NavLink to='/deals' exact className={(isActive) => "header__link" + (isActive ? "--active" : "")}>Deals</NavLink></li>    
            </ul>
        </section>
    );
}

export default Header