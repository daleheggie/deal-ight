import axios from 'axios';
import React from 'react';
import { addToFavouriteDeals } from '../../utils/addToFavourites';


const DailyCard = ({ today }) => {
    let [deals, setDeals] = React.useState('');

    React.useEffect(() => {
        axios
        .get(`http://localhost:5000/deals/${today}`)
        .then(res => {
            setDeals(res.data)
        })
    })
    
    if (!deals) return <h2>LOADING...</h2>
    return(
        <>
            <h1>{today}</h1>
            {deals.map(deal => {
                return(
                    <div key={deal.id}>
                        <h2>{deal.name}</h2>
                        <p>{deal.details}</p>
                        <button onClick={() => addToFavouriteDeals(deal.id)}>Add to favourites</button>
                    </div>
                )
            })}
        </>
    )
}
export default DailyCard