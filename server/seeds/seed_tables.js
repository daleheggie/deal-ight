const userData = require('../seed_data/users');
const dealsData = require('../seed_data/deals');
const establishmentData = require('../seed_data/establishments');
const usersDeals = require('../seed_data/users_deals');
const usersEstablishments = require('../seed_data/users_establishments');

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
            .then(()=>{
                return knex('users_deals').del();
            })
            .then(()=>{
                return knex('users_deals').insert(usersDeals);
            })
            .then(()=>{
                return knex('users_establishments').del();
            })
            .then(()=>{
                return knex('users_establishments').insert(usersEstablishments);
            })
}