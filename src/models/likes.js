import mongoose , {Schema }from "mongoose";


const likes = new Schema (
    {
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },
        comment: {
            type :Schema.Types.ObjectId,
            ref:"Comment"
        },
        tweet: {
            type: Schema.Types.ObjectId,
            ref:"Tweet"
        },
        likedBy: {
            type : Schema.Types.ObjectId,
            ref: "User"
        },
        channel : {
            type: Schema.Types.ObjectId,
            ref:"User"
        },
    },
    { timestamps : true }
);

export const Likes = mongoose.model("Likes" , likes)