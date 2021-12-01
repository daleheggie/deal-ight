const { json } = require('express');

const knex = require('knex')(require('../knexfile').development);

const allPlaces = (req,res) => {
    knex('establishments')
        .then(data => {
            res.json(data)
        })
}

module.exports = {
    allPlaces
}