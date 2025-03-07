import express from 'express'
import createLink from '../services/link-serv'

const linkRoutes = express.Router()

linkRoutes
    .get('/', (req, res) => {
        res.json('Bienvenido a la api de SquishLink')
    })
    .post('/create-link', async (req, res) => {
        return await createLink(req, res)
    })

export default linkRoutes