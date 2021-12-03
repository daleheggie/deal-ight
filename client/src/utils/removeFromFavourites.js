import axios from 'axios';
import { API_URL } from './_globals';

export const removeFromFavouriteDeals = (deal_id) => {
    axios
        .delete(`${API_URL}/profile/favourite/deals/${deal_id}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(data => {
            // console.log(data)
        })

}

export const removeFromFavouritePlaces = (place_id) => {
    axios
        .delete(`${API_URL}/profile/favourite/places/${place_id}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(data => {
            // console.log(data)
        })

}
