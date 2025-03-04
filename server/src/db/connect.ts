import mongoose from "mongoose"
import { MONGODB_URI } from "../constants"

const connectDb = () => {
    if (!MONGODB_URI) {
        console.log('Mongo url not specified.')
        process.exit(1)
    }

    mongoose.connect(MONGODB_URI).then(() => {
        console.log('[INFO] ✅ Connected to Mongo.')
    }).catch((e) => {
        console.log('Error connecting to Mongo.', e)
    })
}

export default connectDb