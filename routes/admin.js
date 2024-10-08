import path from 'path';

import { Router } from 'express';

import { getAddProduct, getProducts, postAddProduct, getEditProduct, postEditProduct, postDeleteProduct } from '../controllers/admin.js';

const router = Router();

// /admin/add-product => GET
router.get('/add-user', getAddProduct);

// /admin/products => GET
router.get('/users', getProducts);

// /admin/add-product => POST
router.post('/add-user', postAddProduct);

router.get('/edit-user/:userId',getEditProduct);

router.put('/edit-user/:userId',postEditProduct);

// delete product
router.delete('/delete-user/:userId',postDeleteProduct);


export default router;
