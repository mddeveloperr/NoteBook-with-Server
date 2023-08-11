const mongoose= require('mongoose');
const {Schema}=mongoose;
const notesSchema = new Schema({
   title:{
        type:String,
        require:true
   },
   description:{
    type:String,
    require:true,
    
},
tag:{
    type:String,
    default:"Dilawar"
},
date:{
    type:Date,
    default:Date.now,
}
    
  });

  module.exports=mongoose.model("notes",notesSchema)