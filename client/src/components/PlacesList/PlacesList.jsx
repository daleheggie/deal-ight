import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addToFavouritePlaces } from "../../utils/addToFavourites";
import './PlacesList.scss'

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
        <section className='places'>
            <ul className='places__list'>
                <li className='places__entry--headings'>
                    <div className='places__place-column'>Place</div>
                    <div className='places__cuisine-column'>Cuisine</div>
                </li>
                {places.map(place => {
                    return (<li className='places__entry' key={place.id}>
                                <Link className='places__link' to={`/places/${place.id}`}><div className='places__place-column'>{place.name}</div>
                                <div className='places__cuisine-column'>{place.cuisine}</div></Link>
                                {/* Places an 'add to favourites button if there is a user logged in */}
                                {user ? <button className='places__button' onClick={() => addToFavouritePlaces(place.id)}>Add favourite</button>
                                            : <></>}
                            </li>)
                })}
            </ul>
        </section>
    );
}

export default PlacesList