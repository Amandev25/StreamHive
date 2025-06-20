import mongoose , { Schema } from "mongoose";

const subsSchema = new Schema (
    {
        subscriber: {
            type :Schema.Types.ObjectId,
            ref:"User",
        },
        channel: {
            type :Schema.Types.ObjectId,
            ref:"User",
        },

    },
    { timestamp: true}
);

export const Subs = mongoose.model("Subscription" , subsSchema)
