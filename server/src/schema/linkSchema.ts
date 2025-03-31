import z from 'zod'

export const linkSchema = z.object({
    userLink: z.string().url({
        message: 'Please provide a valid URL (e.g., https://example.com)',
    }),
    createdLink: z.string()
        .min(3, { message: 'Custom link must be at least 3 characters long.' })
        .max(6, { message: 'Custom link cannot exceed 6 characters.' }).optional().or(z.undefined()).or(z.literal(''))
})

export const updateLinkSchema = z.object({
    updLink: z.string().min(3, { message: 'Custom link must be at least 3 characters long.' })
        .max(6, { message: 'Custom link cannot exceed 6 characters.' }),
})