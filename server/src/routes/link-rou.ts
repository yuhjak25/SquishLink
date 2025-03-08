import express from 'express'
import { createLink, deleteLink, loadLinks } from '../services/link-serv'
const linkRoutes = express.Router()

linkRoutes
    .get('/', async (req, res) => {
        return await loadLinks(req, res)
    })
    .post('/create-link', async (req, res) => {
        return await createLink(req, res)
    })
    .delete('/:id', async (req, res) => {
        return await deleteLink(req, res)
    })

export default linkRoutes