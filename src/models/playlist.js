
// PlayList [icon: book-open] {
//   id string pk
//   name String 
//   Description String
//   CreatedAt Date
//   UpdatedAt Date
//   Videos ObjectId[] Videos
//   Owner ObjectId Users
// }

import mongoose from "mongoose";

const playlistSchema = new Schema(
    {
      name: {
        type : String,
        required : true,
      },
      description: {
        type :String,
        requiredd: true,
      },
      videos: [
        {
            type:Schema.Types.ObjectId,
            ref: "Video"
        }
      ],
      Owner : {
        type :SchemaTypes.ObjectId,
        ref: "User",
      }
    },
    {
        timestamps: true
    }

)

export const Playlist = mongoose.model("Playlist" , playlistSchema )
