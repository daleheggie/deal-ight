import axios from 'axios';
import { API_URL } from './_globals';

export const addToFavouriteDeals = (deal_id) => {
    axios
        .post(`${API_URL}/profile/favourite/deals`, {
            deal_id: deal_id
        }, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => {
            // console.log(res)
        })
        .catch(err => {
            throw err
        })
}
export const addToFavouritePlaces = (establishment_id) => {

    axios
        .post(`${API_URL}/profile/favourite/places`, {
            establishment_id: establishment_id
        }, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => {
            // console.log(res)
        })
        .catch(err => {
            throw err
        })
}