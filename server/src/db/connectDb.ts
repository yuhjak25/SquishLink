import mongoose from "mongoose"
import { MONGODB_URI } from "../constants"

export const connectDb = () => {
    if (!MONGODB_URI) {
        console.log('Error. Mongodb URI wasn\'t sent.')
        process.exit(1)
    }

    mongoose
        .connect(MONGODB_URI)
        .then(() => {
            console.log('[INFO] Connected to Mongodb URI. ✅')
        }).catch((e) => {
            console.log('[ERROR] Connecting to Mongodb URI.', e)
        })
}