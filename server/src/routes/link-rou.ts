import express from 'express'
import { createLink, loadLinks } from '../services/link-serv'
const linkRoutes = express.Router()

linkRoutes
    .get('/', async (req, res) => {
        return await loadLinks(req, res)
    })
    .post('/create-link', async (req, res) => {
        return await createLink(req, res)
    })

export default linkRoutes