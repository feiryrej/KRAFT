import { z } from 'zod'

export const JobApplicationModel = z.object({
    jobApplicationId: z.number().positive(),
    applicantId: z.number().positive(),
})

export type JobApplication = z.infer<typeof JobApplicationModel>