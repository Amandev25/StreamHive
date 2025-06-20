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
import mongoose from "mongoose";
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

export const User = mongoose.model("User", userSchema);