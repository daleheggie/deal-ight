import './Footer.scss'
import { API_URL } from '../../utils/_globals'

const Footer = () => {
    return(
        <section className='footer'>   
            <div className='footer__name'>
                <h3>Contact the developer</h3>
                <p>Dale Heggie</p>
            </div>
            <div className='footer__phone'>
                <img className='footer__icon' src={`${API_URL}/icons/call-icon.png`} alt='phone icon'/>
                <a className='footer__link' href='tel:+16043884367'>+1 (604)-388-4367</a>
            </div>
            <div className='footer__email'>
                <img className='footer__icon' src={`${API_URL}/icons/email-icon.png`} alt='email icon'/>  
                <a className='footer__link' href='mailto:dale.heggie@hotmail.com'>dale.heggie@hotmail.com</a>
            </div>
        </section>
    )
}

export default Footer