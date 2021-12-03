import { addToFavouriteDeals } from "../../utils/addToFavourites"

const FavouriteDealButton = (deal_id) => {
    return(
        <button onClick={() => addToFavouriteDeals(deal_id)}>Add to favourites</button>
    );
}

export default FavouriteDealButton