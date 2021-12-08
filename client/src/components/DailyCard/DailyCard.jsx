import axios from 'axios';
import React from 'react';
import './DailyCard.scss';
import { API_URL } from '../../utils/_globals';
import { addToFavouriteDeals } from '../../utils/addToFavourites'


const DailyCard = ({ today }) => {
    let [deals, setDeals] = React.useState('');

    React.useEffect(() => {
        axios
        .get(`${API_URL}/deals/${today}`)
        .then(res => {
            setDeals(res.data)
        })
    })
    
    if (!deals) return <h2>LOADING...</h2>
    return(
        <section className='daily-card'>
            <h1 className='daily-card__day'>{today}</h1>
            {deals.map(deal => {
                return(
                    <div className='daily-card__entry' key={deal.id}>
                        <h2 className='daily-card__place'>{deal.name}</h2>
                        <p>{deal.details}</p>
                        <button className='daily-card__button' onClick={() => addToFavouriteDeals(deal.id)}>Add to favourites</button>
                    </div>
                )
            })}
        </section>
    )
}
export default DailyCard