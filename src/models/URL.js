import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
    {
        shortId: {
            type: String,
            required: true,
            unique: true,
        },
        redirectURL: {
            type: String,
            required: true,
        },
        visitedHistory: [
            {
                timeStamp: {
                    type: Number,
                },
            },
        ],
    },
    { timestamps: true }
);

export const URL = mongoose.models.url || mongoose.model("url", urlSchema);
