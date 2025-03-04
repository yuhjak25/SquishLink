import type { Request, Response } from 'express'
import { nanoid } from 'nanoid'
import Link from '../models/Link'

export const generateShortUrl = async (req: Request, res: Response) => {
    try {
        const { link } = req.body

        if (!link) {
            return res.status(400).json({ error: 'Link was not provided' })
        }

        const existingUrl = await Link.findOne({ oldUrl: link })

        if (existingUrl) {
            return res.json({ shortUrl: existingUrl.newUrl, message: 'URL already exists' })
        }

        const endUrl = nanoid(6)
        const shortUrl = `http://squishlink/${endUrl}`

        const newUrl = new Link({
            oldUrl: link,
            newUrl: shortUrl
        })

        await newUrl.save()

        return res.json({ shortUrl })
    } catch (e) {
        console.error('Something went wrong', e)
        return res.status(500).json({ error: 'Internal server error' })
    }
}
