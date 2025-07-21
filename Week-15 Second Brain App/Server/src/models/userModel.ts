import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {type: String, require: true},
  email: {type: String,require:true,unique:true},
  password: {type:String,require: true}
})

const user = mongoose.model("User",userSchema);

export default user;