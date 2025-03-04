import express from 'express'
import { generateShortUrl, getShortUrls, redirectShortUrl } from '../services/link'
import { validateMiddleware } from '../middleware/validateSchema'
import { linkSchema } from '../schemas/linkSchema'


export const linkRoutes = express.Router()

linkRoutes
    .post('/short', validateMiddleware(linkSchema), async (req, res) => {
        return await generateShortUrl(req, res)
    })
    .get('/:shortUrl', async (req, res) => {
        return await redirectShortUrl(req, res)
    })
    .get('/', async (req, res) => {
        return await getShortUrls(req, res)
    })

