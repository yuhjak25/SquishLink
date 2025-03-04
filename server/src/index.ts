import { app } from './app'
import { PORT } from './constants'
import connectDb from './db/connect'

connectDb()

app.listen(PORT, () => {
    console.log(`[INFO] Server running on port http://localhost:${PORT}`)
})