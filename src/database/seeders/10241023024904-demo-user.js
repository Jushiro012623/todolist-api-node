'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
   await queryInterface.bulkInsert('Users', [{
     username: 'johndoe',
     email: 'johndoe@gmail.com',
     password: 'password',
     createdAt: new Date(),
     updatedAt: new Date(),
   },
   {
    username: 'ivandev',
    email: 'dev.ivan@gmail.com',
    password: 'password',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
