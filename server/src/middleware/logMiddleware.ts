import type { Request, Response, NextFunction } from 'express'

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now()

    res.on('finish', () => {
        const duration = Date.now() - start
        console.log(`[${req.method}] ${req.path} - ${res.statusCode} (${duration}ms)`)
    })

    next()
}