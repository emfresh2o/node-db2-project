exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          make: 'Ford',
          model: 'Fiesta',
          VIN: 'testing5',
          mileage: 20000,
          color: 'Blue',
        },
        {
          make: 'Toyota',
          model: 'Camry',
          VIN: 'testing6',
          mileage: 30000,
          color: 'Red',
        },
        {
          make: 'Chevy',
          model: 'Blazer',
          VIN: 'testing7',
          mileage: 50000,
          color: 'White',
        },
        {
          make: 'Ford',
          model: 'Mustang',
          VIN: 'testing8',
          mileage: 10000,
          color: 'Black',
        },
      ]);
    });
};
