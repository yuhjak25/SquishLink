import express from 'express'
export const app = express()

import { linkRoutes } from './routes/link'
import { logMiddleware } from './middleware/logMiddleware'
import { validateMiddleware } from './middleware/validateSchema'
import { linkSchema } from './schemas/linkSchema'


app
    .use(express.json())
    .use(logMiddleware)
    .use('/api/links', linkRoutes)
