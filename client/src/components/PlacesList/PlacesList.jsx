import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addToFavouritePlaces } from "../../utils/addToFavourites";

const PlacesList = ({user}) => {

    let [places, setPlaces] = React.useState([])

    React.useEffect(() => {
        axios
        .get(`http://localhost:5000/places`)
        .then(res => {
            setPlaces(res.data)
        })
    }, [setPlaces])

    if (!places) return <h2>Oops...looks like there was a problem getting the list of places</h2>
    return(
        <>
            <ul>
                {places.map(place => {
                    return (<li key={place.id}>
                                <Link to={`/places/${place.id}`} >{place.name}</Link> - {place.cuisine} - {place.phone}
                                {/* Places an 'add to favourites button if there is a user logged in */}
                                {user ? <button onClick={() => addToFavouritePlaces(place.id)}>Add to favourites</button>
                                            : <></>}
                            </li>)
                })}
            </ul>
        </>
    );
}

export default PlacesList