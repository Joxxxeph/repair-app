const { DataTypes } = require('sequelize')
const { sequelize } = require('./../config/database/database')

const Repair = sequelize.define('repairs', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,

    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
    }
})

module.exports = Repair