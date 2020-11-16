exports.up = function (knex) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments('id');
    tbl.text('make', 20).unique().notNullable();
    tbl.text('model', 20).unique().notNullable();
    tbl.text('VIN', 30).notNullable();
    tbl.integer('mileage', 10).unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
