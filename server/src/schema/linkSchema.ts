import z from 'zod'

export const linkSchema = z.object({
    userLink: z.string().url(),
    createdLink: z.string().length(6).optional().or(z.undefined())
})