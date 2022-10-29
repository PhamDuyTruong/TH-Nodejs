'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('trips', [{
        fromStation: 1,
        toStation: 2,
        startTime: '2022-03-15 08:40:05',
        price: 200000,
        createdAt: '2022-10-28 05:58:28',
        updatedAt: '2022-10-28 05:59:43'
      },
      {
        fromStation: 1,
        toStation: 4,
        startTime: '2022-03-15 08:40:05',
        price: 250000,
        createdAt: '2022-10-28 05:58:28',
        updatedAt: '2022-10-28 05:59:43'
      },
      {
        fromStation: 3,
        toStation: 4,
        startTime: '2022-03-15 08:40:05',
        price: 300000,
        createdAt: '2022-10-28 05:58:28',
        updatedAt: '2022-10-28 05:59:43'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('trips', null, {});
  }
};
