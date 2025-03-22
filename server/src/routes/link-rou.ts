import express from 'express'
import { addCount, createLink, deleteLink, loadLinks, updateLink } from '../services/link-serv'
import { zValidator } from '../middleware/zValidator'
import { linkSchema, updateLinkSchema } from '../schema/linkSchema'
const linkRoutes = express.Router()

linkRoutes
    .get('/', async (req, res) => {
        return await loadLinks(req, res)
    })
    .post('/create-link', zValidator(linkSchema), async (req, res) => {
        return await createLink(req, res)
    })
    .post('/add-count/:id', async (req, res) => {
        return await addCount(req, res)
    })
    .delete('/:id', async (req, res) => {
        return await deleteLink(req, res)
    })
    .put('/:id', zValidator(updateLinkSchema), async (req, res) => {
        return await updateLink(req, res)
    })

export default linkRoutes