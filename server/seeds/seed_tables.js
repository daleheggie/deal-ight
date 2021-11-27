const userData = require('../seed_data/users');
const dealsData = require('../seed_data/deals');
const establishmentData = require('../seed_data/establishments');

exports.seed = function(knex) {
    return knex('users').del()
            .then(()=> {
                return knex('users').insert(userData);
            })
            .then(()=>{
                return knex('establishments').del();
            })
            .then(()=>{
                return knex('establishments').insert(establishmentData);
            })
            .then(()=>{
                return knex('deals').del();
            })
            .then(()=>{
                return knex('deals').insert(dealsData);
            })
}