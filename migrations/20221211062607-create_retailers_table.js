'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Retailer',{
      id:{
          type:Sequelize.INTEGER(255),
          allowNull:false,
          primaryKey:true,
          autoIncrement:true
      },
      name:{
          type:Sequelize.STRING,
          allowNull:false,
      },
      mobile_number:{
          type:Sequelize.STRING,
          allowNull:false,
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     */
      await queryInterface.dropTable('Retailer');
     
  }
};
