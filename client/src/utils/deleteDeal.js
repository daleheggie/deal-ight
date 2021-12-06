import axios from 'axios';
import { API_URL } from './_globals';

export const deleteDeal = (deal_id) => {
    axios
        .delete(`${API_URL}/deals/${deal_id}`)
        .then(data => {
            console.log(data)
        })

}
