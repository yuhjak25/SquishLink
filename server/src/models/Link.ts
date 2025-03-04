import { model, Schema } from "mongoose"

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
        }
    },
    { timestamps: true }
)

linkSchema.index({ createdAt: 1 }, { expireAfterSeconds: 1800 })
export default model("Link", linkSchema)