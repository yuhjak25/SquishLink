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
        expiresAt: { type: Date, default: () => new Date(Date.now() + 60 * 60 * 1000), index: { expires: 3600 } }
    },
    { timestamps: true }
);

export default model("Link", linkSchema);
