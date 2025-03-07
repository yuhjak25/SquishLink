import express from 'express'
import cors from 'cors'
import linkRoutes from './routes/link-rou'
import methodLogger from './middleware/methodsLogger'

const app = express()

app
    .use(express.json())
    .use(cors())
    .use(methodLogger)
    .use('/api/links', linkRoutes)

export default app