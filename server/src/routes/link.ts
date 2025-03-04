import express from 'express';
import type { Response, Request } from 'express';
import { generateShortUrl } from '../services/link';

export const linkRoutes = express.Router();

linkRoutes
    .post('/short', async (req, res) => {
        const link = req.body
        generateShortUrl(link, res)
    })
    .get('/', (req: Request, res: Response) => {
        res.json({ message: 'Welcome to SquishLink API' });
    });
