// import { Sequelize } from "sequelize";
import { INTEGER } from "sequelize";
import sequelize from "../util/database.js";
import { STRING } from "sequelize";


const User  = sequelize.define('user',{
    id :{type:INTEGER,allowNull:false,primaryKey:true,autoIncrement: true},
    
    name :{type:STRING,allowNull:true},
    phone_no :{type:INTEGER,allowNull:true},
    
    email:{type:STRING,allowNull:true, unique: true, }
});

export default User;