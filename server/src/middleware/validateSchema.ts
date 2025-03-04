import type { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'

export const validateMiddleware = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const result = schema.safeParse(req.body)

        if (!result.success) {
            res.status(400).json({ error: result.error.format() })
            return
        }

        next()
    }
}
