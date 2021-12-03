const knex = require('knex')(require('../knexfile').development);

const getUser = (req,res) => {

    //Get a specific user by their id
    knex('users')
        .where({id: req.decoded.data})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json({error: `Error retrieving user with id ${req.decoded.data}`})
        })
}

const deleteUser = (req,res) => {
    knex('users')
        .where({id: req.decoded.data})
        .del()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })
}

const getUserFavouriteDeals = (req,res) => {
    knex('deals')
    // .leftJoin('establishments', 'establishment.id', 'deals.establishment_id')
        .whereIn('id', 
            knex('users_deals')
            .select('deal_id')
            .where('user_id', req.decoded.data))
        .then(data => {
            res.json(data)
        })
}

const getUserFavouritePlaces = (req,res) => {
    knex('establishments')
        .whereIn('id', 
            knex('users_establishments')
            .select('establishment_id')
            .where('user_id', req.decoded.data))
        .then(data => {
            res.json(data)
        })
}

const addToFavouriteDeals = (req,res) => {
    knex('users_deals')
        .insert({user_id: req.decoded.data,
                deal_id: req.body.deal_id})
        .then(data => {
            res.json(data)
        })
}

const addToFavouritePlaces = (req,res) => {
    knex('users_establishments')
        .insert({user_id: req.decoded.data,
                establishment_id: req.body.establishment_id})
        .then(data => {
            res.json(data)
        })
}

const deleteFavouriteDeal = (req,res) => {
    knex('users_deals')
        .where({user_id: req.decoded.data,
                deal_id: req.params.deal_id})
        .del()
        .then(data => {
            res.json(data)
        })
}

const deleteFavouritPlace = (req,res) => {
    knex('users_establishments')
        .where({user_id: req.decoded.data,
                establishment_id: req.params.place_id})
        .del()
        .then(data => {
            res.json(data)
        })
}

module.exports = {
    getUser,
    deleteUser,
    getUserFavouriteDeals,
    getUserFavouritePlaces,
    addToFavouriteDeals,
    addToFavouritePlaces,
    deleteFavouriteDeal,
    deleteFavouritPlace
}