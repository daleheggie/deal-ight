const knex = require('knex')(require('../knexfile').development);

const dealsByDay = (req,res) => {
    knex('deals')
        .join('establishments', 'establishments.id', 'deals.establishment_id')
        .where('deals.day', 'like', `%${req.params.day}%`)
        .select('establishments.name','deals.details','deals.until')
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    dealsByDay
}