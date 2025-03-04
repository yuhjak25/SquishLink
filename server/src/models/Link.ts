import mongoose, { model, Schema } from "mongoose";

const linkSchema = new Schema(
    {
        oldUrl: {
            type: String,
            required: true,
            unique: true
        },
        newUrl: {
            type: String,
            unique: true,
            immutable: true
        },
        expireAfterSeconds: {
            type: Number,
            default: 60
        }
    },
    { timestamps: true }
);

linkSchema.index({ createdAt: 1 }, { expireAfterSeconds: 1800 });
export default model("Link", linkSchema);