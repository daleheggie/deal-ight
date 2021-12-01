import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const FavouritePlacesList = (props) => {

    let [places, setPlaces] = React.useState([])

    React.useEffect(() => {
        axios
        .get(`http://localhost:5000/profile/favourite/places`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => {
            setPlaces(res.data)
        })
    }, [places])

    if (!places) return <h2>Oops...looks like there was a problem getting the list of places</h2>
    return(
        <>
            <h3>Favourite Places</h3>
            <ul>
                {places.map(place => {
                    return (<li key= {place.id}><Link to={`/places/${place.id}`} >{place.name}</Link></li>)
                })}
            </ul>
        </>
    );
}

export default FavouritePlacesList