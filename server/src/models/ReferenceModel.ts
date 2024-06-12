import { z } from 'zod';

export const ReferenceModel = z.object({
    referenceId: z.number().positive(),
    applicantId: z.number().positive(),
    referenceName: z.string(),
    referenceProfession: z.string(),
    referenceYearsKnown: z.number().positive()
});

export type Reference = z.infer<typeof ReferenceModel>;
