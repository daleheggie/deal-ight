const knex =
  process.env.NODE_ENV === 'production'
    ? require('knex')(require('../knexfile').production)
    : require('knex')(require('../knexfile').development);

const allPlaces = (req,res) => {
    knex('establishments')
        .then(data => {
            res.json(data)
        })
}
const placeById = (req,res) => {
    knex('establishments')
        .where({id: req.params.establishment_id})
        .then(data => {
            res.json(data)
        })
}

module.exports = {
    allPlaces,
    placeById
}