import express from 'express';
import type { Response, Request } from 'express';
import { generateShortUrl, redirectShortUrl } from '../services/link';
import { validateMiddleware } from '../middleware/validateSchema';
import { linkSchema } from '../schemas/linkSchema';


export const linkRoutes = express.Router();

linkRoutes
    .post('/short', validateMiddleware(linkSchema), async (req, res) => {
        return await generateShortUrl(req, res)
    })
    .get('/:shortUrl', async (req, res) => {
        return await redirectShortUrl(req, res)
    })
    .get('/', (_req: Request, res: Response) => {
        res.json({ message: 'Welcome to SquishLink API' });
    });
