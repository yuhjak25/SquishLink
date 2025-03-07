import express from 'express'
import cors from 'cors'
import linkRoutes from './routes/link-rou'

const app = express()

app
    .use(express.json())
    .use(cors())
    .use('/api/links', linkRoutes)

export default app