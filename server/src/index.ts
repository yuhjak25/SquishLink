import app from './app'
import { PORT } from './constants'

app.listen(PORT, () => {
    console.log(`\nServer running in: \nhttp://localhost:${PORT}\n\n`)
})
