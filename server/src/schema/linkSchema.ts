import z from 'zod'

export const linkSchema = z.object({
    userLink: z.string().url()
})