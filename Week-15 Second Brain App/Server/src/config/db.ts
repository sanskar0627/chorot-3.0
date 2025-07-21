import mongoose from "mongoose"

const dbConnect = ()=>{
  mongoose.connect(`${process.env.MONGODB_URI}`).then(()=>{
    console.log("Connected Successfully")
  }).catch((err)=>{
    console.log("Something Wrong",err)
  })
}

export default dbConnect