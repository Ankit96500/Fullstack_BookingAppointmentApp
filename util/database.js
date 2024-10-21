// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'nodeJS',
//     password:'********'
// });

// module.exports = pool.promise();

// sequelize:

// import { Sequelize } from "sequelize";

// const sequelize = new Sequelize('nodejs','root','*******',{dialect:'mysql',host:'localhost'});

// export { sequelize }
// sequelize works with promises..
import Sequelize from 'sequelize';

const sequelize = new Sequelize('nodejs','root','********',{dialect:'mysql',host:'localhost',logging:false});

export default sequelize;



