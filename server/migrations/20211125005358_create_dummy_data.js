
exports.up = function(knex) {
    return knex
            .schema
            .createTable('users', (table) => {
                table.increments('id').primary();
                table.string('username').notNullable();
                table.string('password').notNullable();
                table.string('name').notNullable();
                table.string('favourite_id').defaultTo('');
                table.string('favourite_deal_id').defaultTo('');
                table.timestamp('updated_at').defaultTo(knex.fn.now());
            })
            .createTable('establishments', table => {
                table.increments('id').primary();
                table.string('name').notNullable();
                table.string('phone');
                table.string('menu');
                table.string('cuisine').notNullable();
                table.string('address');
                table.timestamp('updated_at').defaultTo(knex.fn.now());
            })
            .createTable('deals', table => {
                table.increments('id').primary();
                table.string('day').notNullable();
                table.date('until').notNullable();
                table.integer('establishment_id')
                    .unsigned()
                    .references('id')
                    .inTable('establishments')
                    .onUpdate('CASCADE')
                    .onDelete('SET NULL');
                table.string('details').notNullable();
                table.integer('likes').defaultTo(0);
                table.integer('dislikes').defaultTo(0);
                table.timestamp('updated_at').defaultTo(knex.fn.now());
            })
};

exports.down = function(knex) {
    return knex.schema.dropTable('deals').dropTable('establishments').dropTable('users')
};
