import type { Request, Response } from 'express'

const createLink = async (req: Request, res: Response): Promise<void> => {
    try {
        const { linkData } = req.body

        if (!linkData) {
            res.status(400).json({
                error: 'Missing link data.'
            })
            return
        }

        res.json({ message: 'Succesfully created your link.' })

    } catch (e) {
        res.status(500).json({
            error: 'A server error ocurred: Failed to create the link.'
        })
        console.log('Error:', e)
    }
}