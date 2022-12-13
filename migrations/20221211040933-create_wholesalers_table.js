'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     */
      await queryInterface.createTable('Wholesaler',{
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
     * Example:
    */
      await queryInterface.dropTable('wholesaler');
  }
};
