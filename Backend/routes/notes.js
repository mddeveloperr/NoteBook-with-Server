const Express=require('express');
const router=Express.Router();
const Notes=require('../models/Notes');

router.get('/',(req,res)=>{
    console.log(req.body);
    const notes=Notes(req.body);
    notes.save();
 
    res.send(req.body);
})
module.exports=router;