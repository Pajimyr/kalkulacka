import { z } from 'zod';

export const znamkySchema = z
    .object({
        text: z.string(),
    })
    .strict();

type ZnamkySchema = z.infer<typeof znamkySchema>;
