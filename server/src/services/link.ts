import type { Request, Response } from 'express'
import { nanoid } from 'nanoid'
import Link from '../models/Link'

export const generateShortUrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const { link } = req.body

        if (!link) {
            res.status(400).json({ error: 'Link was not provided' })
            return
        }

        const existingUrl = await Link.findOne({ oldUrl: link })

        if (existingUrl) {
            res.json({ shortUrl: existingUrl.newUrl, message: 'URL already exists' })
            return
        }

        const endUrl = nanoid(6)
        const shortUrl = `http://squishlink/${endUrl}`

        const newUrl = new Link({
            oldUrl: link,
            newUrl: shortUrl
        })

        await newUrl.save()

        res.json({ shortUrl })
        return
    } catch (e) {
        console.error('Something went wrong', e)
        res.status(500).json({ error: 'Internal server error' })
        return
    }
}
