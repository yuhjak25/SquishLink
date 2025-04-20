import express from 'express'
import cors from 'cors'
import linkRoutes from './routes/link-rou'
import methodLogger from './middleware/methodsLogger'
import { redirectLink } from './services/link-serv'

const app = express()

app
    .use(express.json())
    .use(cors())
    .use(methodLogger)
    .get('/', (req, res) => {
        res.json('Bienvenido a la api de SquishLink')
    })
    .get('/:shortUrl', async (req, res) => {
        return await redirectLink(req, res)
    })
    .use('/api/links', linkRoutes)

export default app