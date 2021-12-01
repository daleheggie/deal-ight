import axios from 'axios';

export const removeFromFavouriteDeals = (deal_id) => {
    axios
        .delete(`http://localhost:5000/profile/favourite/deals/${deal_id}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(data => {
            console.log(data)
        })

}
