const router=require('express').Router();

const categoryController= require('../controllers/categoryController');
// promisified route
/*
app.get('/category',(req,res)=>{
    database.pool.query('SELECT * FROM category').then((result)=>{
        return res.status(200).json(result.rows)
    }).catch((error)=>{
        return res.status(500).json({
            error: error.message
        })
    })
});*/

router.get('/category', categoryController.getAllCategories);

router.post('/category',categoryController.createCategory);

router.put('/category/:id', categoryController.updateCategory);

router.delete('/category/:id',categoryController.deleteCategory);

module.exports =router;