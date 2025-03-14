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
        const { userLink, customLink } = req.body

        if (!userLink) {
            res.status(400).json({
                error: 'Missing link data.'
            })
            return
        }

        const createdLink = customLink ? `https://squishlink/${customLink}` : `https://squishlink/${nanoid(6)}`

        const existingCustomLink = await Link.findOne({ createdLink })
        if (existingCustomLink) {
            res.status(400).json({ error: 'Custom link already in use.' })
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

        const newLink = new Link({
            userLink,
            createdLink
        })

        await newLink.save()
        res.status(200).json(newLink)

    } catch (e) {
        res.status(500).json({
            error: 'A server error ocurred: Failed to create the link.'
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