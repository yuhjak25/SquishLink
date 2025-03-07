import type { Request, Response } from 'express'
import Link from '../models/Link'
import { nanoid } from 'nanoid'

const createLink = async (req: Request, res: Response): Promise<void> => {
    try {
        const { linkData } = req.body

        if (!linkData) {
            res.status(400).json({
                error: 'Missing link data.'
            })
            return
        }

        const newLinkData = `https://squishlink/${nanoid(6)}`

        const findLink = await Link.findOne({
            userLink: linkData
        })

        if (findLink) {
            res.status(400).json({
                error: 'This link already exists.'
            })
            return
        }

        const newLink = new Link({
            userLink: linkData,
            createdLink: newLinkData
        })

        await newLink.save()
        res.status(200).json({
            message: 'Your link was created successfully.'
        })
    } catch (e) {
        res.status(500).json({
            error: 'A server error ocurred: Failed to create the link.'
        })
        console.log('Error:', e)
    }
}

export default createLink