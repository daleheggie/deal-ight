import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addToFavouriteDeals } from "../../utils/addToFavourites";
import { deleteDeal } from '../../utils/deleteDeal'
import './DealsList.scss'

const DealsList = ({establishment_id, user, removeButton}) => {

    let [deals, setDeals] = React.useState([])

    React.useEffect(() => {
        axios
        .get(`http://localhost:5000/deals`)
        .then(res => {
            setDeals(res.data)
        })
    })

    if (!deals) return <h2>Oops...looks like there was a problem getting the list of deals</h2>

    return(
        <>
            <ul className='deal-list'>
                {/* If the establishment id is given, then we want to show only deals for that particular establishment */}
                {establishment_id 
                        ? deals = deals.filter(deal => {
                            return(deal.establishment_id === establishment_id)
                        }).map(deal => {
                            return (<li>
                                        {deal.details} - {deal.day}{user ? <button className={removeButton ? 'deal-list__add-favourite-button--hidden' : 'deal-list__add-favourite-button'} onClick={() => addToFavouriteDeals(deal.id)}>Add to favourites</button> : <></>}
                                        {removeButton ? <button onClick={() => deleteDeal(deal.id)}>Remove this deal</button>
                                            : <></>}
                                    </li>)
                        })
                        : deals.map(deal => {
                            return (<li>
                                        {/* Deal description and a link to the business page */}
                                        <Link to={`/places/${deal.establishment_id}`}>{deal.name}</Link> - {deal.day} - {deal.details}
                                        
                                        {/* Places an 'add to favourites button if there is a user logged in */}
                                        {user ? <button onClick={() => addToFavouriteDeals(deal.id)}>Add to favourites</button>
                                            : <></>}
                                    </li>)
                        })}
                
            </ul>
        </>
    );
}

export default DealsList