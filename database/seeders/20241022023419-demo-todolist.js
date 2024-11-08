'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TodoLists', [
      {
        title: 'GYM',
        description: 'Go to gym you fat freak',
        userId: 1,
        complete: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'SHOPPING',
        description: 'Go shopping you lazy freak',
        complete: 1,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TodoLists', null, {});
  },
};