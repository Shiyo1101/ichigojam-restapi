import * as z from 'zod'
import { zValidator } from "@hono/zod-validator"

export const querySchema = z.object({
  limit: z.string().optional(),
  offset: z.string().optional()
})

