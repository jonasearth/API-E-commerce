import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('ecommerce-api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


export { sequelize }