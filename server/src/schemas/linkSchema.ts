import z from 'zod';

export const linkSchema = z.object({
    link: z.string().url({ message: "Invalid URL" }),
    newUrl: z.string().optional(),
    expiresAt: z.date().optional()
});
