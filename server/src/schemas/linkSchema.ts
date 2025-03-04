import z from 'zod';

export const linkSchema = z.object({
    oldUrl: z.string().url({ message: "Invalid URL" }),
    newUrl: z.string().optional(),
    expiresAt: z.date().optional()
});
