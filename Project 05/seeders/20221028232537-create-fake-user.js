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
     await queryInterface.bulkInsert('users', [{
        name: 'Trường Phạm',
        email: 'duytruong5437@gmail.com',
        password: '1234556778',
        numberPhone: '0918273645',
        avatar: 'https://azpet.com.vn/wp-content/uploads/2021/06/Husky.jpg',
        type: 'ADMIN',
        createdAt: '2022-10-24 07:28:31',
        updatedAt: '2022-10-24 10:51:57',
      },
      {
        name: 'Nghi Phạm',
        email: 'nghipham2003@gmail.com',
        password: '1234556789',
        numberPhone: '0918273645',
        avatar: 'https://azpet.com.vn/wp-content/uploads/2021/06/Husky.jpg',
        type: 'ADMIN',
        createdAt: '2022-10-24 07:28:31',
        updatedAt: '2022-10-24 10:51:57',
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
     await queryInterface.bulkDelete('users', null, {});
  }
};
