import express from 'express'
import { createLink, deleteLink, loadLinks, updateLink } from '../services/link-serv'
import { zValidator } from '../middleware/zValidator'
import { linkSchema } from '../schema/linkSchema'
const linkRoutes = express.Router()

linkRoutes
    .get('/', async (req, res) => {
        return await loadLinks(req, res)
    })
    .post('/create-link', zValidator(linkSchema), async (req, res) => {
        return await createLink(req, res)
    })
    .delete('/:id', async (req, res) => {
        return await deleteLink(req, res)
    })
    .put('/:id', async (req, res) => {
        return await updateLink(req, res)
    })

export default linkRoutes