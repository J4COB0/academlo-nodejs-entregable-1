const { DataTypes } = require('sequelize');

// Utils
const { sequelize } = require('../utils/dataBase');

const Todo = sequelize.define('todo', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'active'
    }
});

module.exports = { Todo };
