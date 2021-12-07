import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { removeFromFavouritePlaces } from "../../utils/removeFromFavourites";
import './FavouritePlacesList.scss'

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
        <section className='favourite-places'>
            {!(places.length === 0) ? <h3 className='favourite-places__title'>Favourite Places</h3> : <></> }
            <ul className='favourite-places__list'>
                {!(places.length===0) ? <li className='favourite-places__entry--headings'>
                    <div className='favourite-places__place'>Place</div>
                </li> : <></> }
                {places.map(place => {
                    return (<li className='favourite-places__entry' key= {place.id}>
                                <Link className='favourite-places__link' to={`/places/${place.id}`}><div className='favourite-places__place'  >{place.name}</div></Link>
                                <button className='favourite-places__button' onClick={()=>removeFromFavouritePlaces(place.id)}>Remove</button>
                            </li>)
                })}
            </ul>
        </section>
    );
}

export default FavouritePlacesList