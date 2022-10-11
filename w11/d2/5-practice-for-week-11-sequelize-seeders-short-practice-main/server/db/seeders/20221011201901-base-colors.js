'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    // await queryInterface.bulkInsert('Colors', [
    //   {
    //     name: 'r'
    //   },
    //   {
    //     name: 'blue'
    //   },
    //   {
    //     name: 'yellow'
    //   }
    // ]);
    const {Color} = require('../models')
    await Color.create({name: 'r'})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Colors', {
      name: ['red', 'blue', 'yellow']
    });  // DELETE FROM Colors WHERE name IN ('red', 'blue', 'yellow')
  }
};
