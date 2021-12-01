import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { removeFromFavouriteDeals } from '../../utils/removeFromFavourites';

const FavouriteDealsList = (props) => {

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
        <>
            <h3>Favourite Deals</h3>
            <ul>
                {deals.map(deal => {
                    return (<li key={deal.id}>
                                    {deal.day} - <Link to={`${deal.establishment_id}`}>{deal.details}</Link>
                                    <button onClick={()=>removeFromFavouriteDeals(deal.id)}>Remove from favourites</button>
                            </li>)
                })}
            </ul>
        </>
    );
}

export default FavouriteDealsList