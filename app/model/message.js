'use strict';

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Message = app.model.define('message', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(30),
    content: STRING(500),
    created_at: DATE,
    updated_at: DATE,
  });

  return Message;
};
