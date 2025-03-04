import express from 'express'
export const app = express()

import type { Request, Response } from 'express'

import { linkRoutes } from './routes/link'
import { logMiddleware } from './middleware/logMiddleware'



app
    .get('/', (_req: Request, res: Response) => {
        res.json({ message: 'Welcome to SquishLink API' })
    })
    .use(express.json())
    .use(logMiddleware)
    .use('/api/links', linkRoutes)
