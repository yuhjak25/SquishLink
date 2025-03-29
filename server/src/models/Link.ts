import { model, Schema } from "mongoose"

const linkSchema = new Schema(
    {
        userLink: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        createdLink: {
            type: String,
            unique: true,
            trim: true
        },
        count: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
)

export default model('Link', linkSchema)