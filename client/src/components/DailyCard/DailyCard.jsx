import axios from 'axios';
import React from 'react';

const DailyCard = ({ today }) => {
    let [deals, setDeals] = React.useState('');

    React.useEffect(() => {
        axios
        .get(`http://localhost:5000/deals/${today}`)
        .then(res => {
            setDeals(res.data)
        })
    }, [setDeals])
    
    if (!deals) return <h2>LOADING...</h2>
    return(
        <>
            <h1>{today}</h1>
            {deals.map(deal => {
                return(
                    <>
                        <h2>{deal.name}</h2>
                        <p>{deal.details}</p>
                    </>
                )
            })}
        </>
    )
}
export default DailyCard