import { z } from 'zod'

export const EducationHistoryModel = z.object({
    educationHistoryId: z.number().positive(),
    applicantId: z.number().positive(),
})