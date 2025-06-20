// videos [icon: video , color:red] {
//   id string pk
//   videoFile string
//   thumbnail string
//   owner ObjectId user
//   title  string
//   description String
//   duration number
//   views  number
//   isPublished boolean
//   createdAt Date
//   UpdatedAt Date
// }

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
    {
      VideoFile : {
        type :String, // cloudinary url
        required : true,
      },
      title: {
        type :String,
        required :true
      },
      thumbnail: {
        type :String, // cloudinary url
        required : true
      },
      description : {
        type :String,
        required: true
      },
      views : {
        type : Number,
        default : 0 // default value for views is 0
      },
      duration : {
        type : Number, // duration in seconds
        required : true
      },
       isPublished : {
        type :Boolean,
        default : false // default value for isPublished is false
       },
       owner: {
        type: Schema.types.ObjectId,
        ref: "User"
       }


    },
    {
        timestamps :true
    }

)