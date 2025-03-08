import { type ZodSchema } from "zod";
import type { NextFunction, Request, Response } from "express";

export const zValidator = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({
            message: 'Validation failed',
            error: result.error.errors,
        });
        return
    }

    next()
};
