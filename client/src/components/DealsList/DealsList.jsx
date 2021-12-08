import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addToFavouriteDeals } from "../../utils/addToFavourites";
import { parseDays } from "../../utils/parseDays";
import { deleteDeal } from '../../utils/deleteDeal';
import { API_URL } from "../../utils/_globals";
import './DealsList.scss';

const DealsList = ({establishment_id, user, removeButton}) => {

    let [deals, setDeals] = React.useState([])

    React.useEffect(() => {
        axios
        .get(`${API_URL}/deals`)
        .then(res => {
            setDeals(res.data)
        })
    })

    if (!deals) return <h2>Oops...looks like there was a problem getting the list of deals</h2>

    return(
        <>
            <ul className='deal-list'>
                {!establishment_id ? <li className='deal-list__entry--headings'>
                                        <div className='deal-list__place-column'>Place</div>
                                        <div className='deal-list__day-column'>Day</div>
                                        <div className='deal-list__deal-column'>Deal</div>
                                    </li>
                                    : <></>}
                {/* If the establishment id is given, then we want to show only deals for that particular establishment */}
                {establishment_id 
                        ? deals = deals.filter(deal => {
                            return(deal.establishment_id === establishment_id)
                        }).map(deal => {
                            return (<li className='deal-list__entry'>
                                        <div className='deal-list__day-column'>{parseDays(deal.day)}</div>
                                        <div className='deal-list__deal-column'>{deal.details}</div>
                                        {/* If there is a user logged in, we want to show the add to favourite button */}
                                        {user ? <button className={removeButton ? 'deal-list__button--hidden' : 'deal-list__button'} onClick={() => addToFavouriteDeals(deal.id)}>Add favourite</button> : <></>}
                                        {/* If the remove button flag is present, the above button should be hidden and the remove button shown */}
                                        {removeButton ? <button className='deal-list__button' onClick={() => deleteDeal(deal.id)}>Remove</button>
                                            : <></>}
                                    </li>)
                        })
                        : deals.map(deal => {
                            return (<Link className='deal-list__link' to={`/places/${deal.establishment_id}`}><li className='deal-list__entry'>
                                        {/* Deal description and a link to the business page */}
                                        <div className='deal-list__place-column'>{deal.name}</div>
                                        <div className='deal-list__day-column'>{parseDays(deal.day)}</div>
                                        <div className='deal-list__deal-column'>{deal.details}</div>
                                    </li></Link>)
                        })}  
            </ul>
        </>
    );
}

export default DealsList