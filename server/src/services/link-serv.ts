import type { Request, Response } from 'express'
import Link from '../models/Link'
import { nanoid } from 'nanoid'

export const loadLinks = async (_req: Request, res: Response): Promise<void> => {
    try {
        const links = await Link.find({})

        res.json(links)
    } catch (e) {
        res.status(500).json({
            error: 'A server error occurred: Failed to load the links.'
        })
        console.log('Error:', e)
    }
}

export const createLink = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userLink, createdLink } = req.body
        console.log("Request body:", req.body)
        const totalLinks = await Link.countDocuments()

        if (totalLinks >= 15) {
            res.status(400).json({
                error: 'The limit of 15 links has been reached.'
            })
            return
        }

        if (!userLink) {
            res.status(400).json({
                error: 'Missing link data.'
            })
            return
        }

        const findLink = await Link.findOne({
            userLink
        })

        if (findLink) {
            res.status(400).json({
                error: 'This link already exists.'
            })
            return
        }

        if (createdLink) {
            const existingCustomLink = await Link.findOne({ createdLink: `https://squishlink/${createdLink}` })

            if (existingCustomLink) {
                res.status(400).json({ error: 'This custom link is already taken.' })
                return
            }
        }

        const finalLink = createdLink ? `https://squishlink/${createdLink}` : `https://squishlink/${nanoid(6)}`

        const newLink = new Link({
            userLink,
            createdLink: finalLink
        })

        await newLink.save()
        console.log(newLink)
        res.status(200).json(newLink)
    } catch (e) {
        res.status(500).json({
            error: 'A server error ocurred: Failed to create the link.'
        })
        console.log('Error:', e)
        return
    }
}

export const addCount = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        if (!id) {
            res.status(400).json({
                error: 'Missing id or not found'
            })
            return
        }

        const findLinkById = await Link.findById(id)

        if (!findLinkById) {
            res.status(404).json({
                error: 'Link not found.'
            })
            return
        }

        findLinkById.count += 1
        await findLinkById.save()
        res.json({
            id: findLinkById._id,
            count: findLinkById.count
        })
    } catch (e) {
        res.status(500).json({
            error: 'A server error ocurred: Failed to delete the link.'
        })
        console.log('Error:', e)
        return
    }
}

export const deleteLink = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        if (!id) {
            res.status(400).json({
                error: 'Missing id or not found'
            })
            return
        }

        const findLinkById = await Link.findByIdAndDelete(id)

        if (!findLinkById) {
            res.status(404).json({
                error: 'Link not found.'
            })
            return
        }

        res.status(200).json({
            message: 'Successfully deleted the link.'
        })
    } catch (e) {
        res.status(500).json({
            error: 'A server error ocurred: Failed to delete the link.'
        })
        console.log('Error:', e)
        return
    }
}

export const updateLink = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const { updLink } = req.body

        if (!id) {
            res.status(400).json({
                error: 'Missing id or not found'
            })
            return
        }
        const finalLink = `https://squishlink/${updLink}`

        const updatedLink = await Link.findByIdAndUpdate(id, { createdLink: finalLink }, { new: true })

        if (!updatedLink) {
            res.status(404).json({ error: 'Link not found.' })
            return
        }

        res.status(200).json({
            message: 'Successfully updated the link.',
            createdLink: finalLink
        })
    } catch (e) {
        res.status(500).json({
            error: 'A server error ocurred: Failed to updated the link.'
        })
        console.log('Error:', e)
        return
    }
}
