
const mongoose=require("mongoose");

const mongooseUri='mongodb+srv://alidilawar114:Dilawar2525%23@cluster0.gba4jn4.mongodb.net/';



const connectToMongoose =async()=>{
  try{
   await  mongoose.connect(mongooseUri);
        console.log("connected successfully"); 
  }catch{
    console.log("Here error");
  } 
}
module.exports=connectToMongoose;