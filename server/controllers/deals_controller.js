const knex =
  process.env.NODE_ENV === 'production'
    ? require('knex')(require('../knexfile').production)
    : require('knex')(require('../knexfile').development);

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

const addDeal = (req,res) => {
    res.json(req.body)
    knex('deals')
        .insert({day: req.body.day,
                until: req.body.until,
                establishment_id: req.body.establishment_id,
                details: req.body.details})
        .then(data => {
            res.json(data)
        })
}

const deleteDeal = (req,res) => {
    knex('deals')
        .where({id: req.params.deal_id})
        .del()
        .then(data => {
            res.json(data)
        })
}

module.exports = {
    dealsByDay,
    allDeals,
    addDeal,
    deleteDeal
}