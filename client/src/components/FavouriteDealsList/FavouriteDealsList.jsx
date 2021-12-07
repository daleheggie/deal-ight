import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { removeFromFavouriteDeals } from '../../utils/removeFromFavourites';
import { parseDays } from "../../utils/parseDays";
import './FavouriteDealsList.scss'

const FavouriteDealsList = ({setFavouriteDeals}) => {

    let [deals, setDeals] = React.useState([])

    React.useEffect(() => {
        axios
        .get(`http://localhost:5000/profile/favourite/deals`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => {
            setDeals(res.data)
        })
    }, [deals])

    if (!deals) return <h2>Oops...looks like there was a problem getting the list of deals</h2>
    
    return(
        <section className='favourite-deals'>
            <h3 className='favourite-deals__title'>Favourite Deals</h3>
            <ul className='favourite-deals__list'>
                <li className='favourite-deals__entry--headings'>
                    <div className='favourite-deals__day-column'>Day</div>
                    <div className='favourite-deals__deal-column'>Deal</div>
                </li>
                {deals.map(deal => {
                    return (<li className='favourite-deals__entry' key={deal.id}>
                                    <Link className='favourite-deals__link' to={`/places/${deal.establishment_id}`}><div className='favourite-deals__day-column'>{parseDays(deal.day)}</div>
                                    <div className='favourite-deals__deal-column' >{deal.details}</div></Link>
                                    <button className='favourite-deals__button' onClick={()=>removeFromFavouriteDeals(deal.id)}>Remove</button>
                            </li>)
                })}
            </ul>
        </section>
    );
}

export default FavouriteDealsList