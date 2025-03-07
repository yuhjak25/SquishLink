import express from 'express'

const linkRoutes = express.Router()

linkRoutes
    .get('/', (req, res) => {
        res.json('Bienvenido a la api de SquishLink')
    })
    .post('/create-link', async (req, res) => {

    })