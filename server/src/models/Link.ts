import { model, Schema } from "mongoose";

const linkSchema = new Schema(
    {
        userLink: {
            type: String,
            required: true,
            trim: true
        },
        createdLink: {
            type: String,
            unique: true,
            trim: true
        }
    },
    { timestamps: true }
)

export default model('Link', linkSchema)