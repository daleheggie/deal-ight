const knex = require('knex')(require('../knexfile').development);

const dealsByDay = (req,res) => {
    knex('deals')
        .join('establishments', 'establishments.id', 'deals.establishment_id')
        .where('deals.day', 'like', `%${req.params.day}%`)
        .select('deals.id','deals.details','deals.day','deals.until','deals.establishment_id','establishments.name')
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })
}

const allDeals = (req,res) => {
    knex('deals')
        .join('establishments', 'establishments.id', 'deals.establishment_id')
        .select('deals.id','deals.details','deals.day','deals.until','deals.establishment_id','establishments.name')
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    dealsByDay,
    allDeals
}