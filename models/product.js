import { INTEGER, STRING, DOUBLE } from 'sequelize';

import sequelize  from '../util/database.js';

const Product = sequelize.define('product',{
  id:{type: INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
  
  title:{type:STRING},
  
  price:{type: DOUBLE,allowNull:true},
  
  imageUrl:{type:STRING,allowNull: true},

  description :{ type:STRING,allowNull:true}
});
export default Product;
