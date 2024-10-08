import { join } from 'path';
import express from 'express';
import bodyParser  from 'body-parser';
import cors from "cors";
// import cors from 'cors';
const app = express();


// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

app.use(cors())

// server static
app.use(express.static(join(process.cwd(), 'public')));

import User from './models/user.js';
import sequelize  from './util/database.js';

// error- controller
import { get404 } from './controllers/error.js';

// load routes
import adminRoutes from './routes/admin.js';


//load routes
app.use('/admin', adminRoutes);

app.use(get404);


// we ceate user if no user we have and cart also
sequelize
// .sync({force:true})
.sync()
.then(res=>{
    console.log('connected db');
    app.listen(3000);
})
.catch(err =>{
    console.log(err);
    
})
