import express from 'express'
export const app = express()

import { linkRoutes } from './routes/link'

app.use(express.json())
    .use('/api/links', linkRoutes)