import { DataTypes } from 'sequelize'
import { sequelize } from '../Sequelize/SequelizeInit'

const AdminModel = sequelize.define('Admin', {
    // Model attributes are defined here
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});
export { AdminModel }