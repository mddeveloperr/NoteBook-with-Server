const Express=require('express');
const router=Express.Router();
const User=require('../models/Users');

router.post('/',(req,res)=>{
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.send(req.body);
})
module.exports=router;