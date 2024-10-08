import { where } from 'sequelize';
import User from '../models/user.js';

export function getAddProduct(req, res, next) {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/edit-product',
    editing:false,
  });
}

export function postAddProduct(req, res, next) {
  const name = req.body.name;
  const phone_no = req.body.phone_no;
  const email = req.body.email;

  User.create({    
    name : name,
    phone_no : phone_no,
    email : email,
  })
  .then(data=>{
  
    res.json(data) 
  })
  .catch(err=>{console.log('-->',err);
  })
}

export function getEditProduct(req, res, next) {
  const id = req.params.userId
  
  User.findByPk(id)
  .then(user=>{   
    res.json(user)
  })
  .catch(err => {console.log(err);
  })
}


export function postEditProduct(req,res,next){
  
  const userId = req.params.userId;
  const updatedname = req.body.name;
  const updatedphone_no = req.body.phone_no;
  const updatedemail = req.body.email;

  // this will not directly save data in db we need to call save
  User.findByPk(userId)
  .then(user =>{
    user.name = updatedname;
    user.phone_no = updatedphone_no;
    user.email = updatedemail;
    user.save();
    res.json({'msg':"i am good from server sode"})

  })
  // this catch will handel both .then() error
  .catch(err =>{console.log(err);
  })  
}

// show all admins product
export function getProducts(req, res, next) {
  User.findAll()
  .then((users)=>{
   
    res.json(users);
  })
  .catch(err=>{
    console.log(err);
  });
}

export function postDeleteProduct(req,res,next){
  const userId = req.params.userId;
 
  
  User.findByPk(userId)
.then((user)=>{
    user.destroy();
    res.json({"msg":"user deleted."})
  })
  .catch(err=>{
      console.log('NOT DELETED',err);
    });
}





