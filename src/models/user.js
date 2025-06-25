// users [icon: user, color: blue] {
//   id string pk
//   watchHistory ObjectId[] videos
//   username string
//   email String
//   fullName string
//   avatar string 
//   coverimage String
//   Password String
//   refreshToken String
//   CreatedAt Date
//   UpdatedAt Date
// }
import mongoose , {Schema }from "mongoose";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken" ;
const userSchema = new Schema(
    {
     id : {
        type :String,
        required : true,
        unique :true,
        lowercase : true,
        trim:true, // remove whitespace
        index:true // index for faster search
     },
     email : {
        type :String,
        required :true,
        unique :true,
        lowercase :true,
        trim:true

     },
     fullname : {
        type : String,
        required : true,
        trim :true,
        index:true 
     },
     avatar: {
        type :  String,
        required : true,
     },
     coverImage :{
        type : String,
        
     },
     watchHistory : [
        {
           type : Schema.Types.ObjectId, // this will store the ObjectId of the Video model
           ref: "Video" // this will reference the Video model  
        }
     ],
     password : {
        type:String,
        required : [true, "Password is required"],
     },
     refreshToken: {
        type :String
     },
     

    },
    { timestamps :true}
)
userSchema.pre("save" , async function(next){
    if(!this.isModified("password"))
    {
      return next();
    }
    this.password = bycrypt.hash(this.password, 10);
})

userSchema.methods.isPasswordCorrect = async function(password) {
   return await bycrypt.compare(password, this.password); 
}
userSchema.methods.generateAccessToken = function(){
   // Generate an access token using the user's id and a secret key
   // Short Lived Access token 
   return jwt.sign({
      _id: this.id,
      email: this.email,
      username: this.username,
      fullname:this.fullname
   },
    process.env.Refreshtoken 
   , 
 {
  expiresIn: process.env.AccessToken_Expiry // 1 hour expiration
 });
}
userSchema.methods.generateRefreshToken = function(){
   // Generate an access token using the user's id and a secret key
   // Short Lived Access token 
   return jwt.sign({
      _id: this.id,
      
   },
    process.env.RefreshtokenSecret
   , 
 {
  expiresIn: process.env.RefreshtokenSecret // 1 hour expiration
 });
}

export const User = mongoose.model("User", userSchema);