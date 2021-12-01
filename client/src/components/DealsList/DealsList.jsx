import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const DealsList = (props) => {

    let [deals, setDeals] = React.useState([])

    React.useEffect(() => {
        axios
        .get(`http://localhost:5000/deals`)
        .then(res => {
            setDeals(res.data)
        })
    }, [setDeals])

    if (!deals) return <h2>Oops...looks like there was a problem getting the list of deals</h2>
    
    return(
        <>
            <ul>
                {deals.map(deal => {
                    return (<li><Link to={`/places/${deal.establishment_id}`}>{deal.name}</Link> - {deal.details} - {deal.day}</li>)
                })}
            </ul>
        </>
    );
}

export default DealsList