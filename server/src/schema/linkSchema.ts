import z from 'zod'

export const linkSchema = z.object({
    userLink: z.string().url(),
    createdLink: z.string().max(6).min(3).optional().or(z.undefined()).or(z.literal(''))
})

export const updateLinkSchema = z.object({
    createdLink: z.string().max(6).min(3)
})