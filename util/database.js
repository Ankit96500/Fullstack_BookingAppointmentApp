// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'nodeJS',
//     password:'1Ankit@2002'
// });

// module.exports = pool.promise();

// sequelize:

// import { Sequelize } from "sequelize";

// const sequelize = new Sequelize('nodejs','root','1Ankit@2002',{dialect:'mysql',host:'localhost'});

// export { sequelize }
// sequelize works with promises..
import Sequelize from 'sequelize';

const sequelize = new Sequelize('nodejs','root','1Ankit@2002',{dialect:'mysql',host:'localhost',logging:false});

export default sequelize;



