import z from 'zod'

export const linkSchema = z.object({
    userLink: z.string().url(),
    createdLink: z.string().max(6).min(3).optional().or(z.undefined()).or(z.literal(''))
})