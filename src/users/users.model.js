const { DataTypes } = require('sequelize')
const { sequelize } = require('./../config/database/database')

const User = sequelize.define('users', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    role: {
        type: DataTypes.ENUM('client', 'employee'),
        allowNull: false,
        
    },
    status: {
        type: DataTypes.ENUM('available', 'disable'),
        allowNull: false,
        defaultValue: 'available'
    }
})

module.exports = User