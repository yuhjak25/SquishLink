import z from 'zod'

export const linkSchema = z.object({
    linkData: z.string().url()
})