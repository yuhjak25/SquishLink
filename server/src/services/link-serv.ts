import type { Request, Response } from 'express'
import Link from '../models/Link'
import { nanoid } from 'nanoid'

export const loadLinks = async (_req: Request, res: Response): Promise<void> => {
    try {
        const linksData = await Link.find({})

        if (linksData.length === 0) {
            res.json({
                message: 'There are no links.'
            })
        } else {
            res.json({
                linksData
            })
        }
    } catch (e) {
        res.status(500).json({
            error: 'A server error occurred: Failed to load the links.'
        })
        console.log('Error:', e)
        return
    }
}

export const createLink = async (req: Request, res: Response): Promise<void> => {
    try {
        const { linkData } = req.body

        if (!linkData) {
            res.status(400).json({
                error: 'Missing link data.'
            })
            return
        }

        const newLinkData = `https://squishlink/${nanoid(6)}`

        const totalLinks = await Link.countDocuments({
            userLink: linkData
        })

        if (totalLinks >= 30) {
            res.status(400).json({
                error: 'You cannot have more than 30 links.'
            })
            return
        } else {
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
        }
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
        } else {
            res.status(200).json({
                message: 'Successfully deleted the link.'
            })
        }

    } catch (e) {
        res.status(500).json({
            error: 'A server error ocurred: Failed to delete the link.'
        })
        console.log('Error:', e)
        return
    }
}