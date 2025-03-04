import express from 'express'
import cors from 'cors'
export const app = express()

import type { Request, Response } from 'express'

import { linkRoutes } from './routes/link'
import { logMiddleware } from './middleware/logMiddleware'



app.use(express.json())
    .use(cors())
    .use(logMiddleware)
    .use('/api/links', linkRoutes)
    .get('/', (_req: Request, res: Response) => {
        res.json({ message: 'Welcome to SquishLink API' })
    })

