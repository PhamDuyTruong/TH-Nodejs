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
      await queryInterface.bulkInsert('stations', [{
        name: 'Bến xe miền Tây',
        address: '395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh',
        province: 'HCM',
        createdAt: '2022-10-24 07:16:58',
        updatedAt: '2022-10-24 07:16:58',
      },
      {
        name: 'Bến xe Đà Nẵng',
        address: '395 Kinh Đ. Vương, An Lạc, Tôn Đức Thắng, Thành phố Đà Nẵng',
        province: 'Đà Nẵng',
        createdAt: '2022-10-24 07:28:31',
        updatedAt: '2022-10-24 10:51:57',
      },
      {
        name: 'Bến xe Biên Hòa',
        address: '8 , QL 1K, Đ. Nguyễn Ái Quốc, Kp3, Thành phố Biên Hòa, Đồng Nai',
        province: 'Đồng Nai',
        createdAt: '2022-10-24 07:28:31',
        updatedAt: '2022-10-24 10:51:57',
      },
      {
        name: 'Bến xe Miền Đông',
        address: 'Bình Thắng, Dĩ An, Bình Dương',
        province: 'Bình Dương',
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
    await queryInterface.bulkDelete('stations', null, {});
  }
};
