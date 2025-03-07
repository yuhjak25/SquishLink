import app from './app'
import { PORT } from './constants'
import { connectDb } from './db/connectDb'

connectDb()

app
    .listen(PORT, () => {
        console.log(`[INFO] Server running in: http://localhost:${PORT}`)
    })
