import { z } from 'zod';

export const EmploymentHistoryModel = z.object({
    employmentHistoryId: z.number().positive(),
    applicantId: z.number().positive()
});
