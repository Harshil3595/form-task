const express=require('express');
const { getalldata, storealldetails } = require('../controller/detailsController');

const router = express.Router();

router.get('/info',getalldata);
router.post('/add',storealldetails)

module.exports=router