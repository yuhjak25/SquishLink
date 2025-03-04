import { model, Schema } from "mongoose";

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
        clicks: {
            type: Number,
            default: 0,
        },
        expireAfterSeconds: {
            type: Number,
            default: 1800
        },
        expireAt: {
            type: Date,
            default: function () {
                return new Date(Date.now() + (this as any).expireAfterSeconds * 1000);
            }
        }
    },
    { timestamps: true }
);

linkSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

export default model("Link", linkSchema);