'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('messages', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(30),
      content: STRING(500),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('messages');
  },
};