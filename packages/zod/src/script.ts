// Generated by ts-to-zod
import { z } from 'zod'

export const scriptSchema = z.object({
  async: z.boolean(),
  crossorigin: z.union([z.literal(''), z.literal('anonymous'), z.literal('use-credentials')]),
  defer: z.string(),
  fetchpriority: z.union([z.literal('high'), z.literal('low'), z.literal('auto')]),
  integrity: z.string(),
  nomodule: z.boolean(),
  nonce: z.string(),
  referrerpolicy: z.union([z.literal(''), z.literal('no-referrer'), z.literal('no-referrer-when-downgrade'), z.literal('origin'), z.literal('origin-when-cross-origin'), z.literal('same-origin'), z.literal('strict-origin'), z.literal('strict-origin-when-cross-origin'), z.literal('unsafe-url')]),
  src: z.string(),
  type: z.union([z.literal(''), z.literal('text/javascript'), z.literal('module')]),
  key: z.string(),
  children: z.string(),
})

export const scriptEntriesSchema = z.array(scriptSchema.partial())
