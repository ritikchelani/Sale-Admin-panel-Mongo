'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
    */
     await queryInterface.createTable('Stock',
     
     
     {
      retailer_id:{
          type:Sequelize.INTEGER(255),
          allowNull:false,
          primaryKey:true,
          ref:"Retailer"
      },
      wholesaler_id:{
          type:Sequelize.INTEGER(255),
          allowNull:false,
          primaryKey:true,
          ref:"Wholesaler"
      },
      
      stock_amount:{
          type:Sequelize.STRING,
          allowNull:false,
      },
      date:{
          type:Sequelize.DATE,
          allowNull:false
      }
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
    */
      await queryInterface.dropTable('Stock');
  }
};
